import React from 'react';
import Navbar from './shared/Navbar';
import Banner from './shared/Banner/Banner';
import Heading from '../All-Shared/Heading';
import { Link} from 'react-router-dom';
import Feretured from './shared/Feretured';
import ShowCoupons from './shared/ShowCoupons'
import Alldata from '../Fatching-data/Alldata';
import Featured from '../Fatching-data/Featured';

const Home = () => {

    // const alldata=useLoaderData()
    const [cart] = Alldata()
    const [featured] = Featured()
    const data = featured?.sort((a, b) => (b.date - a.date))
    const lastData = data?.slice(0, 4)
    // console.log(vote)
    const vote = cart?.sort((a, b) => (b.vote - a.vote))
    console.log(vote)


    return (
        <div className='space-y-16'>
            <div className='md:h-[400px] lg:h-[700px]  '>
            <Banner></Banner>
            </div>
            <Heading text={"Featured Products"}></Heading>
            {lastData?.map(d => <Feretured data={d}></Feretured>)}



            <Heading text={"Coupons"}></Heading>
            <div className='my-10'>
            

            <ShowCoupons></ShowCoupons>
            </div>
            <div className='lg:mt-20 md:lg:mt-20 mt-10'>
                <Heading text={"Trending Products"}></Heading>
            
                {vote?.map(d => <Feretured data={d}></Feretured>)}

                


            </div>
            <button className='w-full   font-bold'>
                <Link className='text-center btn-primary btn mt-3 ' to={'/products'}>All Products</Link>

            </button>
        </div>
    );
};

export default Home;