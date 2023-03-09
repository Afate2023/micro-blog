(ns guestbook.routes.home
  (:require
   [guestbook.layout :as layout]
   [guestbook.db.core :as db]
   [clojure.java.io :as io]
   [guestbook.middleware :as middleware]
   [ring.util.response]
   [ring.util.http-response :as response]
  ;;  [struct.core :as st]
   [guestbook.validation :refer [validate-message]]))

;; (defn home-page [request]
;;   (layout/render request "home.html" {:docs (-> "docs/docs.md" io/resource slurp)}))
;; (defn home-page [request]
;;   (layout/render
;;    request "home.html" {:messages (db/get-messages)}))
(defn home-page [{:keys [flash] :as request}]
  (layout/render
   request
   "home.html"
   (merge {:messages (db/get-messages)}
          (select-keys flash [:name :message :errors]))))

;; (defn home-page [request]
;;   (layout/render request
;;                  "home.html"))

;; (def message-schema
;;   [[:name
;;     st/required
;;     st/string]
;;    [:message
;;     st/required
;;     st/string
;;     {:message "message must contain at least 10 characters"
;;      :validate (fn [msg] (>= (count msg) 10))}]])

;; (defn validate-message [params]
;;   (first (st/validate params message-schema)))


;; (defn save-message! [{:keys [params]}] 
;;   (if-let [errors (validate-message params)]  
;;     (-> (response/found "/")
;;         (assoc :flash (assoc params :errors errors)))
;;     (do 
;;       (db/save-message! params)
;;       (response/found "/"))))
(defn save-message! [{:keys [params]}]
  (if-let [errors (validate-message params)]
    (response/bad-request {:errors errors})
    (try
      (db/save-message! params)
      (response/ok {:status :ok})
      (catch Exception e
        (response/internal-server-error
         {:errors {:server-error ["Failed to save message!"]}})))))
;; (defn save-message! [{:keys [params]}]
;;   (db/save-message! params)
;;   (response/found "/"))

(defn about-page [request]
  (layout/render request "about.html"))
(defn message-list [_]
  (response/ok {:messages (vec (db/get-messages))}))

(defn home-routes []
  [""
   {:middleware [middleware/wrap-csrf
                 middleware/wrap-formats]}
   ["/" {:get home-page}]
   ["/about" {:get about-page}]
   ["/message" {:post save-message!}]
   ["/messages" {:get message-list}]])