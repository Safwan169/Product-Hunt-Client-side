import axios from 'axios';
import React from 'react';
import Contex from '../Authentication/Contex';
import Swal from 'sweetalert2';

const Review1 = ({id}) => {
    const {user}=Contex()
const ids=id
    const handleSubmit=e=>{
        e.preventDefault()
        const name=user.displayName
        const img=user.photoURL
        const id=ids
        const des=e.target.description.value
        const rate=e.target.rate.value
        const data={id,name,img,des,rate}
        console.log(data)
        axios.post(`https://b9a12-server-side-safwan169.vercel.app/rev`,data)
        .then(res=>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Review has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        })
    }
    return (
        <div className='w-1/2 '>
            <form onSubmit={handleSubmit} action="">



            <label className="form-control">
               <div className="label">
                    <span className="label-text">Description</span>
                </div>
                <textarea name='description' className="textarea textarea-bordered h-24" placeholder="Write something about it .."></textarea>

            </label>
            <div className='mt-5 mb-2'>
                <span>Rate This Product (out of 5)</span>
            </div>

                <input type="number" name='rate' placeholder="Rating here" className="input input-bordered w-full max-w-xs" />
                <button className='mt-10 btn btn-primary'> submit</button>
            </form>
           </div>
    );
};

export default Review1;