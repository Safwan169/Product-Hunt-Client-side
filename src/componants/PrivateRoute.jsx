import React from 'react';
import { Navigate, useNavigate } from 'react-router';
import Contex from './Authentication/Contex';

const PrivateRoute = ({children}) => {
    // const data=useContext(myContext)
    const {user,loading}=Contex ()
    console.log(user)
    if (loading) {
        return <span className="loading loading-ring text-center loading-lg"></span>
    }
   else if (user) {
    return children
    
   }
   else {
   return <Navigate to={'/login'}></Navigate>}
};

export default PrivateRoute;