import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
// import { auth } from '../../firebase.config';



const auth = getAuth()


const Withsocial = ({ text }) => {

    const navigate = useNavigate();



    // google
    const handleGoogle = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then(() => {

                Swal.fire({
                    title: "Good job!",
                    text: "You have successfully Sign In",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000
                });
                navigate("/")

            })


    }
    const handleGitHub = () => {
        const provider2 = new GithubAuthProvider();

        signInWithPopup(auth, provider2)
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "You have successfully Sign In",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000
                });
                navigate("/")
                // console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }


    // git hub

    return (
        <div className='max-w-md mx-auto'>
            <p className=' text-xl my-5'>{text}</p>
            <div className='flex gap-10'>
                <button onClick={handleGoogle} className='border font-bold bg-gray-300 px-4 rounded-xl btn '><FcGoogle /> Google</button>
                <button onClick={handleGitHub} className='border font-bold  bg-gray-300 px-4 rounded-xl btn '><FaGithub /> GitHub</button>
            </div>


        </div>
    );
};

export default Withsocial;