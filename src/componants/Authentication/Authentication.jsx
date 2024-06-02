import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, {  createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase/firebase.config';
import axios from 'axios';
export const myContext = createContext(null)


const Authentication = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    const [dep, setDep] = useState(false)
    const [dep2, setDep2] = useState(false)

    // queries data load state
    const [load,setLoad]=useState(false)


    const createUser = (email, password) => {

        return (createUserWithEmailAndPassword(auth, email, password))



    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const google = () => {
        setLoading(true)

        return signInWithPopup(auth)
    }
    useEffect(() => {
    //   
    const unSubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
                setLoading(false)

                setUser(user)

                // axios.post('https://assinment-11-server-side-alpha.vercel.app/jwt', user, { withCredentials: true })
                // .then(res => {
                //     console.log('token response', res.data);
                // })
            } else {
                // User is signed out
                // ...
                setLoading(false)

                setUser(false)

                // axios.post('https://assinment-11-server-side-alpha.vercel.app/logout', user, {
                //     withCredentials: true
                // })
                //     .then(res => {
                //         console.log(res.data);
                //     })
            }
        });

        // if (user) {
        //     console.log(user)
          
        // }
        // else {
        //     console.log(user)
           
        // }
    
        
   return unSubscribe
    }, [dep],[dep2])
    // console.log(user)
    const authInfo = {
        createUser,
        signInUser,
        google,
        user,
        dep2,
        setDep,
        setDep2,
        loading,
        setLoading,
        load,
        setLoad
    }
    return (
        <myContext.Provider value={authInfo}>
            {children}

        </myContext.Provider>
    );
};

export default Authentication;