import React from 'react';
import Alldata from './Alldata';
import Products from './Products';
import Heading from './Dashboard/Heading';
 
const ALLproducts = () => {
    const [cart] = Alldata()
    const data = cart.filter(d => d.status == 'pending')
    console.log(data)
    return (
        <div className='mt-10'>
            <Heading text={"All Products"}></Heading>
             <div className='grid lg:grid-cols-3 md:grid-cols-3   mx-auto  md:px-10 lg:px-10 gap-5'>
                {
                    data?.map(d => <Products dataa={d}></Products>)
                }

            </div>

        </div>
    );
};

export default ALLproducts;