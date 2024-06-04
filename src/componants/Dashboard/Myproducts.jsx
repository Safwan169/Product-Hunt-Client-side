import React from 'react';
import { MdDelete } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';


const Myproducts = () => {
    return (
        <div className=' mx-auto'>
            <div className="z-10 lg:mx-10 md:mt-10 mx-auto lg:mt-10 md:mx-10">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Vote</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                         
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=''>
                            <th></th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td className='   ' ><span className='btn text-green-400'><TiEdit size={25} /></span></td>
                            <td className=' '><span className='btn text-red-500'> <MdDelete size={25}/></span></td>
                         
                          
                        </tr>



                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Myproducts;