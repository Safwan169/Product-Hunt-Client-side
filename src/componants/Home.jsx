import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Heading from './Dashboard/Heading';
import { Link, useLoaderData } from 'react-router-dom';
import Feretured from './Feretured';
import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import Alldata from './Alldata';
import Featured from './Featured';
import ShowCoupons from './Dashboard/ShowCoupons';

const Home = () => {

    // const alldata=useLoaderData()
    const [cart] = Alldata()
    const [featured] = Featured()
    const data = featured?.sort((a, b) => (b.date - a.date))
    const lastData = data?.slice(0, 4)
    // console.log(vote)
    const vote = cart.sort((a, b) => (b.vote - a.vote))


    return (
        <div>
            <Banner></Banner>
            <Heading text={"Featured Products"}></Heading>
            {lastData?.map(d => <Feretured data={d}></Feretured>)}

            <div className='lg:mt-20 md:lg:mt-20 mt-10'>
                <Heading text={"Trending Products"}></Heading>

                {vote.map(d => <Feretured data={d}></Feretured>)}

            </div>
            <button className='w-full   font-bold'>
                <Link className='text-center btn-primary btn mt-3 ' to={'/products'}>All Products</Link>

            </button>
            <div className='my-10'>
            <Heading text={"Coupons"}></Heading>

            </div>
            <ShowCoupons></ShowCoupons>
        </div>
    );
};

export default Home;