import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { image } from "./Banner/Image";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ShinyButton from "../../../components/ui/shiny-button";
import couponsData from "../../Fatching-data/couponsData";

const ShowCoupons = () => {
  const [coupons] = couponsData();
  return (
    <>
      <Swiper
        spaceBetween={30}
        // centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3200,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {coupons?.map((data) => (
          <SwiperSlide>
            <ShinyButton className="w-full   ">
              <div className="flex justify-center items-center bg-gray-100 py-10 px-4">
                <div className="flex flex-col lg:flex-row max-w-4xl w-full bg-white border rounded-md shadow-lg overflow-hidden">
                  {/* Left Side */}
                  <div className="bg-yellow-500 flex flex-col justify-center items-center w-full lg:w-1/3 text-white px-6 py-10">
                    <p className="text-base font-bold uppercase tracking-wide">
                      Special Offer
                    </p>
                    <p className="text-6xl font-extrabold">{data?.amount}$</p>
                  </div>

                  {/* Right Side */}
                  <div className="flex-1 p-6 lg:p-8">
                    <div className="flex flex-col h-full justify-between">
                      {/* Title */}
                      <h2 className="text-2xl lg:text-3xl font-bold text-yellow-500 mb-4">
                        Discount Coupon
                      </h2>

                      {/* Expiration Date */}
                      <p className="text-gray-600 text-base lg:text-lg">
                        Expirational Date:{" "}
                        <span className="font-bold">{data?.date}</span>
                      </p>

                      {/* Coupon Code */}
                      <div className="border-2 border-dashed border-yellow-500 p-4 rounded-md mt-6 text-center">
                        <p className="text-sm text-gray-600 font-medium">
                          USE CODE:
                        </p>
                        <p className="text-2xl lg:text-3xl font-bold text-yellow-500 tracking-wide mt-2">
                          {data?.code}
                        </p>
                      </div>

                      {/* Description Section */}
                      <p className="text-gray-500 text-sm lg:text-base mt-8">
                        {data?.description ||
                          "Use this coupon to get an amazing discount on your next purchase. Don't miss out on this special offer!"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ShinyButton>
            .
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default ShowCoupons;
