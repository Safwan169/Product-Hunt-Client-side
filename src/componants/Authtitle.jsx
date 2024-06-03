import React from 'react';
import { Link } from 'react-router-dom';

const Authtitle = ({name,text,go,where}) => {
    return (
        <div className='  md:relative lg:relative md:-ml-10 ml-2 lg:-ml-10 p-5 left-1/2'>
            <p className='text-4xl font-bold my-4'>{name}</p>
            <p>{text} <span><Link className='text-purple-500 underline font-bold' to={where}>{go}</Link></span></p>
            <p></p>
        </div>
    );
};

export default Authtitle;