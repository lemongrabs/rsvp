(set-env!
  :source-paths   #{"src"}
  :resource-paths #{"resources" "resources/html" "resources/images" "resources/css" "resources/fonts"}
  :dependencies '[
    [adzerk/boot-cljs          "0.0-3308-0"      :scope "test"]
    [adzerk/boot-cljs-repl     "0.1.10-SNAPSHOT" :scope "test"]
    [adzerk/boot-reload        "0.3.1"           :scope "test"]
    [pandeiro/boot-http        "0.6.3-SNAPSHOT"  :scope "test"]
    [boot-sassc                "0.1.2"           :scope "test"]
    
    [org.clojure/clojure       "1.7.0"]
    [org.clojure/clojurescript "0.0-3308"]
    [org.omcljs/om "0.9.0"]
    [sablono "0.3.4"]])

(require
  '[adzerk.boot-cljs      :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload    :refer [reload]]
  '[pandeiro.boot-http    :refer [serve]]
  '[mathias.boot-sassc    :refer [sass]])

(deftask dev []
  (set-env! :source-paths #{"src" "test"})
  (comp (serve :dir "target/")
        (watch)
        (speak)
        (reload :on-jsload 'app.core/main)
        (cljs-repl)
        (cljs :source-map true :optimizations :none)
        (sass :source-maps true)))

(deftask build []
  (set-env! :source-paths #{"src"})
  (comp (cljs :optimizations :advanced)
        (sass)))
