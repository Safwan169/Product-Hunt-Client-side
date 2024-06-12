
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import "./styles.css";

// import './styles.css';

// import required modules
// import { Pagination } from 'swiper/modules';
// import Slider from './Slider';
import { Pagination } from 'swiper/modules';
import couponsData from './couponsData';


const ShowCoupons = () => {
    const [coupons]=couponsData()
    return (
        // <div className="flex items-center justify-center min-h-screen bg-gray-100">
        //     <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
        //         <div className="bg-cover bg-center h-40" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1602524819048-594f5a52b3e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDEzNzd8MHwxfGFsbHwxfHx8fHx8fHwxNjIxNjk5NjY0&ixlib=rb-1.2.1&q=80&w=1080)' }}></div>
        //         <div className="p-6">
        //             <h1 className="text-2xl font-semibold text-gray-800">Exclusive Coupon</h1>
        //             <p className="text-gray-600 mt-2">
        //                 Use code <span className="font-bold text-blue-500">SAVE20</span> to get 20% off your next purchase.
        //             </p>
        //             <p className="text-gray-600 mt-2">
        //                 Expires on: <span className="font-bold">2024-12-31</span>
        //             </p>
        //             <p className="text-gray-600 mt-2">
        //                 Description: Save on your next purchase with this special coupon code!
        //             </p>
        //             <p className="text-gray-600 mt-2">
        //                 Discount: <span className="font-bold">20% off</span>
        //             </p>
        //         </div>
        //         <div className="bg-gray-100 px-6 py-4">
        //             <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
        //                 Apply Coupon
        //             </button>
        //         </div>
        //     </div>
        // </div>


        <div className=' my-10   '>
                        <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper h-[150px]">
                {/* <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper "> */}

                {coupons?.map(d => <SwiperSlide className='400 '>


                    <div className='border flex flex-col  lg:flex-row border-green-500 rounded-xl mx-auto p-5 w-1/2'>



                        <p className="font-bold text-gray-600 w-1/3 mt-2 border-r-2 mr-5 pr-7 border-dashed border-green-500">
                            Use code <span className="font-bold  text-green-500">{d.code}</span> to get {d.amount } off OuR Membership  purchase.
                        </p>

                        <div>
                            < p className='text-2xl font-bold text-green-500'>CODE: {d.code}</p>
                            <p className=' font-bold'> {d.amount} $ <span className='text-orange-500 font-bold'>Off</span></p>
                            <p className='font-medium text-gray-400'>{d.description}</p>
                            <p className='font-semibold'>Valid Till {d.date }</p>
                        </div>


                    </div>


                </SwiperSlide>)}
            </Swiper>
        </div>


    );
};

export default ShowCoupons;