import React, { useState } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import Contex from '../../Authentication/Contex';
import { auth } from '../../../../firebase.config';
import Swal from 'sweetalert2';
import { signOut } from 'firebase/auth';
import alUser from '../../Fatching-data/alUser';

const Navbar = () => {
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "You have successfully Sign Out",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000
                });
                setYes(false)

                setYes2(!yes2)
            })
    }
    const [yes, setYes] = useState(false)
    const [yes2, setYes2] = useState(false)
    const { user,UserData} = Contex()
    // const [user2]=alUser()
    // const statusS=user2?.filter(d=>d.email==user.email)
    // const dd=
    console.log(UserData?.status,'ASDFAS',UserData)


    const all = <>

        <li>
            {/* <Link to={'/'}>Home</Link>
             */}

            <NavLink to={'/'} className={({ isActive }) =>
                isActive ? '  lg:ml-10 px-3 rounded-xl bg-black text-white btn h-5 border-b-2 hover:text-white hover:bg-black     ' : "font-bold text-gray-500 btn lg:ml-10 px-3 rounded-xl  "} >
                Home</NavLink>
        </li>
        <li>
            {/* <Link to={'/products'}>Products</Link> */}
            <NavLink to={'/products'} className={({ isActive }) =>
                isActive ? '  border-b-2  lg:ml-10 px-3 rounded-xl btn bg-black hover:text-white hover:bg-black text-white    ' : "  btn font-bold text-gray-500 lg:ml-10 px-3 rounded-xl  //"} >
                Products</NavLink>

        </li>
        {/* <li><Link to={'/dashboard'}>Dashboard</Link></li> */}


    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                all
                            }
                        </ul>

                    </div>
                    <a className="  text-xl"><img className='w-20 h-10' src="https://i.ibb.co/HThTSQ8/hunt-showdown6756-logowik-com.webp" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            all
                        }
                    </ul>

                </div>
                {/* when user not log in  */}
                {user ? <div className="navbar-end">
                    <button onClick={() => setYes2(!yes2)}> <img className='rounded-3xl w-[50px]' src={user.photoURL} alt="data" /> </button>
                </div> : <div className="navbar-end">
                    <button onClick={() => setYes(!yes)}><IoPersonCircleOutline size={40} /> </button>
                </div>}



            </div>
            {/* when user not log in  */}
            <div className=' px-5 shadow-2xl absolute rounded-2xl z-20  right-0 '>
                <>
                    {
                        user ? '' : <span>
                            {
                                yes ? <div className='flex-col flex gap-3 p-5 rounded-2xl border z-20 bg-slate-300 border-gray-300 font-bold'>
                                    <Link className='hover:underline hover:text-purple-500' to={'/login'}>Log In</Link>
                                    <Link className='hover:underline hover:text-purple-500' to={'/register'}>Register</Link>
                                </div> : ''
                            }
                        </span>

                    }
                </>
                {
                    yes2 && <div className='flex-col flex p-5 rounded-2xl z-20  bg-slate-200 border border-gray-300 gap-3  font-bold'>
                        <p className='text-xs font-black'>{user.displayName}</p>
                        {
                            UserData?.status== "Admin"?<Link to={'/dashboard/statistics'} className=' my-1 font-bold'>Dashboard</Link>:UserData?.status =="Moderator"?<Link className='font-bold my-1' to={'/dashboard/review'}>Dashboard</Link>:<Link className='my-1 font-bold' to={'/dashboard/myprofile'}>  Dashboard</Link>}
                        
                        <Link onClick={handleLogout} className='btn w-[100px] bg-red-400  text-white font-bold rounded-2xl' >Sign Out</Link>
                    </div>
                }
            </div>


        </div>
    );
};

export default Navbar;