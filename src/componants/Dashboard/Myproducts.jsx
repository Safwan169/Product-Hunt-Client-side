import React from 'react';
import { MdDelete } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';
import UseCart from './Usecart';
import Heading from './Heading';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import AddorNot from './AddorNot';


const Myproducts = () => {
const [cart,refetch]=UseCart()
const [,refetchYesOrNot]=AddorNot()

const handleDelete = id=>{
  


    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`https://b9a12-server-side-safwan169.vercel.app/delete/${id}`,{ withCredentials: true })
            .then(res=>{
               console.log(res.data)
               if (res.data.deletedCount) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    showConfirmButton: false,
                    timer: 1500
                  });
                
               }
        
                refetch()
                refetchYesOrNot()
            })
         
        }
      });
   
}

    return (
      <>
      <Heading text={'My Products'}></Heading>
      
      <div className='w-svw   mx-auto'>
            <div className="z-10 lg:mx-32 md:mt-20 mx-auto  lg:mt-10 md:mx-32">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th className=''>Product Name</th>
                            <th className=''>Vote</th>
                            <th>Status</th>
                            <th className='lg:w-10 w-4'></th>
                            <th className='w-4'></th>
                         
                        </tr>
                    </thead>
                    <tbody>
                      {
                        cart.map((data,index)=>  <tr className=''>
                        <th>{index+1}</th>
                        <td>{data.productName}</td>
                        <td className='md:pl-5 lg:pl-5'>{data.vote}</td>
                        <td>{data.status}</td>
                        <td className=' ' ><Link to={`/dashboard/update/${data._id}`}  className='btn border border-orange-200  text-green-400'><TiEdit size={25} /></Link></td>
                        <td className=' '><span onClick={()=>handleDelete(data._id)} className='btn  border border-orange-200 text-red-500'> <MdDelete size={25}/></span></td>
                     
                      
                    </tr>)
                      }



                    </tbody>

                </table>
            </div>
        </div>
      </>
    );
};

export default Myproducts;