import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import style.css from './style.css';
// import ''
// import required modules
import { Pagination } from 'swiper/modules';


const Slider = ({ datas }) => {


    return (
        <div className='lg:hidden md:hidden  '>


            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper h-[370px]"
            >

                {datas?.map(d => <SwiperSlide className='border   '>


                    <div className="card lg:w-96 bg-base-100 border  border-green-300 py-5 shadow-xl">
                        <figure><img className='w-20 h-20 rounded-full' src={d.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title  font-bold">{d.name}</h2>
                            <p className='text-gray-400 font-semibold'>{d.des}</p>
                            <div className="card-actions justify-end">
                                <p className="font-bold">Rating: <span className='font-bold text-blue-500'>{d.rate}</span></p>
                            </div>
                        </div>
                    </div>


                </SwiperSlide>)}
            </Swiper>

        </div>);
}

export default Slider;