import React from 'react';
import Alldata from './Alldata';
import Products from './Products';

const ALLproducts = () => {
    const [cart]=Alldata()
    const data=cart.filter(d=>d.status=='pending')
    console.log(data)
    return (
        <div className='grid grid-cols-3'>
            {
                data?.map(d=><Products dataa={d}></Products>)
            }
            
        </div>
    );
};

export default ALLproducts;