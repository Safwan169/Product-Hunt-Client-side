import { FaShareFromSquare } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import Alldata from "../Fatching-data/Alldata";
import axios from "axios";
import Swal from "sweetalert2";
import Heading from "../All-Shared/Heading";
import Review1 from "./Review";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slider from "../All-Shared/Slider";
import { Pagination } from "swiper/modules";
import BTn from "../All-Shared/BTn";

const Details = () => {
  const id = useParams().id;
  const [cart] = Alldata();
  const detailsData = cart?.find((d) => d._id == id);
  const handleReported = (productName, _id) => {
    const data = {
      name: productName,
      id: _id,
    };
    axios
      .post(`https://b9a12-server-side-safwan169.vercel.app/report`, data)
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Report has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const {
    description,
    date,
    externalLinks,
    productImage,
    productName,
    vote,
    tags,
    _id,
    voteUser,
    photoURL,
    displayName,
    email,
  } = detailsData;

  const Datee = new Date(date).toLocaleString();
  const [dd, setDD] = useState();
  const [depp, setDepp] = useState();
  useEffect(() => {
    fetch("https://b9a12-server-side-safwan169.vercel.app/vvv")
      .then((res) => res.json())
      .then((data) => setDD(data));
  }, [depp]);
  const datas = dd?.filter((d) => d.id == id);

  return (
    <>
      <div className="z-10">
        <div
          className="card  sm:flex-row flex-col z-10 mx-5 my-5  lg:px-3
         card-side bg-base-100 shadow-xl"
        >
          <div className="w-full md:w-1/2 lg:w-fit  flex items-center">
            <img
              className="w-40 mx-auto sm:w-full h-40 sm:h-[200px]"
              src={productImage}
              alt="Movie"
            />
          </div>
          <div className="card-body px-0 md:px-3 lg:px-5 ">
            <span className="flex justify-between">
              <h2 className="card-title">
                {productName}
                <span>
                  <a href={`${externalLinks}`}>
                    <FaShareFromSquare className="hover:text-orange-400" />
                  </a>
                </span>{" "}
              </h2>
              <button
                onClick={() => {
                  handleReported(productName, _id);
                }}
                className=" btn bg-red-500 font-bold mb-2 text-white "
              >
                Report
              </button>
            </span>
            <p>{description}</p>
            <div className="w-max flex gap-5">
              {tags.map((d) => (
                <p className="">
                  # <span className="font-bold text-purple-500">{d.text}</span>
                </p>
              ))}
            </div>
            <p>{Datee}</p>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Product Owner Info
              </label>
              <div className="mt-1">
                <div className="flex items-center space-x-4">
                  <img
                    src={photoURL}
                    alt="Owner"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {displayName}
                    </p>
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
          <Heading text={"All Reviews"}></Heading>
        </div>
        <div className="lg:mx-28 md:mx:28  ">
          <div className=" my-10   ">
            {datas?.map((d) => (
              <div className="p-6 bg-white rounded-lg  shadow-md max-w-4xl mx-auto md:p-8">
                {/* User Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={d?.img}
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h2 className="font-bold text-lg">{d?.name}</h2>
                    <p className="text-sm text-gray-500">
                    {d?.email}
                    </p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="mt-4">
                  <div className="flex text-yellow-500 space-x-1">
                    {[...Array(d?.rate)].map((_, i) => (
                      <span key={i}>&#9733;</span>
                    ))}
                  </div>
                </div>

                {/* Review Content */}
                <p className="mt-4 text-gray-700 leading-relaxed">{d?.des}</p>

                {/* Footer */}
                <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
                
                  <span>{d?.date}</span>
                </div>
              </div>
            ))}
            <p></p>
            <div className="max-w-4xl  mx-auto  my-10">
              <Review1 setDepp={setDepp} depp={depp} id={id}></Review1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
