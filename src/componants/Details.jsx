import { FaShareFromSquare } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import BTn from './BTn';
import Alldata from './Alldata';
import { data } from 'autoprefixer';
import axios from 'axios';
// import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Heading from './Dashboard/Heading';
import Review from './Review';
import Review1 from './Dashboard/Review';
import ALLreviews from './Dashboard/ALLreviews';
import allReview from './allReview';

import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import "./styles.css";

// import './styles.css';

// import required modules
// import { Pagination } from 'swiper/modules';
import Slider from './Slider';
import { Pagination } from 'swiper/modules';

const Details = () => {
    // const data = useLoaderData()
    // const [dep,setDet]=useState('false')
    const id = useParams().id
    const [cart, refetch, isLoading] = Alldata()

    // useEffect(()=>{fetch(`https://b9a12-server-side-safwan169.vercel.app/alldata/${id}`
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    // ),[dep]})
    // const [productNames, setProductName] = useState('');

    // const dd = axios.get(`https://b9a12-server-side-safwan169.vercel.app/alldata`).data



    // console.log('sf',cart)
    const detailsData = cart?.find(d => d._id == id)
    console.log(detailsData)


    const handleReported = (productName, _id) => {
        const data = {
            name: productName,
            id: _id
        }
        axios.post(`https://b9a12-server-side-safwan169.vercel.app/report`, data)
            .then(res => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Report has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });

            })

    }

    const { description, date, externalLinks, productImage, productName, vote, tags, _id, voteUser, photoURL, displayName, email } = detailsData



    const Datee = new Date(date).toLocaleString()
    // const [rev,,reRev]=allReview()
    const [dd, setDD] = useState()
    const [depp,setDepp]=useState()
    useEffect(() => {
        fetch('https://b9a12-server-side-safwan169.vercel.app/vvv')
            .then(res => res.json())
            .then(data => setDD(data))
    }, [depp])
    // const ddd=dd.filter(d=>d.id==_id)
    const datas = dd?.filter(d => d.id == id)
    // console.log('da',rev,)
    // console.log(dd, datas)
    return (
        <>
            <div className='z-10'>
                <div className="card z-10 mx-5 my-5 px-3
         card-side bg-base-100 shadow-xl">
                    <figure><img className='w-full h-[400px]' src={productImage} alt="Movie" /></figure>
                    <div className="card-body">
                        <span className='flex justify-between'>
                            <h2 className="card-title">{productName}<span><a href={`${externalLinks}`}><FaShareFromSquare className='hover:text-orange-400' /></a></span> </h2>
                            <button onClick={() => { handleReported(productName, _id) }} className=' btn bg-red-500 font-bold mb-2 text-white '>Report</button>

                        </span>
                        <p>{description}</p>
                        <div className='w-max flex gap-5'>
                            {tags.map(d => <p className=''># <span className='font-bold text-purple-500'>{d.text}</span></p>

                            )}
                        </div>
                        <p>{Datee}</p>

                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">Product Owner Info</label>
                            <div className="mt-1">
                                <div className="flex items-center space-x-4">
                                    <img src={photoURL} alt="Owner" className="w-10 h-10 rounded-full" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{displayName}</p>
                                        <p className="text-sm text-gray-500">{email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="card-actions justify-end">
                            <BTn vote={vote} _id={_id} data={voteUser}></BTn>

                        </div>
                    </div>

                </div>
                <div className="mt-10">
                    <Heading text={'All Reviews'}></Heading>

                </div>
                <div className='lg:mx-28 md:mx:28  '>
                    {/* {datas?.map(d => <ALLreviews data={d}></ALLreviews>)} */}
                    {/* <Slider></Slider> */}


                    <div className=' my-10 hidden md:block lg:block  '>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                        {/* <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper "> */}

                            {datas?.map(d => <SwiperSlide className='400 '>


                                <div className="card lg:w-96 bg-base-100 border border-gray-300 py-5 shadow-xl">
                                    <figure><img className='lg:w-40 w-10 h-40 rounded-xl' src={d.img} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{d.name}</h2>
                                        <p>{d.des}</p>
                                        <div className="card-actions justify-end">
                                            <p className="">{d.rate}</p>
                                        </div>
                                    </div>
                                </div>


                            </SwiperSlide>)}
                        </Swiper>
                    </div>

                    <div>


                        <Slider datas={datas}></Slider>
                    </div>


                    {/* <div className='flex'>{datas?.map(d =>

                        <SwiperSlide>
                            <div className="card w-96 bg-base-100 border border-gray-300 py-5 shadow-xl">
                                <figure><img className='w-40 h-40 rounded-xl' src={d.img} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{d.name}</h2>
                                    <p>{d.des}</p>
                                    <div className="card-actions justify-end">
                                        <p className="">{d.rate}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                    </div> */}



                </div>

                <Heading text={"Review "}></Heading>
                <div className='w-full flex justify-center my-10'>
                    <Review1 setDepp={setDepp} depp={depp} id={id}></Review1>



                </div>
            </div>
        </>
        // <div></div>
    );
};

export default Details;