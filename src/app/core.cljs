(ns app.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [>! <!] :as async]
            [clojure.string :as str]
            [cljs.pprint :as pp]
            [app.parse :as parse]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [app.parties :as parties]))

(enable-console-print!)

(defonce app-state
  (atom {:selected [:details]
         :rsvp-search {:name ""
                       :results nil}
         :response {:contact nil
                    :food-preferences ""
                    :infos nil
                    :sent false}}))

(defn response []
  (om/ref-cursor (:response (om/root-cursor app-state))))

(defonce Response (.extend (.-Object parse/Parse) "Response"))
(defonce Info (.extend (.-Object parse/Parse) "Info"))
(defonce Party (.extend (.-Object parse/Parse) "Party"))
(defonce Guest (.extend (.-Object parse/Parse) "Guest"))

(defn save-parties [parties]
  (go (doseq [{:keys [names contact has-plus-one]} parties]
        (let [party (<! (parse/save Party {:contact contact
                                           :additional (if has-plus-one 1 0)}))]
          (doseq [name names]
            (<! (parse/save Guest {:name name
                                   :party party})))))))

(defn search-guests [search-str]
  (go (if-let [result (<! (-> (parse/query Guest)
                              (parse/matches "name" search-str)
                              (parse/include "party")
                              (parse/query-find)))]
        (-> (mapv (fn [guest]
                    (-> guest
                        (parse/parse-obj->map)
                        (update-in [:party] parse/parse-obj->map)))
                  (js->clj result)))
        [])))

(defn guests-in-party [party-id]
  (go (if-let [result (<! (-> (parse/query Guest)
                              (parse/equal-to "party" (let [party (Party.)]
                                                        (set! (.-id party) party-id)
                                                        party))
                              (parse/include "party")
                              (parse/query-find)))]
        (-> (mapv (fn [guest]
                      (-> guest
                          (parse/parse-obj->map)
                          (update-in [:party] parse/parse-obj->map)))
                    (js->clj result)))
        [])))

(defn nav-view [{:keys [selected rsvp-search]} owner]
  (reify om/IRender
    (render [_]
      (html [:header
             [:h1 "Anh-Thu + Zane"]
             [:ul
              (map (fn [[key text]]
                     [:li (if (= selected [key]) {:class "selected"} {})
                      [:a {:href "#"
                           :onClick #(do (om/update! rsvp-search :results nil)
                                         (om/update! rsvp-search :guests-in-party nil)
                                         (om/update! rsvp-search :party nil)
                                         (om/update! selected 0 key))}
                       text]])
                   (partition 2 [:details       "Details"
                                 :where-to-stay "Where to stay"
                                 :rsvp          "RSVP"]))
              [:li [:a {:href "http://thankfulregistry.com/anhthuandzane"} "Registry"]]]]))))

(defn details-view [selected owner]
  (om/component
   (html
    [:main
     [:h2 "Our celebration"]
     [:p "We eloped on May 11th, 2015 in a private ceremony at San Francisco City Hall, and are so excited to bring our friends and families together to celebrate."]
     [:p {:className "center"}
      [:strong "Saturday, September 19th 2015"]
      [:br] "6pm"
      [:br] "Cocktails, dinner, and music"]
     [:p {:className "center"}
      [:a {:href "https://goo.gl/maps/wXKle"} "Kinfolk 94"]
      [:br] "94 Wythe Ave."
      [:br] "Brooklyn, NY 11249"
      [:br] "(near the Bedford L stop, or the Nassau G stop)"]
     [:p
      "We would love it if you could "
      [:a {:onClick #(do (.. % (preventDefault %))
                         (om/update! selected 0 :rsvp))}
       "RSVP"]
      " by August 19th!"]])))

(def where-to-stay
  (html
   [:main
    [:h2 "Where to stay"]
    [:p "There are tons of great accommodations available in NYC, but we are also happy to help you in your search! Consider this a starting list of recommendations."]
    [:p "Our venue is located in Williamsburg (94 Wythe Ave.) near both the L and the G trains, so if maximum ease of transportation to the event is a concern we'd recommend searching for lodging that's within walking distance of either of those train lines."]
    [:ul
     [:li
      [:a {:href "https://www.airbnb.com"} "AirBnB"]
      " - Williamsburg and Greenpoint will probably be the most convenient neighborhoods to search for, but anything in Manhattan south of Central Park or in Brooklyn off of the L or G train lines would be a convenient subway ride away."]
     (map (fn [{:keys [url name notes]}]
            [:li
             [:a {:href url} name]
             ": " notes])
          [{:url "http://wythehotel.com/"
            :name "Wythe Hotel"
            :notes "80 Wythe Ave., Brooklyn ($$$, but across the street from our venue!)"}
           {:url "http://hotel17ny.com/"
            :name "Hotel 17"
            :notes "225 E. 17th St., Manhattan ($$)"}
           {:url "http://www.theboxhousehotel.com/"
            :name "The Box House Hotel"
            :notes "77 Box St., Brooklyn ($$)"}
           {:url "http://www.nylofthostel.com/"
            :name "New York Loft Hostel"
            :notes "249 Varet St., Brooklyn ($)"}])]]))

(defn rsvp-search-view [{:keys [name results] :as data} owner]
  (reify om/IRender
    (render [_]
      (html
       [:main
        [:h2 "RSVP"]
        [:form {:id "rsvpsearch"
                :onSubmit #(do (.. % (preventDefault))
                               (go (let [guests (<! (search-guests name))]
                                     (om/update! data :results guests)
                                     (when (= 1 (count guests))
                                       (om/update! data :guests-in-party (first guests))))))}
         [:label {:for "guestsearch"} "Enter the name on your invitation:"]
         [:input {:type "text"
                  :name "guestseearch"
                  :class "guestsearch"
                  :placeholder "e.g. Barack and Michelle Obama"
                  :value name
                  :ref "name"
                  :onChange #(om/update! data :name (.-value (om/get-node owner "name")))}]
         [:button {:type "submit"}
          "Find RSVP"]]]))))

(defn send-rsvps! [{:keys [contact food-preferences infos sent] :as response}]
  (go (let [[result response-or-error] (<! (parse/save Response {:contact contact
                                                 :foodPreferences food-preferences}))]
        (if (= :success result)
          (doseq [{:keys [id name attending]} infos]
            (let [[result info-or-error] (<! (parse/save Info {:response response-or-error
                                                               :guest (let [guest (Guest.)]
                                                                        (set! (.-id guest) id)
                                                                        guest)
                                                               :name name
                                                               :attending attending}))]
              (when-not (= result :success)
                (throw info-or-error))))
          (throw response-or-error)))))

(defn rsvp-card-view [{:keys [guests] :as party} owner]
  (reify
    om/IRender
    (render [_]
      (let [{:keys [contact food-preferences infos] :as response} (om/observe owner (response))]
        (when (nil? contact)
          (om/update! response :contact (:contact party)))

        (html
         [:main
          [:h2 "RSVP"]
          [:form {:id "rsvpsubmit"
                  :onSubmit (fn [e]
                              (.preventDefault e)
                              (try (send-rsvps! response)
                                   (om/update! response :sent true)
                                   (catch js/Error e
                                     (js/console.error "Error sending response to Parse:" e))))}
           [:section {:class "guests"}
            (map-indexed
             (fn [idx {:keys [id name attending] :as info}]
               [:div
                [:input {:type "text"
                         :class "guestname"
                         :value name
                         :ref (str id "name")
                         :onChange #(om/update! response [:infos idx :name] (.-value (om/get-node owner (str id "name"))))}]
                [:fieldset
                 [:div
                  (let [radio-name (str "guest" idx "rsvp")]
                    (map (fn [[label for-str val]]
                           (let [input-id (str "guest" idx for-str)]
                             [:div
                              [:input {:type "radio"
                                       :id input-id
                                       :name radio-name
                                       :onChange #(om/update! response [:infos idx :attending] val)}]
                              [:label {:for input-id}
                               label]]))
                         (partition 3 ["Will attend"   "yes" true
                                       "Sends regrets" "no" false])))]]])
             infos)
            [:p {:class "small"}
             "(If we've gotten anyone's name wrong, we apologize! Please correct it here so that we can stop embarrassing ourselves.)"]]
           [:section {:class "addendums"}
            [:label {:for "foodpref", :class "small"}
             "We are planning on serving a buffet style meal that will be suitable for both meat eaters and vegetarians. Do you have any dietary restrictions or allergies that we should be aware of?"]
            [:textarea {:name "foodpref"
                        :ref "food-preferences"
                        :value food-preferences
                        :onChange #(om/update! response :food-preferences (.-value (om/get-node owner "food-preferences")))}]

            [:label {:for "contact" :class "small"}
             "If we need to contact you with any last-minute information, is this a good email address to use?"]
            [:input {:type "text"
                     :ref "contact"
                     :value contact
                     :onChange #(om/update! response :contact (.-value (om/get-node owner "contact")))}]

            [:button {:type "submit"} "RSVP"]]]])))))

(defn rsvp-multiple-results-view [{:keys [name results] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (html
       [:main
        [:h2 (str "Oops! There are multiple matches for '" name "'")]
        [:ul {:id "rsvpresults"}
         (map-indexed (fn [n {:keys [name party]}]
                        [:li
                         [:span name]
                         [:button
                          {:onClick (fn [_]
                                      (go (om/update! data :party (assoc party
                                                                         :guests (<! (guests-in-party (:id party)))))))}
                          "Select"]])
                      results)]
        [:p "Can't find your RSVP? "
          [:a {:href "???"} "Search again"]]]))))

(defn rsvp-confirmation-view [response owner]
  (om/component
   (html
    [:main
     [:h1 "Confirmed!"]
     [:pre (with-out-str (pp/pprint @response))]])))

(defn rsvp-search-results-view [{:keys [name results party] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (let [{:keys [infos sent] :as response} (om/observe owner (response))]
        (when (and (some? party)
                   (nil? infos))
          (om/update! response :infos (mapv (fn [guest]
                                              (assoc (select-keys guest [:id :name])
                                                     :attending nil))
                                            (:guests party))))
        (cond (true? sent) (om/build rsvp-confirmation-view response)
              (some? party) (om/build rsvp-card-view party)
              (seq results) (om/build rsvp-multiple-results-view data)
              :else (html [:main
                            [:h2 (str "Oops! No results found for '" name "'")]
                            [:p "Can't find your RSVP? "
                              [:a {:href "???"} "Search again"]]]))))))

(defn rsvp-view [{:keys [results] :as data} owner]
  (reify om/IRender
    (render [_]
      (cljs.pprint/pprint data)
      (let [{:keys [sent] :as response} (om/observe owner (response))]
        (if sent
          (om/build rsvp-confirmation-view response)
          (if (nil? results)
            (om/build rsvp-search-view data)
            (om/build rsvp-search-results-view data)))))))

(defn main-view [{:keys [selected rsvp-search] :as data} owner]
  (reify om/IRender
    (render [_]
      (println "@app-state" data)
      (html
       [:div
        (om/build nav-view data)
        (case selected
          [:details]       (om/build details-view selected)
          [:where-to-stay] where-to-stay
          [:rsvp]          (om/build rsvp-view rsvp-search))]))))

(defn main []
  (om/root main-view app-state {:target (. js/document (getElementById "app"))}))
