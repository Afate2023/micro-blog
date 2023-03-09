(ns guestbook.core
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [ajax.core :refer [GET POST]]
            [clojure.string :as string]
            [guestbook.validation :refer [validate-message]]))
(-> (.getElementsByClassName js/document "content")
    first
    (.-innerHTML)
    (set! (str "Hello, Auto!" (-> (.getElementsByClassName js/document "content")
                                  first
                                  (.-innerHTML)))))

(->> (.getElementById js/document "content")
     (dom/render [;;  :h1 "Hello, Reagent" 
                ;;  :div {:id "hello", :class "content"} [:h1 "Hello, Auto!"]
                  :div#hello.content>h1 "Hello, Auto!"
                 ;;  :tag-name {:attribute-key "attribute value"} "tag body"
                  ]))
;; (dom/render
;;  [:h1 "Hello, Reagent"]
;;  (.getElementById js/document "content"))
;; (defn send-message! [fields] (POST "/message"
;;                                {:format :json
;;                                 :headers
;;                                 {"Accept" "application/transit+json"
;;                                  "x-csrf-token" (.-value (.getElementById js/document "token"))}
;;                                 :params @fields
;;                                 :handler #(.log js/console (str "response:" %))
;;                                 :error-handler #(.log js/console (str "error:" %))}))
(defn get-messages [messages] (GET "/messages"
                                {:headers {"Accept" "application/transit+json"}
                                 :handler #(reset! messages (:messages %))}))
(defn message-list [messages]
  (println messages)
  [:ul.messages
   (for [{:keys [timestamp message name]} @messages]
     ^{:key timestamp}
     [:li
      [:time (.toLocaleString timestamp)]
      [:p message]
      [:p " - " name]])])



;; (defn send-message! [fields errors]
;;   (if-let [validation-errors (validate-message @fields)]
;;     (reset! errors validation-errors)
;;     (POST "/message"
;;       {:format :json
;;        :headers
;;        {"Accept" "application/transit+json"
;;         "x-csrf-token" (.-value (.getElementById js/document "token"))} :params @fields
;;        :handler (fn [r]
;;                   (.log js/console (str "response:" r))
;;                   (reset! errors nil)) :error-handler (fn [e]
;;                                                         (.log js/console (str e))
;;                                                         (reset! errors (-> e :response :errors)))})))
(defn send-message! [fields errors messages] (POST "/message"
                                               {:format :json
                                                :headers
                                                {"Accept" "application/transit+json"
                                                 "x-csrf-token" (.-value (.getElementById js/document "token"))}
                                                :params @fields
                                                :handler (fn [_]
                                                           (swap! messages conj (assoc @fields
                                                                                       :timestamp (js/Date.)))
                                                           (reset! fields nil)
                                                           (reset! errors nil)) :error-handler (fn [e]
                                                                                                 (.log js/console (str e))
                                                                                                 (reset! errors (-> e :response :errors)))}))



(defn errors-component [errors id]
  (when-let [error (id @errors)]
    [:div.notification.is-danger (string/join error)]))

;; (defn message-form []
;;   (let [fields (r/atom {})]
;;     (fn []
;;       [:div
;;        [:div.field
;;         [:label.label {:for :name} "Name"]
;;         [:input.input {:type :text
;;                        :name :name
;;                        :on-change #(swap! fields assoc :name (-> % .-target .-value))
;;                        :value (:name @fields)}]]
;;        [:div.field
;;         [:label.label {:for :message} "Message"]
;;         [:textarea.textarea
;;          {:name :message
;;           :value (:message @fields)
;;           :on-change #(swap! fields assoc :message (-> % .-target .-value))}]]
;;        [:input.button.is-primary
;;         {:type :submit
;;          :on-click #(send-message! fields)
;;          :value "comment"}]
;;        [:p "Name: " (:name @fields)]
;;        [:p "Message: " (:message @fields)]])))
(defn message-form []
  (let [fields (r/atom {}) errors (r/atom nil)]
    (fn []
      [:div
       [:p "Name: " (:name @fields)]
       [:p "Message: " (:message @fields)]
       [errors-component errors :server-error]
       [:div.field
        [:label.label {:for :name} "Name"]
        [errors-component errors :name]
        [:input.input {:type :text
                       :name :name
                       :on-change #(swap! fields assoc :name (-> % .-target .-value))
                       :value (:name @fields)}]]
       [:div.field
        [:label.label {:for :message} "Message"]
        [errors-component errors :message]
        [:textarea.textarea
         {:name :message
          :value (:message @fields)
          :on-change #(swap! fields assoc :message (-> % .-target .-value))}]]
       [:input.button.is-primary
        {:type :submit
        ;;  :on-click #(send-message! fields errors)
         :on-click #(send-message! fields errors messages)
         :value "comment"}]])))


;; (defn home []
;;   [:div.content>div.columns.is-centered>div.column.is-two-thirds
;;    [:div.columns>div.column
;;     [message-form]]])
(defn home []
  (let [messages (r/atom nil)]
    (get-messages messages)
    (fn []
      [:div.content>div.columns.is-centered>div.column.is-two-thirds
       [:div.columns>div.column
        [:h3 "Messages"]
        [message-list messages]]
       [:div.columns>div.column
        [message-form]]])))



(dom/render
 [home]
 (.getElementById js/document "content"))

