import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Heading from '../All-Shared/Heading';
import Products from './Products';
import Alldata from '../Fatching-data/Alldata';
import Featured from '../Fatching-data/Featured';
import Feretured from '../Home/shared/Feretured';

const ALLproducts = () => {
    const [cart, refetch] = Alldata()
    const status=cart?.filter(d=>d.status=="Accepted")
    const [All, setAll] = useState(status?.slice(0, 6))


useEffect(()=>{
setAll(status?.slice(0,6))},[cart]


)
    console.log(status)

    const [sff, setSf] = useState(status?.length)
    const dataa = Math.ceil(sff / 6)
    const sf2 = [...Array(dataa).keys()]
    const [peg, setPeg] = useState(sf2)





    // console.log(dataa, sf, cart)
    const handleSubmit = (e) => {
        e.preventDefault()

        const tag = e.target.search.value;
        const dd = { tag }
        // console.log(data)
        axios.post(`https://b9a12-server-side-safwan169.vercel.app/alldataTags`, dd)
            .then(res => {
                setAll(res.data.slice(0, 6))


                setSf(res.data.length)

                const dataa = Math.ceil(res.data.length / 6)
                const sf2 = [...Array(dataa).keys()]
                setPeg(sf2)


            })



      
    }

    const handleChange = index => {
        // console.log(index)
        // const dataa = [Math.ceil(All / `${index}`)]
        const dd = status.slice(index * 6, (index + 1) * 6)
        setAll(dd)
        refetch()

        const dataa = Math.ceil(sff / 6)
        const sf2 = [...Array(dataa).keys()]
        setPeg(sf2)

    }


    return (
        <div className='mt-10'>
            <Heading text={"All Products"}></Heading>

            <form onSubmit={handleSubmit} class="max-w-md mt-10 w-full mx-auto">
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"></label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center p-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input name='search' type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." />
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

            <div className='   mx-auto  md:px-10 lg:px-10 space-y-10'>
                {
                    All?.map(d => < Feretured data={d}></    Feretured>)
                }

            </div>
            <div className="join text-center  w-full flex justify-center mt-14">
                {peg.map((d, index) =>

                    <NavLink className={({ isActive }) =>
                        isActive ? 'text-blue-500 border-b-2 border-blue-600  py-3  transition duration-300 ease-in-out ' : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}>       
                                 <input onClick={() => handleChange(index + 0)} className="join-item btn btn-square" type="radio" name="options" aria-label={`${index + 1}`} />
                    </NavLink>
                )
                }
            </div>

        </div>
    );
};

export default ALLproducts;