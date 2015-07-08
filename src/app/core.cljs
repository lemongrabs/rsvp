(ns app.core
  (:require [clojure.string :as str]
            [cljs.pprint :as pp]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]))

(enable-console-print!)

(defonce app-state
  (atom {:selected [:details]
         :rsvp-search {:name ""
                       :results nil
                       :card {:contact nil}}}))

(defn nav-view [selected owner]
  (reify om/IRender
    (render [_]
      (html [:header
             [:h1 "Anh-Thu & Zane"]
             [:ul
              (map (fn [[key text]]
                     [:li (if (= selected [key]) {:class "selected"} {})
                      [:a {:href "#"
                           :onClick #(om/update! selected 0 key)}
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
     [:p {:align "center"}
      [:strong "Saturday, September 19th 2015"]
      [:br] "6pm"
      [:br] "Cocktails, dinner, and music"]
     [:p {:align "center"}
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
      [:a {:href "https://www.airbnb.com"} "Airbnb"]
      " - Williamsburg and Greenpoint will probably be the most convenient neighborhoods to search for, but anything in Manhattan south of Central Park or in Brooklyn off of the L or G train lines would be a convenient subway ride away."]
     (map (fn [{:keys [url name notes]}]
            [:li
             [:a {:href url} name]
             ": " notes])
          
          [{:url "http://wythehotel.com/"
            :name "Wythe Hotel"
            :notes "80 Wythe Ave. ($$$, but across the street from our venue!)"}
           {:url "http://hotel17ny.com/"
            :name "Hotel 17"
            :notes "225 E. 17th St. ($$)"}
           {:url "http://www.nylofthostel.com/"
            :name "New York Loft Hostel"
            :notes "249 Varet St. ($)"}])]]))

(defn find-results [x]
  [[{:name "Henry Bean", :email "henry@bean.com"}
    {:name "Zelda Cat", :email "zelda@cat.com"}]
   [{:name "Disco Cat", :email "disco@cat.com"}]])

(defn rsvp-search-view [{:keys [name results] :as data} owner]
  (reify om/IRender
    (render [_]
      (html
       [:main
        [:h2 "RSVP"]
        [:form {:id "rsvpsearch"
                :onSubmit #(do (.. % (preventDefault))
                               (om/update! data :results (find-results name)))}
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

(defn rsvp-card-view [{[results] :results, {:keys [contact food-preferences] :as card} :card, :as data} owner]
  (reify
    om/IRender
    (render [_]
      (when (nil? contact)
        (om/update! card :contact (:email (first results))))
      (html
       [:main
        [:h2 "RSVP"]
        [:form {:id "rsvpsubmit"
                :onSubmit #(do (.. % (preventDefault))
                               (om/update! card :sent true))}
         [:section {:class "guests"}
          (map-indexed
           (fn [n {:keys [name] :as guest}]
             [:div
              [:input {:type "text", :class "guestname", :value name}]
              [:fieldset
               [:div
                (let [radio-name (str "guest" n "rsvp")]
                  (map (fn [[label for-str val]]
                         (let [input-id (str "guest" n for-str)]
                           [:div
                            [:input {:type "radio"
                                     :id input-id
                                     :name radio-name
                                     :onChange #(om/update! card [:rsvps name] val)}]
                            [:label {:for input-id}
                             label]]))
                       (partition 3 ["Will attend"   "yes" true
                                     "Sends regrets" "no" false])))]]])
           results)
          [:p {:class "small"}
           "(If we've gotten anyone's name wrong, we apologize! Please correct it here so that we can stop embarrassing ourselves.)"]]
         [:section {:class "addendums"}
          [:label {:for "foodpref", :class "small"}
           "We are planning on serving a buffet style meal that will be suitable for both meat eaters and vegetarians. Do you have any dietary restrictions or allergies that we should be aware of?"]
          [:textarea {:name "foodpref"
                      :ref "food-preferences"
                      :value food-preferences
                      :onChange #(om/update! card :food-preferences (.-value (om/get-node owner "food-preferences")))}]

          [:label {:for "contact" :class "small"}
           "If we need to contact you with any last-minute information, is this a good email address to use?"]
          [:input {:type "text"
                   :ref "contact"
                   :value contact
                   :onChange #(om/update! card :contact (.-value (om/get-node owner "contact")))}]
          
          [:button {:type "submit"} "RSVP"]]]]))))

(defn rsvp-multiple-results-view [{:keys [name results] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (html
       [:main
        [:h2 (str "Oops! There are multiple matches for '" name "'")]
        [:p "But which RSVP is yours?"]
        [:ul {:id "rsvpresults"}
         (map-indexed (fn [n {:keys [name]}]
                        [:li
                         [:span name]
                         [:button
                          {:onClick (fn [_] (om/transact! data :results (fn [results] [(get results n)])))}
                          "Select"]])
                      (map first results))]]))))

(defn rsvp-search-results-view [{:keys [name results] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (condp <= (count results)
        2 (om/build rsvp-multiple-results-view data)
        1 (om/build rsvp-card-view (select-keys data [:results :card]))
        0 "Zero!"))))

(defn rsvp-confirmation-view [card owner]
  (om/component
   (html
    [:main
     [:h1 "Confirmed!"]
     [:pre (with-out-str (pp/pprint @card))]])))

(defn rsvp-view [{results :results, {:keys [sent] :as card} :card, :as data} owner]
  (reify om/IRender
    (render [_]
      (if sent
        (om/build rsvp-confirmation-view card)
        (if (nil? results)
          (om/build rsvp-search-view data)
          (om/build rsvp-search-results-view data))))))

(defn main-view [{:keys [selected rsvp-search] :as data} owner]
  (reify om/IRender
    (render [_]
      (println "@app-state" data)
      (html
       [:div
        (om/build nav-view selected)
        (case selected
          [:details]       (om/build details-view selected)
          [:where-to-stay] where-to-stay
          [:rsvp]          (om/build rsvp-view rsvp-search))]))))

(defn main []
  (om/root main-view app-state {:target (. js/document (getElementById "app"))}))
