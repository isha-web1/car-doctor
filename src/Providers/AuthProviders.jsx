import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext()

const Auth = getAuth(app)

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const [ loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(Auth, currentUser =>{
        setUser(currentUser)
        console.log('current user' , currentUser)
        setLoading(false)
      })
      return () =>{
        return unSubscribe()
      }
    },[])

    const AuthInfo = {
       user, 
       loading,
       createUser,
       signIn

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;