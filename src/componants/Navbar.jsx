import React, { useState } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [yes, setYes] = useState(false)
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
                <div className="navbar-end">
                    <button onClick={() => setYes(!yes)}><IoPersonCircleOutline size={40} /> </button>
                </div>

                            

            </div>
            {/* when user not log in  */}
            <div className=' px-5 shadow-2xl absolute right-0 '>
                        {
                            yes && <div className='flex-col flex gap-3  font-bold'>
                              <Link className='hover:underline hover:text-purple-500' to={'/login'}>Log In</Link>
                              <Link className='hover:underline hover:text-purple-500' to={'/register'}>Register</Link>
                            </div>
                        }
                    </div>


        </div>
    );
};

export default Navbar;