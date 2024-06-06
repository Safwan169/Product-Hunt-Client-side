import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Heading from './Dashboard/Heading';
import { useLoaderData } from 'react-router-dom';
import Feretured from './Feretured';
import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import Alldata from './Alldata';

const Home = () => {
 
    // const alldata=useLoaderData()
    const [cart]=Alldata()
    const data=cart.sort((a,b)=>(b.date)-a.date)
    const lastData=data.slice(0,4)
    console.log(lastData)

    return (
        <div>
            <Banner></Banner>
            <Heading text={"Featured Products"}></Heading>
            {lastData.map(d=><Feretured data={d}></Feretured>)}
        </div>
    );
};

export default Home;