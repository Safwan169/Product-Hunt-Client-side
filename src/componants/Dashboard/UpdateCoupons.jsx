import React from 'react';
import Heading from './Heading';
import AddCoupons from '../AddCoupons';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateCoupons = () => {
    const id=useParams().id
    // console.log(id)
const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        const code=e.target.code.value;
        const amount=e.target.amount.value;
        const date=e.target.date.value;
        const description=e.target.description.value;

        const data={
            code,amount,date,description
        }
        console.log(data)

        axios.put(`https://b9a12-server-side-safwan169.vercel.app/Updatecoupon/${id}`,data)
        .then(res=>{

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Coupon has been Updated",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/dashboard/coupons')


        }



        )
    }
    return (
        <div>
            <Heading text={"Update Coupons"}> </Heading>
            <div>
            {/* <Heading text={'Add Coupons'}></Heading> */}
            
        <div className='w-1/2 mx-auto '>
            <form onSubmit={handleSubmit} action="">

            <div className='mt-5 mb-2'>
                <span className='font-bold'>Coupon Code</span>
            </div>

                <input type="number" name='code' placeholder="Coupon Code" className="input input-bordered w-full " />
                <div className='mt-5 mb-2'>
                <span className='font-bold'>Discount Amount</span>
            </div>

                <input type="number" name='amount' placeholder="Discount Amount" className="input input-bordered w-full " />


                <div className='mt-5 mb-2'>
                <span className='font-bold'>Expiry Date</span>
            </div>

                <input type="date" name='date' placeholder="Expiry Date" className="input input-bordered w-full " />


            <label className="form-control">
               <div className="label">
                    <span  className="label-text font-bold">Description</span>
                </div>
                <textarea name='description' className="textarea textarea-bordered h-24" placeholder="Write something about it .."></textarea>

            </label>
                <button className='mt-10 btn w-full font-bold text-xl btn-primary'> Submit</button>
            </form>
           </div>
        </div>            
        </div>
    );
};

export default UpdateCoupons;