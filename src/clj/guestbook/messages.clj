(ns guestbook.messages
  (:require [clojure.stacktrace :as stack]
            [guestbook.db.core :as db]
            [guestbook.validation :refer [validate-message]]))
(defn message-list []
  {:messages (vec (db/get-messages))})
;; (defn save-message! [message]
;;   (if-let [errors (validate-message message)]
;;     (throw (ex-info "Message is invalid"
;;                     {:guestbook/error-id :validation
;;                      :errors errors}))
;;     (db/save-message! message)))
(defn get-message [post-id]
  (db/get-message {:id post-id}))

(defn save-message! [{{:keys [display-name]}
                      :profile
                      :keys [login]}
                     message]
  (if-let [errors (validate-message message)]
    (throw (ex-info "Message is invalid"
                    {:guestbook/error-id :validation
                     :errors errors}))
    (db/save-message!
     (assoc
      message :author
      login :name
      (or display-name login)))))

(defn messages-by-author [author]
  {:messages (vec (db/get-messages-by-author {:author author}))})

;; (defn count-char [s]
;;   (let [counts
;;         (reduce
;;          (fn [m c]
;;            (if (Character/isLetter c)
;;              (update m c (fnil inc 0))

;;              (if (re-find #"\d+" (str c))
;;                (recur (rest s) (cons (Integer/parseInt (str c)) stack) counts)
;;                (if (= \) c)
;;                  (let [num (first stack)
;;                        sub-counts (loop [sub-stack (next stack) sub-counts {}]
;;                                     (if (not= \) (first sub-stack))
;;                                       (let [sub-counts (count-char sub-stack)]
;;                                         (recur (rest sub-stack) (merge-with + sub-counts sub-counts)))
;;                                       sub-counts))]
;;                    (recur (rest s) (rest stack/stack) (merge-with + counts (zipmap (keys sub-counts) (repeat num sub-counts)))))
;;                  (recur (rest s) stack (update counts c (fnil inc 0))))))

;;            {} s))]

;;     (apply str (for [[k v] counts] (str k v)))))

;; (defn count-chars [input]
;;   (let [char-count (hash-map)]
;;     (count-chars-helper input 1 char-count)
;;     (apply str (for [[k v] char-count] (str k v)))))

;; (defn count-chars-helper [input count char-count]
;;   (loop [i 0]
;;     (when (< i (count input))
;;       (let [c (char input i)]
;;         (cond (= c \()
;;               (let [end-index (find-matching-parenthesis input i)
;;                     num (get-number-after-parenthesis input (+ end-index 1))]
;;                 (count-chars-helper (subs input (inc i) end-index)
;;                                     (* count num) char-count)
;;                 (recur (+ end-index (count (str num)))))
;;               (and (>= (int c) 65) (<= (int c) 90))
;;               (let [num (get-number-after-parenthesis input (inc i))]
;;                 (assoc! char-count c (+ (get char-count c 0) (* count num)))
;;                 (recur (+ i (count (str num)))))
;;               :else
;;               (recur (inc i))))))

;;   (defn find-matching-parenthesis [input start-index]
;;     (loop [i (inc start-index) count 1]
;;       (when (< i (count input))
;;         (let [c (char input i)]
;;           (cond (= c)) (recur (inc i) (inc count))
;;           (= c) (recur (inc i) (inccount)) (=c)
;;           (if (= count 1) i (recur (inc i) (dec count)))
;;           :else
;;           (recur (inc i) count))))))

;; (defn get-number-after-parenthesis [input start-index]
;;   (loop [i start-index]
;;     (when (< i (count input))
;;       (let [c (char input i)]
;;         (if (Character/isDigit c)
;;           (recur (inc i))
;;           (Integer/parseInt (subs input start-index i)))))))

;; (count-chars "X2Y3XZ")  ;; "X3Y3Z1"
;; (count-chars "Z3X(XY)2")  ;; "X3Y2Z3"
;; (count-chars "Z4(Y2(XZ2)3)2X2")  ;; "X8Y4Z16"