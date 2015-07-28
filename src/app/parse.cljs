(ns app.parse
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [>! <!] :as async]))

(defonce Parse
  (doto (.  js/window -Parse)
    (.initialize "GAyi1ijtz2VMauaRRDqgcfqiiJyW5vQtwVFbFjfc" "EZ5xm8O1AByYc75LUTFL4dj2vhfZg93vTOFeb1Mh")))

(defn coll->array [coll]
  (->> coll
       (seq)
       (flatten)
       (apply array)))

(defn stringify-keys-shallow [m]
  (into {}
        (for [[k v] m]
          [(cond-> k
             (keyword? k)
             name)
           (cond-> v
             (or (sequential? v))
             coll->array)])))

(defn map->js-obj [m]
  (->> m
       (stringify-keys-shallow)
       (seq)
       (flatten)
       (apply js-obj)))

(defn parse-obj->map [o]
  (assoc (js->clj (.-attributes o)
                  :keywordize-keys true)
         :id (.-id o)))

(defn query-find [q]
  (let [out (async/chan)]
    (.find q
           #js {:success #(go (>! out %)
                              (async/close! out))
                :failure #(go (js/console.error %)
                              (async/close! out))})
    out))

(defn save [c m]
  {:pre [(map? m)]}
  (let [out (async/chan)]
    (.. (new c)
        (save (map->js-obj m))
        (then #(go (>! out [:success %])
                   (async/close! out))
              #(go (>! out [:failure %])
                   (async/close! out))))
    out))

(defn query [c]
  (js/Parse.Query. c))

(defn matches [q s v]
  (.matches q s v))

(defn matches-query [q0 s q1]
  (.matchesQuery q0 s q1))

(defn equal-to [q s v]
  (.equalTo q s v))

(defn include [q s]
  (.include q s))
