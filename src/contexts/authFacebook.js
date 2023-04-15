/*import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { app } from "../service/firebaseConfig";


const provider = new FacebookAuthProvider();

export const AuthFacebookContext = createContext({})

export default function AuthFacebookProvider({ children }) {
    const auth = getAuth(app);
    const [users, setUsers] = useState(null);

    console.log(users)
    useEffect(() => {
        const loadStoreAuthFacebook = () => {
            const sessionToken = sessionStorage.getItem("@AuthFirebase:token");
            const sessionUser = sessionStorage.getItem("@AuthFirebase:user");
            if (sessionToken && sessionUser) {
                setUsers(sessionUser);
            }
        };
        loadStoreAuthFacebook();
    }, [])

    const singInFacebook = () =>{
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            setUsers(user)
            sessionStorage.setItem("@AuthFirebase:token", token)
            sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user))
        })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = FacebookAuthProvider.credentialFromError(error);
        });
    }

    return (
        <AuthFacebookContext.Provider
            value={{ singInFacebook, signed: !!users, users }}>
            {children}
        </AuthFacebookContext.Provider>
    )
}*/
