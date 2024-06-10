import React from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import alUser from './alUser';
import Contex from '../Authentication/Contex';

const Drawar = () => {
    // const {UserData} = Contex()
    const {user}=Contex()
    const [user2,refetchUser,]=alUser()
    const data=user2.find((d)=>d.email==user.email)
    // console.log(user2 ,data,UserData,)
    // console.log(data)
  



    
 

    // todo :not update imiditealy

    return (

        <div className="drawer ml-4 block z-20 mt-4">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn drawer-button"><FiAlignJustify size={30} /></label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="open sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <Link to={'/'}><a>Home</a></Link>
                    <Link to={'/products'} ><a> Products</a></Link>


                    <div className="divider"></div>

                    {data?.status == 'User' ? <>
                        <Link to={'/dashboard'}><a>My Profile</a></Link>
                        <Link to={'addproducts'} ><a>Add Products</a></Link>
                        <Link to={'/dashboard/myproducts'}><a>My Products</a></Link>


                    </> : <>{data?.status == 'Moderator' ? <>
                        {/* for moderator */}
                        <Link to={'/dashboard'}><a>My Profile</a></Link>


                        <Link to={'/dashboard/review'}><a> Product Review Queue</a></Link>
                        <Link to={'/dashboard/reported'}><a>Reported Contents </a></Link>

                    </> : <>
                    
                    {
                        data?.status=="Admin"&&<>
                        {/* for Admin */}


                        <Link to={'/dashboard'}><a>My Profile</a></Link>


                        <Link to={'/dashboard/statistics'}><a> Statistics</a></Link>
                        <Link to={'/dashboard/manageUser'}><a>Manage Users</a></Link>
                        <Link to={'/dashboard/coupons'}><a>Manage Coupons </a></Link>

                    </>
                    }
                    
                    
                    </>
                    }
                    </>
                    }

                </ul>
            </div>
        </div>

    );
};

export default Drawar;