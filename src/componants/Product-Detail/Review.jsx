import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Contex from "../Authentication/Contex";

const Review1 = ({ id, setDepp, depp }) => {
  const { user } = Contex();
  const ids = id;

  const [rating, setRating] = useState(1); 
  const currentDate = new Date(Date.now());

const handleRatingChange=(value) => {


    setRating(value)
}


  const handleSubmit = (e) => {
    e.preventDefault();
    const name = user.displayName;
    const img = user.photoURL;
    const email = user.email;
    const id = ids;
    const des = e.target.description.value;
    const rate = rating;
    const date= currentDate.toLocaleDateString();
    const data = { id, name, img, des, rate, email,date };
    axios
      .post(`https://b9a12-server-side-safwan169.vercel.app/rev`, data)
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Review has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        setDepp(!depp);
      });
  };
  return (
    <div className="w-full  ">
      <form className=" w-full  mx-auto " onSubmit={handleSubmit} action="">


     <div className="w-full my-3 mx-3 ">
     {[1, 2, 3, 4, 5].map((value) => (
        <input
          key={value}
          type="radio"
          name="rating-2"
          className={`mask  w-6 h-6 mask-star-2 border border-green-400  ${rating >=value?'bg-orange-400':'border bg-gray-400'} `}
          value={value}
          onChange={() => handleRatingChange(value)}
        />
      ))}
     </div>

     <div className="flex relative mx-auto">
     <label className="form-control w-full">
          <textarea
            name="description"
            className="textarea textarea-bordered h-24"
            placeholder="Write something about it .."
          ></textarea>
        </label>
      

       
        <button className="btn absolute right-0 bottom-0 m-3 bg-red-700 text-white font-bold rounded-none"> submit</button>
     </div>
      </form>
    </div>
  );
};

export default Review1;
