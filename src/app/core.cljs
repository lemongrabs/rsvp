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
                       :results nil
                       :party {}}
         :party {}
         :selection {:party nil
                     :guests nil}
         :response {:contact nil
                    :food-preferences ""
                    :infos {}
                    :sent false}}))

(defn search []
  (om/ref-cursor (:rsvp-search (om/root-cursor app-state))))

(defn selection []
  (om/ref-cursor (get-in (om/root-cursor app-state) [:selection])))

(defn response []
  (om/ref-cursor (get-in (om/root-cursor app-state) [:response])))

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

(defn reset-search! [owner]
  (let [search (om/observe owner (search))]
    (om/update! search :name "")
    (om/update! search :results nil)))

(defn reset-selection! [owner]
  (let [selection (om/observe owner (selection))]
    (om/update! selection :party nil)
    (om/update! selection :guests nil)))

(defn select-party! [owner party]
  (let [selection (om/observe owner (selection))]
    (go (om/update! selection :party party)
        (let [guests (mapv #(dissoc % :party)
                           (<! (guests-in-party (:id party))))]
          (om/update! selection :guests guests)))))

(defn party-selected? [owner]
  (let [{:keys [party guests] :as selection} (om/observe owner (selection))]
    (every? some? [party guests])))

(defn reset-response! [owner]
  (let [response (om/observe owner (response))]
    (om/update! response :contact nil)
    (om/update! response :food-preferences "")
    (om/update! response :infos {})
    (om/update! response :sent false)))

(defn reset-all! [owner]
  (reset-search! owner)
  (reset-selection! owner)
  #_(reset-response! owner))

(defn nav-view [{:keys [selected rsvp-search]} owner]
  (reify om/IRender
    (render [_]
      (html [:header
             [:h1 "Anh-Thu + Zane"]
             [:ul
              (map (fn [[key text]]
                     [:li (if (= selected [key]) {:class "selected"} {})
                      [:a {:onClick #(do (reset-all! owner)
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
                                       (select-party! owner (get-in guests [0 :party]))))))}
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

(defn send-rsvps! [{:keys [party guests] :as selection} {:keys [contact food-preferences infos sent] :as response}]
  (go (try (let [[result response-or-error] (<! (parse/save Response {:party (let [p (Party.)]
                                                                               (set! (.-id p)
                                                                                     (get-in party [:id]))
                                                                               p)
                                                                      :contact contact
                                                                      :foodPreferences food-preferences}))]
             (if (= :success result)
               (doseq [[id {:keys [corrected-name attending]}] infos]
                 (let [[result info-or-error] (<! (parse/save Info {:response response-or-error
                                                                    :guest (let [g (Guest.)]
                                                                             (set! (.-id g)
                                                                                   id)
                                                                             g)
                                                                    :correctedName corrected-name
                                                                    :attending attending}))]
                   (when-not (= result :success)
                     (js/console.error "Error! Error! " info-or-error)
                     (throw info-or-error))))
               (throw response-or-error)))
           [:success]
           (catch :default e
             [:error e]))))

(defn rsvp-card-view [{:keys [party guests] :as selection} owner]
  (reify
    om/IRender
    (render [_]
      (let [{:keys [contact food-preferences infos] :as response} (om/observe owner (response))]
        (when (nil? contact)
          (om/update! response :contact (:contact party)))
        
        (html
         [:div
          [:main
           [:h1 "Selection"]
           [:code (with-out-str (cljs.pprint/pprint selection))]
           [:h1 "Response"]
           [:code (with-out-str (cljs.pprint/pprint response))]]
          [:main
           [:h2 "RSVP"]
           [:form {:id "rsvpsubmit"
                   :onSubmit (fn [e]
                               (.preventDefault e)
                               (go (let [[result data] (<! (send-rsvps! selection response))]
                                     (condp = result
                                       :success (om/update! response :sent true)
                                       :failure (js/console.error "Error sending response to Parse:" data)))))}
            [:section {:class "guests"}
             (map-indexed
              (fn [idx {id :id, original-name :name :as info}]
                [:div
                 [:input {:type "text"
                          :class "guestname"
                          :value (or (get-in infos [id :corrected-name]) original-name)
                          :ref (str id "name")
                          :onChange #(om/update! response [:infos id :corrected-name] (.-value (om/get-node owner (str id "name"))))}]
                 [:fieldset
                  [:div
                   (let [radio-name (str "guest" idx "rsvp")]
                     (map (fn [[label for-str val]]
                            (let [input-id (str "guest" idx for-str)]
                              [:div
                               [:input (cond-> {:type "radio"
                                                :id input-id
                                                :name radio-name
                                                :onChange #(om/update! response [:infos id :attending] val)}
                                         (= val (get-in infos [id :attending]))
                                         (assoc :checked true))]
                               [:label {:for input-id}
                                label]]))
                          (partition 3 ["Will attend"   "yes" true
                                        "Sends regrets" "no" false])))]]])
              guests)
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

             [:button {:type "submit"} "RSVP"]]]]])))))

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
                          {:onClick #(select-party! owner party)}
                          "Select"]])
                      results)]
        [:p "Can't find your RSVP? "
         [:a {:onClick #(do (.preventDefault %)
                            (reset-search! owner)
                            (reset-selection! owner))}
          "Search again"]]]))))

(defn rsvp-confirmation-view [response owner]
  (om/component
   (html
    [:main
     [:h1 "Confirmed!"]
     [:pre (with-out-str (pp/pprint @response))]])))

(defn rsvp-search-results-view [{:keys [name results] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (let [{:keys [party] :as selection} (om/observe owner (selection))
            {:keys [infos sent] :as response} (om/observe owner (response))]
        (cond (true? sent)            (om/build rsvp-confirmation-view response)
              (party-selected? owner) (om/build rsvp-card-view selection)
              (seq results)           (om/build rsvp-multiple-results-view data)
              :else                   (html [:main
                                             [:h2 (str "Oops! No results found for '" name "'")]
                                             [:p "Can't find your RSVP? "
                                              [:a {:onClick #(do (.preventDefault %)
                                                                 (reset-search! owner)
                                                                 (reset-selection! owner))}
                                               "Search again"]]]))))))

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
