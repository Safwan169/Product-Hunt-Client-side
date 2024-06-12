import React from 'react';
import alUser from './Dashboard/alUser';
import Contex from './Authentication/Contex';

const Admin = ({children}) => {
    const [user2,,isload]=alUser()
    const {user}=Contex()

    const user3=user2?.filter(d=>d.email==user.email)
    // console.log(user3[0].status)
    if (user3[0]?.status=='Admin') {
        console.log("bg")
      return  children
        
    }
    else if(isload){
    return <span className="loading loading-ring absolute left-1/2 top-1/2 loading-lg"></span>
  }
    
};

export default Admin;