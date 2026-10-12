
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

let auth = null;
try {
    if (app?.options?.apiKey) {
        auth = getAuth(app);
    }
} catch (error) {
    console.warn("Firebase Auth is not yet configured:", error.message);
}

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading , setLoading] = useState(true);

    const createUser = (email, password) => {
        if (!auth) return Promise.reject(new Error("Please configure Firebase keys in .env.local"));
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        if (!auth) return Promise.reject(new Error("Please configure Firebase keys in .env.local"));
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        if (!auth) return Promise.resolve();
        setLoading(true);
        return signOut(auth);
    };

    const googleLogin = (googleProvider) => {
        if (!auth) return Promise.reject(new Error("Please configure Firebase keys in .env.local"));
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const githubLogin = (githubProvider) => {
        if (!auth) return Promise.reject(new Error("Please configure Firebase keys in .env.local"));
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };

    useEffect(() => {
        if (!auth) {
            setLoading(false);
            return;
        }
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const allInfo={
        createUser,
        googleLogin,
        githubLogin,
        signIn,
        logOut,
        user,
        loading,





    }
    return (
        <AuthContext.Provider value={allInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;