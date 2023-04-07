(ns guestbook.auth
  (:require
   [buddy.hashers :as hashers]
   [next.jdbc :as jdbc]
   [guestbook.db.core :as db]))
(defn create-user! [login password]
  (jdbc/with-transaction [t-conn db/*db*]
    (if-not (empty? (db/get-user-for-auth* t-conn {:login login}))
      (throw (ex-info "User already exists!"
                      {:guestbook/error-id ::duplicate-user
                       :error "User already exists!"}))
      (db/create-user!* t-conn
                        {:login	login
                         :password (hashers/derive password)}))))
(defn authenticate-user [login password]
  (let [{hashed :password :as user} (db/get-user-for-auth* {:login login})]
    (when (hashers/check password hashed)
      (dissoc user :password))))

(defn change-password! [login old-password new-password]
  (jdbc/with-transaction [t-conn db/*db*]
    (let [{hashed :password} (db/get-user-for-auth* t-conn {:login login})]
      (if (hashers/check old-password hashed)
        (db/set-password-for-user!*
         t-conn
         {:login login
          :password (hashers/derive new-password)})
        (throw (ex-info "Old password must match!"
                        {:guestbook/error-id ::authentication-failure
                         :error "Passwords do not match!"}))))))

(defn delete-account! [login password]
  (jdbc/with-transaction [t-conn db/*db*]
    (let [{hashed :password} (db/get-user-for-auth* t-conn {:login login})]
      (if (hashers/check password hashed)
        (db/delete-user!* t-conn {:login login})
        (throw (ex-info "Password is incorrect!"
                        {:guestbook/error-id ::authentication-failure
                         :error "Password is incorrect!"}))))))


(defn identity->roles [identity]
;;   这段代码定义了一个函数 identity->roles，它接受一个参数 identity，用于将一个用户身份转换成一个角色集合。函数的实现逻辑如下：

;; 如果 identity 不为空，则将 :authenticated 添加到一个空的集合中，最终返回这个集合。
;; 如果 identity 为空，则返回一个只包含 :any 的集合。
;; 这个函数的目的是在用户身份验证成功后，为用户分配一个或多个角色，以控制其在系统中的访问权限。
  (cond-> #{:any}
    (some? identity)
    (conj :authenticated)))

(def roles 
  {:message/create! #{:authenticated}

   :author/get #{:any}
   :account/set-profile! #{:authenticated}

   :media/get #{:any}
   :media/upload #{:authenticated}

   :auth/login #{:any}
   :auth/logout #{:any}
   :account/register #{:any}
   :session/get #{:any}
   :messages/list #{:any}
   :swagger/swagger #{:any}
   
   :message/get #{:any}
   })
