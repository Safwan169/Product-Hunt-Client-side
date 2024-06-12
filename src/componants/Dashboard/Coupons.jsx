import React from 'react';
import Heading from './Heading';
import { Link } from 'react-router-dom';
import couponsData from './couponsData';
import { TiEdit } from 'react-icons/ti';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import axios from 'axios';

const Coupons = () => {
  const [coupons, refetchCoupons, isload] = couponsData()



  const handleDelete=(id)=>{
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
          axios.delete(`http://localhost:5000/deleteCoupons/${id}`,{ withCredentials: true })
          .then(res=>{
             console.log(res.data)
             if (res.data.deletedCount) {
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Deleted!",
                  text: "Your Coupon has been deleted.",
                  showConfirmButton: false,
                  timer: 1500
                });
              
             }
      
              refetchCoupons()
          })
       
      }
    });
  }
  console.log(coupons)
  if (isload) {
    return <span className="loading loading-ring absolute left-1/2 top-1/2 loading-lg"></span>

  }
  return (
    <div>

      <>
        <Heading text={' Manage Coupons'}></Heading>

        <div className='w-svw   mx-auto'>
          <div className="z-10 lg:mx-32 md:mt-20 mx-auto  lg:mt-10 md:mx-32">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th className=''></th>
                  <th className=' '> Coupon Code
                  </th>
                  <th className=' '>Expiry Date
                  </th>
                  <th className=' '>Discount Amount</th>
                  <th className=''> Description
                  </th>
                  <th className='w-4'></th>
                  <th></th>
                  <th><Link className='btn bg-red-500 text-white font-bold' to={'/dashboard/addCoupons'}>Add Coupon</Link ></th>

                </tr>
              </thead>
              {
                coupons?.map((data, index) => <tbody> <tr className=''>
                  <th>{index + 1}</th>
                  <td>{data.code}</td>
                  <td>{data.date}</td>
                  <td>{data.amount}</td>
                  <td>{data.description}</td>

                  <td className=' ' ><Link to={`/dashboard/updateCoupons/${data._id}`} className='btn border border-orange-200  text-green-400'><TiEdit size={25} /></Link></td>
                  <td className=' '><span onClick={() => handleDelete(data._id)} className='btn  border border-orange-200 text-red-500'> <MdDelete size={25} /></span></td>

                  {/* <td className=' '><Link className='btn' to={`/details/${data._id}`}><TbListDetails size={25} className='   text-green-400' /></Link></td>
                <td onClick={() => handleFetured(data)} className=''><span className='btn'><MdOutlineFeaturedPlayList className='text-blue-400' size={25} /></span></td>
                <td className=' text-gray-400 font-semibold'>{data.status}</td>
                {data.status == "Accepted" || data.status == "Rejected" ? <td ><button className=''><span className=''><MdOutlineFileDownloadDone size={25} className='text-gray-400 disabled' /></span></button></td> : <td onClick={() => handleAcepted(data._id)} className={`btn`}><button className=''><span className=''><MdOutlineFileDownloadDone size={25} className='text-green-400 ' /></span></button></td>}
                {data.status == "Accepted" || data.status == "Rejected" ? <td><button className='btn'><TiDelete size={25} className='text-gray-400 disabled' /></button></td> : <td onClick={() => handleDelete(data._id)}><button className='btn'><TiDelete size={25} className='text-red-500' /></button></td>} */}


                </tr>
                </tbody>

                )
              }




            </table>
          </div>
        </div>
      </>

    </div>
  );
};

export default Coupons;