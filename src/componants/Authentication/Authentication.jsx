import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import axios from 'axios';
import { auth } from '../../../firebase.config';
export const myContext = createContext(null)


const Authentication = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    const [dep, setDep] = useState(false)
    const [dep2, setDep2] = useState(false)
    const [UserData, setUserData] = useState()
    const [userLoad, setUserLoad] = useState('false')

    // queries data load state
    const [load, setLoad] = useState(false)


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
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log(user.displayName)

                // jwt 
                axios.post('https://b9a12-server-side-safwan169.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
                console.log('here', user.displayName)

                const data = {
                    email: user.email,
                    name: user?.displayName,
                    status: 'User',

                }
                // // loader:({params})=>fetch(`https://b9a12-server-side-safwan169.vercel.app/alldata/${params.id}`),
                axios.post(` https://b9a12-server-side-safwan169.vercel.app/user/${user.email}`, data)
                    .then(res => {
                        console.log('nowdata', res.data);
                        // setUserData(res.data)
                    })
                // setLoading(false)

                setUser(user)



                // useEffect(() => {
                    axios.get(` https://b9a12-server-side-safwan169.vercel.app/user/${user.email}`)
                        .then(res => {
                            console.log('nowdata', res.data);
                            setUserData(res.data)

                        })
                        setLoading(false)

                // }, [])


            } else {
                // User is signed out
                // ...

                setUser(false)

                axios.post('https://b9a12-server-side-safwan169.vercel.app/logout', user, {
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
    }, [dep], [dep2])
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
        UserData,
        setUserLoad,
        userLoad
    }
    return (
        <myContext.Provider value={authInfo}>
            {children}

        </myContext.Provider>
    );
};

export default Authentication;