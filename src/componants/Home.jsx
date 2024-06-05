import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Heading from './Dashboard/Heading';
import { useLoaderData } from 'react-router-dom';
import Feretured from './Feretured';

const Home = () => {
    const alldata=useLoaderData()
    const data=alldata.sort((a,b)=>(b.date)-a.date)
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