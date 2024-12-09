import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center '>
            <div className='flex justify-center'>
            <img className='' src="https://i.ibb.co/s9FzvNh/error.webp" alt="" />

            </div>
            <Link to={'/'} className='btn border-2 border-gray-300 rounded-3xl text-3xl '>Go Back</Link>
        </div>
    );
};

export default Error;