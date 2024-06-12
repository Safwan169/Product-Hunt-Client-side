import React from 'react';
import Contex from '../Authentication/Contex';

const Myprofile = () => {
    const { user } = Contex()
    return (
        <div>
            <img className='w-full' src="https://i.ibb.co/44vbK9G/profile.png" alt="" />

            <div className="max-w-sm mx-auto absolute bottom-6 left-1/2 -translate-x-1/2  shadow-md rounded-lg overflow-hidden mt-10">
                <div className="p-6 text-center">

                    <img
                        className="w-36 bg-white p-1 h-36 rounded-full mx-auto mb-4"
                        src={user?.photoURL}
                        alt="User"
                    />
                    <div className='bg-white'>
                        <h2 className="text-2xl font-bold mb-4">{user?.displayName}</h2>

                        <p className="text-gray-700 mb-4 font-bold">Email: {user?.email}</p>
                    </div>
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