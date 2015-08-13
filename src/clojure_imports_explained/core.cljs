(ns ^:figwheel-always clojure-imports-explained.core
    (:require [brutha.core :as react]
              [flupot.dom :as dom]
              [cljs.pprint :as print]))

(enable-console-print!)

(println "Check it out at http://localhost:3449")

(defn docs-url [item] (str "https://clojuredocs.org/clojure.core/" item))
(def clojure-docs-ns (docs-url "ns"))
(def clojure-docs-require (docs-url "require"))
(def clojure-docs-import (docs-url "import"))
(def clojure-wiki-namespaces-url "http://dev.clojure.org/display/design/Loading,+Compiling,+and+Namespaces")
(def eighth-light-blogpost
  "https://blog.8thlight.com/colin-jones/2010/12/05/clojure-libs-and-namespaces-require-use-import-and-ns.html")

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

(defn muted [str]
  (dom/span {:style {:color "pink"}} str))

(defn s-expression [forms]
  (dom/div (muted "(")
           forms
           (muted ")")))


(def namespace-string
  "(ns examples.ns
    (:refer-clojure :exclude [next replace remove])
    (:require [clojure.string :as s :refer [blank?]]
            [clojure.set :as set]
            [clojure.java.shell :as sh])
    (:import java.util.Date
            java.text.SimpleDateFormat
            [java.util.concurrent Executors
                                    LinkedBlockingQueue]))")


(defn paragraph
  "Paragraph text with some prose styling"
  [text]
  (dom/p
   {:style {:maxWidth "36em"
            :lineHeight 1.45}}
   text))

(defn gist [username number] (str "https://gist.github.com/" username "/" number))
(defn code [text] (dom/pre text))
(defn link [text url] (dom/a {:href url} text))

(def a-good-gist (gist "ghoseb" 287710))
(def prose-stuff
  (dom/div
   (dom/h1 {:style {:marginTop "2em"}} "How do you use libraries in Clojure?")
   (paragraph "\"How should I structure my code?\" is a common Clojure question.")
   (paragraph "Well the answer is, you write functions in a text editor and you save those functions as a file. You've likely done this in other languages")
   (paragraph "What calls for some machinery is the need to require other functions in the files that you write, and to export functions to be used by other files in your application.")
   (paragraph "Clojure's solution to this is **namespaces**, and they're a little confusing. Here are the two ways of thinking about them:")
   (paragraph "• You want to bring in code from other clojure files using names based on their folder structure, and refer to those functions in a convenient shorthand")
   (paragraph "• You want to use code from the underlying platform's module system")
   (paragraph "Bringing in code in clojure is kind of weird since it's this imperative thing. It used to be more imperative, when people still used the :use directive. Now it's just kind of something with an implicit ordering.")
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
   (code "(:require [clojure.data.json :refer read-str])\n(read-str some-json-string)")
   (paragraph "This can be really nice for libraries like core.async, where the names are pretty unique and using the qualified name makes the program read like a DSL")
   (code "(:require [clojure.core.async :refer [go put <!]])")
   (paragraph "Sticking to the namespace is always a good rule of thumb though.")
   (paragraph "Sometimes you may need to import things into your namespace. What's that about?")
   (code "(:import [java.util.Date])")
   (paragraph "Well this is one of those cases where you can see the host platforms bleeding through. You use imports to bring in bits of Java/Javascript/C# code.")
   (dom/hr nil)
   (paragraph (dom/div "read through " (link "this blog post" eighth-light-blogpost) " or " (link "this gist" a-good-gist) " for more info"))))


(react/mount (namespace-component example-namespace) anchor)
(react/mount prose-stuff prose-anchor)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

