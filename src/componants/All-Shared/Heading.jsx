import React from 'react';

const Heading = ({text}) => {
    return (
        <div className='w-full flex justify-center'>
          <p className='text-2xl font-black border-gray-300 py-2  border-y border-dotted flex w-max '>{text}</p>  
        </div>
    );
};

export default Heading;