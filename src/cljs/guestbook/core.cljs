(ns guestbook.core
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [re-frame.core :as rf]
            [ajax.core :refer [GET POST]]
            [clojure.string :as string]
            [guestbook.validation :refer [validate-message]]
            [guestbook.websockets :as ws]
            [mount.core :as mount]))
;; (-> (.getElementsByClassName js/document "content")
;;     first
;;     (.-innerHTML)
;;     (set! (str "Hello, Auto!" (-> (.getElementsByClassName js/document "content")
;;                                   first
;;                                   (.-innerHTML)))))

;; (->> (.getElementById js/document "content")
;;      (dom/render [;;  :h1 "Hello, Reagent" 
;;                 ;;  :div {:id "hello", :class "content"} [:h1 "Hello, Auto!"]
;;                   :div#hello.content>h1 "Hello, Auto!"
;;                  ;;  :tag-name {:attribute-key "attribute value"} "tag body"
;;                   ]))
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

;; (defn get-messages [messages] (GET "/messages"
;;                                 {:headers {"Accept" "application/transit+json"}
;;                                 ;;  :handler #(rf/dispatch [:messages/set (:messages %)])}))

(rf/reg-event-db
 :messages/set
 (fn [db [_ messages]] (-> db
                           (assoc :messages/loading? false
                                  :messages/list messages))))
(rf/reg-sub
 :messages/list
 (fn [db _]
   (:messages/list db [])))

;; (defn get-messages []
;;   (GET "/messages"
;;     {:headers {"Accept" "application/transit+json"}
;;      :handler #(rf/dispatch [:messages/set (:messages %)])}))
(defn get-messages []
  (GET "/api/messages"
    {:headers {"Accept" "application/transit+json"}
     :handler #(rf/dispatch [:messages/set (:messages %)])})) ;;...



(defn message-list [messages]
  ;; (println messages)
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




;; (defn send-message! [fields errors messages]
;;   (POST "/message"
;;     {:format :json
;;      :headers
;;      {"Accept" "application/transit+json"
;;       "x-csrf-token" (.-value (.getElementById js/document "token"))}
;;      :params @fields
;;      :handler (fn [_]
;;                 (swap! messages conj (assoc @fields
;;                                             :timestamp (js/Date.)))
;;                 (reset! fields nil)
;;                 (reset! errors nil)) :error-handler (fn [e]
;;                                                       (.log js/console (str e))
;;                                                       (reset! errors (-> e :response :errors)))}))

(rf/reg-event-db
 :message/add
 (fn [db [_ message]]
   (update db :messages/list conj message)))

(rf/reg-event-db
 :form/set-field
 [(rf/path :form/fields)]
 (fn [fields [_ id value]]
   (assoc fields id value)))

(rf/reg-event-db
 :form/clear-fields
 [(rf/path :form/fields)]
 (fn [_ _]
   {}))

(rf/reg-sub
 :form/fields
 (fn [db _]
   (:form/fields db)))

(rf/reg-sub
 :form/field
 :<- [:form/fields]
 (fn [fields [_ id]] (get fields id)))

(rf/reg-event-db
 :form/set-server-errors
 [(rf/path :form/server-errors)]
 (fn [_ [_ errors]] errors))

(rf/reg-sub
 :form/server-errors
 (fn [db _]
   (:form/server-errors db)))

;;Validation errors are reactively computed
(rf/reg-sub
 :form/validation-errors
 :<- [:form/fields]
 (fn [fields _]
   (validate-message fields)))

(rf/reg-sub :form/validation-errors?
            :<- [:form/validation-errors]
            (fn [errors _]
              (not (empty? errors))))

(rf/reg-sub
 :form/errors
 :<- [:form/validation-errors]
 :<- [:form/server-errors]
 (fn [[validation server] _]
   (merge validation server)))

(rf/reg-sub
 :form/error
 :<- [:form/errors]
 (fn [errors [_ id]] (get errors id)))
;; (defn send-message! [fields errors]
;;   (if-let [validation-errors (validate-message @fields)]
;;     (reset! errors validation-errors)
;;     (POST "/api/message"
;;       {:format :json
;;        :headers
;;        {"Accept" "application/transit+json"
;;         "x-csrf-token" (.-value (.getElementById js/document "token"))}
;;        :params @fields
;;        :handler
;;        (fn [_]
;;          (rf/dispatch
;;           [:message/add
;;           ;;  (-> @fields
;;            (assoc
;;             @fields
;;             :timestamp (js/Date.))
;;               ;;  (update :name str " [CLIENT]"))
;;            ])
;;          (reset! fields nil)
;;          (reset! errors nil))
;;        :error-handler
;;        (fn [e]
;;          (.log js/console (str e))
;;          (reset! errors (-> e :response :errors)))})))

;; (rf/reg-event-fx :message/send!
;;                  (fn [{:keys [db]} [_ fields]]
;;                    (POST "/api/message"
;;                      {:format :json
;;                       :headers
;;                       {"Accept" "application/transit+json"
;;                        "x-csrf-token" (.-value (.getElementById js/document "token"))}
;;                       :params fields
;;                       :handler #(rf/dispatch
;;                                  [:message/add (-> fields
;;                                                    (assoc :timestamp (js/Date.)))])
;;                       :error-handler #(rf/dispatch
;;                                        [:form/set-server-errors
;;                                         (get-in % [:response :errors])])})
;;                    {:db (dissoc db :form/server-errors)}))

;; (rf/reg-event-fx
;;  :message/send!
;;  (fn [{:keys [db]} [_ fields]]
;;    (ws/send! [:message/create! fields])
;;    {:db (dissoc db :form/server-errors)}))

;; (rf/reg-event-fx
;;  :message/send!
;;  (fn [{:keys [db]} [_ fields]]
;;    (ws/send!
;;     [:message/create! fields]
;;     10000
;;     (fn [{:keys [success errors] :as response}]
;;       (.log js/console "Called Back: " (pr-str response))
;;       (if success
;;         (rf/dispatch [:form/clear-fields])
;;         (rf/dispatch [:form/set-server-errors errors]))))
;;    {:db (dissoc db :form/server-errors)}))

(rf/reg-event-fx
 :message/send!-called-back
 (fn [_ [_ {:keys [success errors]}]]
   (if success
     {:dispatch [:form/clear-fields]}
     {:dispatch [:form/set-server-errors errors]})))
(rf/reg-event-fx
 :message/send!
 (fn [{:keys [db]} [_ fields]]
   {:db (dissoc db :form/server-errors)
    :ws/send! {:message [:message/create! fields]
               :timeout 10000
               :callback-event [:message/send!-called-back]}}))


(defn handle-response! [response]
  (if-let [errors (:errors response)]
    (rf/dispatch [:form/set-server-errors errors])
    (do
      (rf/dispatch [:message/add response])
      (rf/dispatch [:form/clear-fields response]))))



;; (defn errors-component [errors id]
;;   (when-let [error (id @errors)]
;;     [:div.notification.is-danger (string/join error)]))

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
;; (defn message-form [messages]
;;   (let [fields (r/atom {}) errors (r/atom nil)]
;;     (fn []
;;       [:div
;;        [:p "Name: " (:name @fields)]
;;        [:p "Message: " (:message @fields)]
;;        [errors-component errors :server-error]
;;        [:div.field
;;         [:label.label {:for :name} "Name"]
;;         [errors-component errors :name]
;;         [:input.input {:type :text
;;                        :name :name
;;                        :on-change #(swap! fields assoc :name (-> % .-target .-value))
;;                        :value (:name @fields)}]]
;;        [:div.field
;;         [:label.label {:for :message} "Message"]
;;         [errors-component errors :message]
;;         [:textarea.textarea
;;          {:name :message
;;           :value (:message @fields)
;;           :on-change #(swap! fields assoc :message (-> % .-target .-value))}]]
;;        [:input.button.is-primary
;;         {:type :submit
;;         ;;  :on-click #(send-message! fields errors)
;;          :on-click #(send-message! fields errors messages)
;;          :value "comment"}]])))

(defn errors-component [id]
  (when-let [error @(rf/subscribe [:form/error id])]
    [:div.notification.is-danger (string/join error)]))

(defn text-input [{val :value attrs :attrs
                   :keys [on-save]}]
  (let [draft (r/atom nil) value (r/track #(or @draft @val ""))]
    (fn []
      [:input.input (merge attrs {:type :text
                                  :on-focus #(reset! draft (or @val ""))
                                  :on-blur (fn []
                                             (on-save (or @draft ""))
                                             (reset! draft nil))
                                  :on-change #(reset! draft (.. % -target -value))
                                  :value @value})])))
(defn textarea-input [{val :value attrs :attrs
                       :keys [on-save]}]
  (let [draft (r/atom nil) value (r/track #(or @draft @val ""))]
    (fn []
      [:textarea.textarea (merge attrs
                                 {:on-focus #(reset! draft (or @val ""))
                                  :on-blur (fn []
                                             (on-save (or @draft ""))
                                             (reset! draft nil))
                                  :on-change #(reset! draft (.. % -target -value))
                                  :value @value})])))


(defn message-form []
  [:div
   [errors-component :server-error]

   [:div.field
    [:label.label {:for :name} "Name"]
    [errors-component :name]
    [text-input {:attrs {:name :name}
                 :value (rf/subscribe [:form/field :name])
                 :on-save #(rf/dispatch [:form/set-field :name %])}]
    ;; [:input.input {:type :text
    ;;                :name :name
    ;;                :on-change #(rf/dispatch
    ;;                             [:form/set-field
    ;;                              :name
    ;;                              (.. % -target -value)])
    ;;                :value @(rf/subscribe [:form/field :name])}]
    ]
   [:div.field
    [:label.label {:for :message} "Message"]
    [errors-component :message]
    [textarea-input
     {:attrs {:name :message}
      :value (rf/subscribe [:form/field :message]) :on-save #(rf/dispatch [:form/set-field :message %])}]
    ;; [:textarea.textarea
    ;;  {:name :message
    ;;   :value @(rf/subscribe [:form/field :message])
    ;;   :on-change #(rf/dispatch
    ;;                [:form/set-field
    ;;                 :message
    ;;                 (.. % -target -value)])}]
    ]
   [:input.button.is-primary
    {:type :submit
     :disabled @(rf/subscribe [:form/validation-errors?])
     :on-click #(rf/dispatch [:message/send! @(rf/subscribe [:form/fields])])
     :value "comment"}]])


;; (defn message-form []
;;   (let [fields (r/atom {}) errors (r/atom nil)]
;;     (fn []
;;       [:div
;;        [errors-component errors :server-error]
;;        [:div.field
;;         [:label.label {:for :name} "Name"]
;;         [errors-component errors :name]
;;         [:input.input {:type :text
;;                        :name :name
;;                        :on-change #(swap! fields assoc :name (-> % .-target .-value))
;;                        :value (:name @fields)}]]
;;        [:div.field
;;         [:label.label {:for :message} "Message"]
;;         [errors-component errors :message]
;;         [:textarea.textarea
;;          {:name :message
;;           :value (:message @fields)
;;           :on-change #(swap! fields assoc :message (-> % .-target .-value))}]]
;;        [:input.button.is-primary
;;         {:type :submit
;;          :on-click #(send-message! fields errors)
;;          :value "comment"}]])))
(rf/reg-fx
 :ajax/get
 (fn [{:keys [url success-event error-event success-path]}]
   (GET url
     (cond-> {:headers {"Accept" "application/transit+json"}}
       success-event (assoc :handler
                            #(rf/dispatch
                              (conj success-event
                                    (if success-path
                                      (get-in % success-path) %))))
       error-event (assoc :error-handler
                          #(rf/dispatch
                            (conj error-event %)))))))
(rf/reg-event-fx
 :messages/load
 (fn [{:keys [db]} _]
   {:db (assoc db :messages/loading? true)
    :ajax/get {:url "/api/messages"
               :success-path [:messages]
               :success-event [:messages/set]}}))



;; (rf/reg-event-fx
;;  :messages/load
;;  (fn [{:keys [db]} _]
;;    (GET "/api/messages"
;;      {:headers {"Accept" "application/transit+json"}
;;       :handler #(rf/dispatch [:messages/set (:messages %)])})
;;    {:db (assoc db :messages/loading? true)}))

(rf/reg-event-fx
 :app/initialize
 (fn [_ _]
   {:db {:messages/loading? true}
    :dispatch [:messages/load]}))

(rf/reg-sub :messages/loading?
            (fn [db _]
              (:messages/loading? db)))


(defn reload-messages-button []
  (let [loading? (rf/subscribe [:messages/loading?])]
    [:button.button.is-info.is-fullwidth
     {:on-click #(rf/dispatch [:messages/load])
      :disabled @loading?} (if @loading?
                             "Loading Messages"
                             "Refresh Messages")]))


;; (defn home []
;;   [:div.content>div.columns.is-centered>div.column.is-two-thirds
;;    [:div.columns>div.column
;;     [message-form]]])
;; (defn home []
;;   (let [messages (rf/subscribe [:messages/list])]
;;     (rf/dispatch [:app/initialize])
;;     (get-messages messages)
;;     (fn []
;;       (if @(rf/subscribe [:messages/loading?])
;;         [:div>div.row>div.span12>h3
;;          "Loading Messages..."]
;;         [:div.content>div.columns.is-centered>div.column.is-two-thirds
;;          [:div.columns>div.column
;;           [:h3 "Messages"]
;;           [message-list messages]]
;;          [:div.columns>div.column
;;           [message-form messages]]]))))

(defn home []
  (let [messages (rf/subscribe [:messages/list])]
    ;; (rf/dispatch [:app/initialize])
    ;; (get-messages)
    (fn []
      [:div.content>div.columns.is-centered>div.column.is-two-thirds
       (if @(rf/subscribe [:messages/loading?])
         [:h3 "Loading Messages..."]
         [:div
          [:div.columns>div.column
           [:h3 "Messages"]
           [message-list messages]]
          [:div.columns>div.column
           [reload-messages-button]]
          [:div.columns>div.column
           [message-form]]])])))


(defn ^:dev/after-load mount-components []
  (rf/clear-subscription-cache!)
  (.log js/console "Mounting Components...")
  (dom/render [#'home] (.getElementById js/document "content"))
  (.log js/console "Components Mounted!"))
(defn init! []
  (.log js/console "Initializing App...")
  (mount/start)
  (rf/dispatch [:app/initialize])
  ;; (get-messages)
  ;; (ws/connect! (str "ws://" (.-host js/location) "/ws") handle-response!)
  (mount-components))
(.log js/console "guestbook.core evaluated!")
;; (dom/render
;;  [home]
;;  (.getElementById js/document "content"))

