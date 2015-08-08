(ns ^:figwheel-always clojure-imports-explained.core
    (:require [brutha.core :as react]
              [flupot.dom :as dom]))

(enable-console-print!)

(println "Check it out at http://localhost:3449")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))
(def anchor (.getElementById js/document "app"))
(def prose-anchor (.getElementById js/document "examples"))

(defn namespace-component
  [namespace-declaration]
  (dom/pre (str "(ns " (:name namespace-declaration)
                "\n  (require [thing :as two]))")))

(defn example-component
  [prose declaration]
  (dom/div
   {:class "Example"}
   (dom/div prose)
   (dom/pre declaration)))

(def example-namespace {:name "cool-app"
                        :requires {"thing" "two"}})

(defn docs-url [item] (str "https://clojuredocs.org/clojure.core/" item))
(def clojure-docs-ns (docs-url "ns"))
(def clojure-docs-require (docs-url "require"))
(def clojure-docs-import (docs-url "import"))

(defn paragraph
  "Paragraph text with some prose styling"
  [text]
  (dom/p
   {:style {:maxWidth "36em"
            :lineHeight 1.45}}
   text))

(defn code [text] (dom/pre text))

(def prose-stuff
  (dom/div
   (dom/h1 {:style {:marginTop "2em"}} "How do you use libraries in Clojure?")
   (example-component
    (paragraph (str "When you write code in Clojure, you have to put it in a namespace. "
                    "The ns macro lets you name that file's code, and bring code from "
                    "other namespaces into scope."))
    "(ns name docstring? attr-map? references*)")
   (example-component
    (paragraph "The main interesting thing in there is 'references'. The one you'll use the most is 'require':")
    "(require [clojure.data.json])")
   (paragraph "And you'll have access to the good JSON functions in that namespace:")
   (code "(clojure.data.json/read-str some-json-string)")
   (paragraph "That's kind of cumbersome though, so you may want to alias the namespace to something short and tidy:")
   (code "(require [clojure.data.json :as json])")
   (paragraph "This is the preferred way of handling imports in Clojure, as it shortens the amount you have to type while hinting the reader on where the function came from:")
   (code "(json/read-str some-json-string)")
   (paragraph "You could skip the namespace entirely and just pluck out individual functions from the namespace:")
   (code "(require [clojure.data.json :refer read-str])\n(read-str some-json-string)")
   (paragraph "This can be really nice for libraries like core.async, where ")
   (code "(require [clojure.core.async :refer [go put <!]])")
   ))


(react/mount (namespace-component example-namespace) anchor)
(react/mount prose-stuff prose-anchor)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

