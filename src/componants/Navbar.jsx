import React, { useState } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Contex from './Authentication/Contex';
import { auth } from '../../firebase.config';
import Swal from 'sweetalert2';
import { signOut } from 'firebase/auth';

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
    const { user } = Contex()
    const all = <>

        <li><Link to={'/'}>Home</Link></li>
        <li>
            <Link to={'/products'}>Products</Link>

        </li>
        {/* <li><Link to={'/dashboard'}>Dashboard</Link></li> */}


    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                all
                            }
                        </ul>

                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
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
                    <button onClick={() => setYes2(!yes2)}> <img className='rounded-3xl w-[50px]' src={user.photoURL } alt="data" /> </button>
                </div> : <div className="navbar-end">
                    <button onClick={() => setYes(!yes)}><IoPersonCircleOutline size={40} /> </button>
                </div>}



            </div>
            {/* when user not log in  */}
            <div className=' px-5 shadow-2xl absolute rounded-2xl  right-0 '>
                <>
                    {
                        user ? '' : <span>
                            {
                                yes ? <div className='flex-col flex gap-3 p-5 rounded-2xl border  border-gray-300 font-bold'>
                                    <Link className='hover:underline hover:text-purple-500' to={'/login'}>Log In</Link>
                                    <Link className='hover:underline hover:text-purple-500' to={'/register'}>Register</Link>
                                </div> : ''
                            }
                        </span>

                    }
                </>
                {
                    yes2 && <div className='flex-col flex p-5 rounded-2xl   bg-slate-200 border border-gray-300 gap-3  font-bold'>
                        <p className='text-xs font-black'>{user.displayName}</p>
                        <Link className='hover:underline hover:text-purple-500' to={'/dashboard'}>Dashboard</Link>
                        <Link onClick={handleLogout} className='btn w-[100px] bg-red-400  text-white font-bold rounded-2xl' >Sign Out</Link>
                    </div>
                }
            </div>


        </div>
    );
};

export default Navbar;