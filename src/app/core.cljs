(ns app.core
  (:require [clojure.string :as str]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]))

(enable-console-print!)

(defonce app-state
  (atom {:nav {:selected :details}
         :rsvp {:input "", :results nil}}))

(defn nav-view [{:keys [selected] :as data} owner]
  (reify om/IRender
    (render [_]
      (html [:header
             [:h1 "Anh-Thu & Zane"]
             [:ul
              (map (fn [[key text]]
                     [:li (if (= selected key) {:class "selected"} {})
                      [:a {:href "#"
                           :onClick #(om/update! data :selected key)}
                       text]])
                   (partition 2 [:details       "Details"
                                 :where-to-stay "Where to stay"
                                 :rsvp          "RSVP"]))
              [:li [:a {:href "http://thankfulregistry.com/anhthuandzane"} "Registry"]]]]))))

(defn details-view [data owner]
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
                         (println "Would be selecting 'RSVP' here!"))}
       "RSVP"]
      " by August 19th!"]])))

(defn where-to-stay-view [data owner]
  (om/component
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
             :notes "249 Varet St. ($)"}])]])))

(defn find-results [x]
  [{:guests [{:name "Henry Bean", :email "henry@bean.com"}
             {:name "Zelda Cat", :email "zelda@cat.com"}]}])

(defn rsvp-search-view [{:keys [input] :as data} owner]
  (reify om/IRender
    (render [_]
      (html
       [:main
        [:h2 "RSVP"]
        [:form {:id "rsvpsearch"
                :onSubmit #(do (.. % (preventDefault))
                               (om/update! data :results (find-results (.-value (om/get-node owner "input")))))}
         [:label {:for "guestsearch"} "Enter the name of your invitation:"]
         [:input {:type "text"
                  :name "guestseearch"
                  :class "guestsearch"
                  :placeholder "e.g. Barack and Michelle Obama"
                  :value input
                  :ref "input"
                  :onChange #(om/update! data :input (.-value (om/get-node owner "input")))}]
         [:button {:type "submit"}
          "Find RSVP"]]]))))

(defn rsvp-search-results-one-view [{:keys [guests food-preferences] :as data} owner]
  (reify
    om/IInitState
    (init-state [_]
      (let [{:keys [guests] :as data} (om/get-props owner)]
        {:contact (-> guests first :email)}))
    
    om/IRenderState
    (render-state [this {:keys [contact] :as state}]
      (html
       [:main
        [:h2 "RSVP"]
        [:form {:id "rsvpsubmit"
                :onSubmit #(do (.. % (preventDefault))
                               (println "Would be submitting here."))}
         [:section {:class "guests"}
          (map-indexed
           (fn [n {:keys [name] :as guest}]
             [:div
              [:input {:type "text", :class "guestname", :value name}]
              [:fieldset
               [:div
                (map (fn [[label for-str]]
                       [:div
                        [:input {:type "radio"
                                 :name (str "guest" (inc n) "rsvp")
                                 :onChange #(om/update! data [:guests n :rsvp] (= for-str "yes"))}]
                        [:label {:for (str "guest" (inc n) for-str)}
                         label]])
                     (partition 2 ["Will attend"   "yes"
                                   "Sends regrets" "no"]))]]])
           guests)
          [:p {:class "small"}
           "(If we've gotten anyone's name wrong, we apologize! Please correct it here so that we can stop embarrassing ourselves.)"]]
         [:section {:class "addendums"}
          [:label {:for "foodpref", :class "small"}
           "We are planning on serving a buffet style meal that will be suitable for both meat eaters and vegetarians. Do you have any dietary restrictions or allergies that we should be aware of?"]
          [:textarea {:name "foodpref"
                      :ref "food-preferences"
                      :value food-preferences
                      :onChange #(om/update! data :food-preferences (.-value (om/get-node owner "food-preferences")))}]

          [:label {:for "contact" :class "small"}
           "If we need to contact you with any last-minute information, is this a good email address to use?"]
          [:input {:type "text"
                   :ref "contact"
                   :value contact
                   :onChange #(om/set-state! owner :contact (.-value (om/get-node owner "contact")))}]
          
          [:button {:type "submit"} "RSVP"]]]]))))

(defn rsvp-search-results-view [{:keys [results]} owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [contact input] :as state}]
      (html
       [:main
        (condp <= (count results)
          2 [:h2 (str "Oops! There are multiple matches for '" input "'")]
          1 (om/build rsvp-search-results-one-view (first results))
          0 "Zero!")]))))

(defn rsvp-view [{:keys [input results] :as data} owner]
  (reify om/IRender
    (render [_]
      (if-not (some? results)
        (om/build rsvp-search-view data)
        (om/build rsvp-search-results-view data)))))

(defn main-view [{:keys [nav rsvp] :as data} owner]
  (reify om/IRender
    (render [_]
      (println "@app-state" data)
      (html
       [:div
        (om/build nav-view nav)
        (case (-> data :nav :selected)
          :details (om/build details-view data)
          :where-to-stay (om/build where-to-stay-view data)
          :rsvp (om/build rsvp-view rsvp))]))))

(defn main []
  (om/root main-view app-state {:target (. js/document (getElementById "app"))}))
