(ns teashop.core
  (:require [clojure.browser.repl]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [figwheel.client :as fw :include-macros true]))

(enable-console-print!)

(def products [{:name "Alishan Oolong"}
               {:name "Dayuling High-mountain Tea"}])

(defonce state (atom {:title "Tea shop!"
                          :products products}))

(om/root
 (fn [app owner]
   (om/component (dom/div nil
                          (dom/h2 nil (:title app))
                          (dom/ul nil
                                  (apply dom/ul nil
                                         (map (fn [product] (dom/li nil (:name product))) (:products app)))))))
  state
  {:target (. js/document (getElementById "app"))})

(fw/watch-and-reload
  :websocket-url   "ws://localhost:3449/figwheel-ws"
  :jsload-callback (fn [] (print "reloaded")))
