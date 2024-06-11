import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, {  createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import axios from 'axios';
import { auth } from '../../../firebase.config';
export const myContext = createContext(null)


const Authentication = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    const [dep, setDep] = useState(false)
    const [dep2, setDep2] = useState(false)
    const [UserData,setUserData]=useState()

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
                // console.log(user.displayName)

                // jwt 
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                .then(res => {
                    console.log('token response', res.data);
                })

                const data={
                    email:user.email,
                    name: user?.displayName,
                    status:'User',
            
                }
            // loader:({params})=>fetch(`http://localhost:5000/alldata/${params.id}`),
                axios.post(` http://localhost:5000/user/${user.email}`, data)
                .then(res => {
                    console.log('nowdata', res.data);
                    // setUserData(res.data)
                })
                setLoading(false)

                setUser(user)

                
                
                useEffect(()=>{axios.get(` http://localhost:5000/user/${user.email}`, data)
                .then(res => {
                    console.log('nowdata', res.data);
                    setUserData(res.data)
                })},[dep])

                
            } else {
                // User is signed out
                // ...
                setLoading(false)

                setUser(false)

                axios.post('http://localhost:5000/logout', user, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
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
        setLoad,
        UserData
    }
    return (
        <myContext.Provider value={authInfo}>
            {children}

        </myContext.Provider>
    );
};

export default Authentication;