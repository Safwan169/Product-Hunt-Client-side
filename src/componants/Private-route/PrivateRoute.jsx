import React from 'react';
import { Navigate, useNavigate } from 'react-router';
import Contex from '../Authentication/Contex';
import Lottie from 'lottie-react';
import animation from '../../../public/loading.json'
const PrivateRoute = ({children}) => {
    // const data=useContext(myContext)
    const {user,loading}=Contex ()
    console.log(user)
    if (user) {
  
      
      return children
      
     }
    if (loading) {
        return <div className='  flex items-center h-screen'  >
            <Lottie  className='w-fit h-fit  mx-auto' animationData={animation}/>
        </div>
    }

    
    if(!user) {
    return <Navigate to={'/login'}></Navigate>}
};

export default PrivateRoute;