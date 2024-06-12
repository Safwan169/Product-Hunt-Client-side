import React from 'react';
import Heading from './Dashboard/Heading';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const AddCoupons = () => {
    const navigate=useNavigate()
    const handleSubmit=e=>{
        e.preventDefault();
        const code=e.target.code.value;
        const amount=e.target.amount.value;
        const date=e.target.date.value;
        const description=e.target.description.value;

        const data={
            code,amount,date,description
        }
        console.log(data)

        axios.post('https://b9a12-server-side-safwan169.vercel.app/coupon',data)
        .then(res=>{

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Coupon has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/dashboard/coupons')


        }



        )

        
    }
    return (
        <div>
            <Heading text={'Add Coupons'}></Heading>
            
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
                <button className='mt-10 btn w-full font-bold text-xl btn-primary'> submit</button>
            </form>
           </div>
        </div>
    );
};

export default AddCoupons;