(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client] app.core))
(when-not (client/alive?) (client/connect "ws://localhost:50641" {:on-jsload (fn* [] (app.core/main))}))