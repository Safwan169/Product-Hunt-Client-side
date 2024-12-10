import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Contex from '../../Authentication/Contex';
import { auth } from '../../../../firebase.config';
import Swal from 'sweetalert2';
import { signOut } from 'firebase/auth';
import { FiAlignJustify } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { VscSignIn } from "react-icons/vsc";


const navLinks = [
  { path: "/", name: "Home" , },
  { path: "/products", name: " Products", },

];
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

  

    const normalLink =
    "lg:font-bold px-3 lg:text-lg lg:mr-2 mt-2 py-2 rounded-lg lg:mt-0 hover:bg-gray-200";
  const activeLink = `  bg-red-600 text-white hover:bg-red-700  ${normalLink}`;
    const [icon, setIcon] = useState("true");
    const [userIcon, setUserIcon] = useState(false);
    const pathName = useLocation();


  
    return (
     
        <div className=" shadow-md  sticky top-0 left-0  z-50 bg-base-100">
      <div className=" container mx-auto p-4 navbar lg:px-20  justify-between  lg:justify-between md:justify-between ">
        <div className="navbar-start  w-fit">
          {/* for small */}
          <div className={icon ? "" : " relative"}>
            <div
              tabIndex={1}
              onClick={() => setIcon(!icon)}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <FiAlignJustify
                className={icon ? "block " : "hidden"}
                size={20}
              />
              <GrClose className={icon ? "hidden " : "block"} size={20} />
            </div>
            {icon ? (
              ""
            ) : (
              <ul
                tabIndex={1}
                className="menu font-serif menu-sm lg:hidden  absolute bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  {navLinks?.map((link, index) => (
                    <Link
                      to={link.path}
                      key={index}
                      className={
                        link?.path === pathName?.pathname ? activeLink : normalLink
                      }
                    >
                      {link.name}
                    </Link>
                  ))}
                </li>
              </ul>
            )}
          </div>
          {/* image logo */}

          <Link className="" to="/">
            <img
              className=" w-16   md:w-20 lg:w-20 mx-auto lg:mx-0 md:mx-0"
              src="https://i.ibb.co.com/Z1qkm9Y/logo-removebg-preview.png"
              alt=""
           
            />
          </Link>
        </div>

        {/* for large  */}
        <div className="navbar-center hidden gap-4 lg:flex">
          {navLinks?.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={link?.path == pathName?.pathname ? activeLink : normalLink}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* for right icons  */}
        <div className="navbar-end items-center   gap-3 md:gap-8 lg:gap-10 relative w-fit">
          {/* for large device sign in  */}
          {user? (
            <div className="flex justify-center items-center gap-6">
            

             
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className=" m-1">
             
                  <img
                    src={user?.photoURL || '/default-avatar.png'} // Fallback image
                 
                    onClick={() => setUserIcon(!userIcon)}
                    className="hover:scale-[1.03] w-12 rounded-full"
                    alt="Profile picture"
                    referrerPolicy="no-referrer" // You can remove this if not needed
                    unoptimized
                  />
                </div>
                <div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content absolute  gap-1  -right-5 lg:-right-10 h-fit  menu bg-base-100 rounded-md z-[1] w-32 p-2 shadow"
                  >
                    <h1 className="text-center">Hi {user?.displayName}</h1>
                    <li className=" hover:bg-gray-300 hover:rounded-lg">
                      <Link to="">
                        Profile
                      </Link>
                    </li>

                 
                    <li className=" hover:bg-gray-300 hover:rounded-lg">
                      <Link to="/dashboard/myprofile">
                        Dashboard
                      </Link>
                    </li>
                    <li

                      onClick={handleLogout}
                      className="   px-3 py-2 text-red-500 gap-2 cursor-pointer  hover:bg-gray-300 hover:rounded-lg"
                    >
                      Sign Out
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <Link
              className="lg:flex md:flex flex items-center bg-rose-600 font-thin  Playfair rounded-md  px-2 py-1 text-white gap-2"
              to="/login"
            >
              <VscSignIn size={25} /> Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
    );
};

export default Navbar;

