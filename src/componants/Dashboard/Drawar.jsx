import React from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import alUser from './alUser';
import Contex from '../Authentication/Contex';
import Alldata from '../Alldata';
import SpecificUser from './SpecificUser';
import AddorNot from './AddorNot';

const Drawar = () => {
    // const {UserData} = Contex()
    const { user } = Contex()
    const [user2, refetchUser,] = alUser()
    // console.log(user2)
    const data = user2.find((d) => d.email == user.email)
    // console.log(user2 ,data,UserData,)
    // console.log(data)
    // const Verified = user2?.find(d => d?.email == user?.email)
    // const yesverified = Verified?.Verified == 'subscribe'
    // console.log(yesverified)

    // const [cart] = Alldata()
    // const yes = cart?.find(d => d?.email == user?.email)
    // console.log(yes)
    const [specificUser]=SpecificUser()
    const [YesOrNOt]=AddorNot()
    console.log(YesOrNOt)







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
                    {/* <Link to={'/'}><a>Home</a></Link> */}
                    <NavLink to={'/'} className={({ isActive }) =>
                        isActive ? ' border-b-2 my-3 ml-0 px-3 rounded-xl bg-black text-white border-blue-600  py-3  transition duration-300 ease-in-out ' : "font-bold my-3 block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover: dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} >
                        Home</NavLink>

                    {/* <Link to={'/products'} ><a> Products</a></Link> */}

                    <NavLink to={'/products'} className={({ isActive }) =>
                        isActive ? ' border-b-2 my-3 ml-0 px-3 rounded-xl bg-black text-white border-blue-600  py-3  transition duration-300 ease-in-out ' : "font-bold my-3 block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover: dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} >
                        Products</NavLink>


                    <div className="divider"></div>

                    {data?.status == 'User' ? <>
                        <NavLink to={'/dashboard/myprofile'} className={({ isActive }) =>
                            isActive ? ' border-b-2 my-3 ml-0 px-3 rounded-xl bg-black text-white border-blue-600  py-3  transition duration-300 ease-in-out ' : "font-bold my-3 block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover: dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} >
                            MY Profile</NavLink>
                        {YesOrNOt =="no" || specificUser?.membership == "verified" ?<NavLink to={'addproducts'} className={({ isActive }) =>
                            isActive ? ' border-b-2 my-3 ml-0 px-3 rounded-xl bg-black text-white border-blue-600  py-3  transition duration-300 ease-in-out ' : "font-bold my-3 block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover: dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} >
                            Add Products</NavLink>:''}
                        {/* <Link to={'addproducts'} ><a>Add Products</a></Link> */}

                        <NavLink to={'/dashboard/myproducts'} className={({ isActive }) =>
                            isActive ? ' border-b-2 my-3 ml-0 px-3 rounded-xl bg-black text-white border-blue-600  py-3  transition duration-300 ease-in-out ' : "font-bold my-3 block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover: dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} >
                            MY Products</NavLink>
                        {/* <Link to={'/dashboard/myproducts'}><a>My Products</a></Link> */}


                    </> : <>{data?.status == 'Moderator' ? <>
                        {/* for moderator */}
                        {/* <Link to={'/dashboard'}><a>My Profile</a></Link> */}
                        {/* <NavLink to={'/dashboard'} className={({ isActive }) =>
                            isActive ? ' border-b-2 my-3 ml-0 px-3 rounded-xl bg-black text-white border-blue-600  py-3  transition duration-300 ease-in-out ' : "font-bold my-3 block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover: dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} >
                            MY Profile</NavLink> */}
                        <NavLink to={'/dashboard/review'} className={({ isActive }) =>
                            isActive ? ' border-b-2 my-3 ml-0 px-3 rounded-xl bg-black text-white border-blue-600  py-3  transition duration-300 ease-in-out ' : "font-bold my-3 block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover: dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} >
                            Product Review Queue</NavLink>
                        <NavLink to={'/dashboard/reported'} className={({ isActive }) =>
                            isActive ? ' border-b-2 my-3 ml-0 px-3 rounded-xl bg-black text-white border-blue-600  py-3  transition duration-300 ease-in-out ' : "font-bold my-3 block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover: dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} >
                            Reported Contents</NavLink>


                        {/* <Link to={'/dashboard/review'}><a> Product Review Queue</a></Link>
                        <Link to={'/dashboard/reported'}><a>Reported Contents </a></Link> */}

                    </> : <>

                        {
                            data?.status == "Admin" && <>
                                {/* for Admin */}


                                {/* <Link to={'/dashboard'}><a>My Profile</a></Link> */}
                                {/* <NavLink to={'/dashboard'} className={({ isActive }) =>
                                    isActive ? ' border-b-2 my-3 ml-0 px-3 rounded-xl bg-black text-white border-blue-600  py-3  transition duration-300 ease-in-out ' : "font-bold my-3 block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover: dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} >
                                    MY Profile</NavLink> */}


                                {/* <Link to={'/dashboard/statistics'}><a> Statistics</a></Link> */}
                                <NavLink to={'/dashboard/statistics'} className={({ isActive }) =>
                                    isActive ? ' border-b-2 my-3 ml-0 px-3 rounded-xl bg-black text-white border-blue-600  py-3  transition duration-300 ease-in-out ' : "font-bold my-3 block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover: dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} >
                                    Statistics</NavLink>
                                {/* <Link to={'/dashboard/manageUser'}><a>Manage Users</a></Link> */}
                                <NavLink to={'/dashboard/manageUser'} className={({ isActive }) =>
                                    isActive ? ' border-b-2 my-3 ml-0 px-3 rounded-xl bg-black text-white border-blue-600  py-3  transition duration-300 ease-in-out ' : "font-bold my-3 block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover: dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} >
                                    Manage Users</NavLink>
                                {/* <Link to={'/dashboard/coupons'}><a>Manage Coupons </a></Link> */}
                                <NavLink to={'/dashboard/coupons'} className={({ isActive }) =>
                                    isActive ? ' border-b-2 my-3 ml-0 px-3 rounded-xl bg-black text-white border-blue-600  py-3  transition duration-300 ease-in-out ' : "font-bold my-3 block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover: dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} >
                                    Manage Coupons</NavLink>

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