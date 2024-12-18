import React, { useState } from 'react';
import Contex from '../../Authentication/Contex';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SpecificUser from '../../Fatching-data/SpecificUser';
import couponsData from '../../Fatching-data/couponsData';
import CheckoutForm from './CheckoutForm';

const Myprofile = () => {

    // TODO:now you have to check client data can go or not into the stripe  
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

    
    const { user, UserData,userLoad,setUserLoad } = Contex()
    const [specificUser,refetchUserSpecific]=SpecificUser()
// console.log(specificUser)


    const [coupons] = couponsData()
    console.log(coupons)

    // const [user3]

    const [subscriptionPrice, setSubscriptionPrice] = useState(249);
    const [message, setMessage] = useState('');
    const [couponCode, setCouponCode] = useState('');

    const last = coupons?.filter(d => d.code == couponCode)
    // const dd=...last
    // console.log(last)



    const applyCoupon = (e) => {

        // if (couponCode in coupons) {
        //     const discount = coupons[couponCode];
        //     const discountedPrice = subscriptionPrice - (subscriptionPrice * discount);
        //     setSubscriptionPrice(discountedPrice.toFixed(2));
        //     setMessage(`Coupon applied! You saved ${discount * 100}%`);
        // } else {
        //     setMessage('Invalid coupon code');
        // }
        if (last.length > 0) {
            const discountedPrice = subscriptionPrice - (last[0]?.amount);
            setSubscriptionPrice(discountedPrice);

            setCouponCode('')
            setMessage('');


        }
        else {
            setMessage('Invalid coupon code');
        };
    }

    return (
        <div className='relative  w-full mx-0 px-0 sm:left-0'>
            <img className='w-full h-40 sm:h-full' src="https://i.ibb.co/44vbK9G/profile.png" alt="" />

            <div className="lg:w-[800px] pl-10 lg:pl-0 w-full absolute top-3/4 md:top-1/2 lg:top-3/4 sm:left-1/2 sm:-translate-x-1/2  shadow-sm rounded-lg mt-0 sm:mt-10">
                <img
                    className="sm:w-36 bg-cover w-20 h-20 bg-white p-1 sm:h-36 rounded-full mx-auto "
                    src={user?.photoURL}
                    alt="User"
                />
                <div className="p-6 text-center bg-white">


                    <div className='bg-white'>
                        <h2 className=" text-xl sm:text-2xl font-bold mb-4">{user?.displayName}</h2>

                        <p className="text-gray-700  font-bold">{user?.email}</p>
                        {
                            specificUser?.membership == "verified" && <div>
                                <p className="text-gray-700 mt-5 font-bold"> <span className='text-blue-400 text-xl font-bold'> Verified</span></p>

                            </div>
                        }
                    </div>

                    {specificUser?.membership !== "verified" && <div className=" mx-auto mt-5  bg-white  ">
                        <h1 className="text-2xl flex items-center font-bold text-red-400 justify-center mb-2">
                            <img className='w-20 h-10' src="https://i.ibb.co.com/0spVtrf/logo-removebg-preview.png" alt="" />
                            <span className='text-[16px] sm:text-2xl'> SUBSCRIPTION</span>

                        </h1>
                        <p className="text-lg  font-bold">
                            Premium Monthly <br />
                            <p className='text-gray-400 font-semibold  w-60 sm:w-full x-auto  mt-5 '>
                                Subscribe to our Premium Monthly Plan for just ${subscriptionPrice} and enjoy the freedom to post unlimited products on our platform.

                            </p>
                            <br />
                            {
                                specificUser?.membership == "verified" ? <div>
                                    <span className='btn  mt-5 bg-gray-400 rounded-xl text-white font-bold   ' id="subscription-price">Subscribe for <span className='text-xl'> ${subscriptionPrice}/month</span></span>

                                </div> : <div>

                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="w-56 sm:w-fit" onClick={() => document.getElementById('my_modal_1').showModal()}>

                                        {/* subscription button  */}
                                        <span className='btn mt-5 w-full bg-red-500 rounded-none text-[14px] sm:text-xl text-white font-bold   ' id="subscription-price">Subscribe for <span className='sm:text-xl'> ${subscriptionPrice}/month</span></span>

                                    </button>

                                    <dialog id="my_modal_1" className="modal ">
                                        <div className="modal-box">


                                            <Elements stripe={stripePromise}>
                                                <CheckoutForm data={subscriptionPrice}></CheckoutForm>
                                            </Elements>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn close">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>







                                </div>
                            }
                        </p>

                        {specificUser?.membership !== "verified"  && <h2 className="text-[14px] sm:text-xl font-semibold  text-blue-500 mt-6 mb-5">Apply Coupon</h2>}
                        {
                            specificUser?.membership !== "verified" && <div className=" w-full  ">
                                <div className="mx-auto w-full  pl-1 sm:pl-0 flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2 flex items-center justify-center">
                                <input
                                    type="text"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    placeholder="Enter coupon code"
                                    className=" w-3/4 sm:w-1/2 px-4 py-2 border rounded-none"
                                />
                                {
                                    subscriptionPrice == 249 ? <button
                                        type="button"
                                        onClick={applyCoupon}
                                        className="px-4 py-2 bg-blue-500 text-white rounded-none"
                                    >
                                        Apply
                                    </button> : <button
                                        type="button"
                                        // onClick={applyCoupon}
                                        className="px-4 py-2 bg-gray-400 text-white  rounded-none"
                                    >
                                        Apply
                                    </button>
                                }
                                </div>
                            </div>
                        }
                        <p id="message" className="mt-1 text-left text-red-500">{message}</p>

                    </div>}
                    {/* 
                    {!user.isSubscribed ? (
                        <button className="bg-green-500 text-white py-2 px-4 rounded">
                            ${user.subscriptionAmount} Subscribe
                        </button>
                    ) : (
                        <div className="mt-4 p-2 bg-gray-100 border border-gray-300 rounded">
                            Status: Verified
                        </div>
                    )} */}
                </div>
            </div>
        </div>
    );
};

export default Myprofile;