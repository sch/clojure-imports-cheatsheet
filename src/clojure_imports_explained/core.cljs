(ns ^:figwheel-always clojure-imports-explained.core
    (:require [brutha.core :as react]
              [flupot.dom :as dom]))

(enable-console-print!)

(println "Check it out at http://localhost:3449")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))
(def anchor (.getElementById js/document "app"))

(defn namespace-component
  [namespace-declaration]
  (dom/pre (str "(ns " (:name namespace-declaration)
                "\n  (require [thing :as two]))")))

(def example-namespace {:name "cool-app"})

(react/mount (namespace-component example-namespace) anchor)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

