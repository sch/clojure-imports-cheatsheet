(ns figwheel.connect (:require [clojure-imports-explained.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :on-jsload (fn [& x] (if js/clojure-imports-explained.core.on-js-reload (apply js/clojure-imports-explained.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'clojure-imports-explained.core/on-js-reload' is missing"))), :websocket-url "ws://localhost:3449/figwheel-ws"})

