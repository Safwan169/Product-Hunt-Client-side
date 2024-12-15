import React, { useEffect, useState } from 'react';
import Alldata from '../../Fatching-data/Alldata';
import { Link } from 'react-router-dom';
import { TbListDetails } from 'react-icons/tb';
import { MdOutlineFeaturedPlayList, MdOutlineFileDownloadDone } from 'react-icons/md';
import Heading from '../../All-Shared/Heading';
import { TiDelete } from 'react-icons/ti';
import axios from 'axios';
import Swal from 'sweetalert2';

const Review = () => {

  // const [data, setData] = useState([
  //   { id: 1, name: "Item 1", status: "active" },
  //   { id: 2, name: "Item 2", status: "rejected" },
  //   { id: 3, name: "Item 3", status: "pending" },
  //   { id: 4, name: "Item 4", status: "active" },
  //   { id: 5, name: "Item 5", status: "pending" },
  //   { id: 6, name: "Item 6", status: "rejected" }
  // ]);

  const [cart, refetch,] = Alldata()
  const [Dataa, SetData] = useState([])


  useEffect(() => {
    const sortDataByStatus = (Dataa) => {
      const statusOrder = ["pending", "Accepted", "Rejected"];
      return Dataa.sort((a, b) => statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status));
    };

    SetData(sortDataByStatus(cart));
  }, [cart]);



  // featured function
  const handleFetured = data => {
    axios.post(`https://b9a12-server-side-safwan169.vercel.app/fetured`, data)

      .then(res => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.productName} now available in Featured section `,
          showConfirmButton: false,
          timer: 1500
        }),

          refetch()
      }
      )
  }






  const handleAcepted = id => {
    const text = "Accepted"
    const dd = { text }
    axios.put(`https://b9a12-server-side-safwan169.vercel.app/status/${id}`, dd)
      .then(res => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Accepted",
          showConfirmButton: false,
          timer: 1500
        }),

          refetch()
      }
      )

  }

  const handleDelete = id => {

    const text = "Rejected"
    const dd = { text }

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

        axios.put(`https://b9a12-server-side-safwan169.vercel.app/status/${id}`, dd)
          .then(res => {


            refetch()

            Swal.fire({
              title: "Deleted!",
              text: "This File has been deleted.",
              icon: "success"
            });
          }

          )



      }
    });



    // TODO:back hand ar kaj baki r baki hoilo status update koira abr saita refresh korta hoibo abr aikan ta sorai tay hoibo ai product ta abr delete ar kaj o baki .
  }
  return (



    <div className='mt-20 pl-8 sm:pl-0'>
      <Heading text={' Products Review'}></Heading>

      <div className='w-svw   mx-auto'>
        <div className="z-10 lg:mx-32 md:mt-20 mx-auto  lg:mt-10 md:mx-32">
          <table className="table table-xs">
            <thead>
              <tr>
                <th className='text-[16px] '></th>
                <th className='text-[16px]  '>Product Name</th>
                <th className='text-[16px]  '>Details</th>
                <th className='text-[16px]  '>Make Featured</th>
                <th className='text-[16px] '>Status</th>
                <th className='text-[16px] w-4'>Accepted </th>
                <th className='text-[16px]'>Rejected</th>

              </tr>
            </thead>
            {
              Dataa?.map((data, index) => <tbody> <tr className=''>
                <th>{index + 1}</th>
                <td>{data.productName}</td>
                <td className=' '><Link className='btn' to={`/details/${data._id}`}><TbListDetails size={25} className='   text-green-400' /></Link></td>
                <td onClick={() => handleFetured(data)} className=''><span className='btn '><MdOutlineFeaturedPlayList className='text-blue-400' size={25} /></span></td>
                <td className=' text-gray-400 font-semibold'>{data.status}</td>
                {data.status == "Accepted" || data.status == "Rejected" ? <td className=' text-center' ><button className=''><span className=''><MdOutlineFileDownloadDone size={25} className='text-gray-400 disabled mx-auto' /></span></button></td> : <td onClick={() => handleAcepted(data._id)} className={`btn`}><button className=''><span className=''><MdOutlineFileDownloadDone size={25} className='text-green-400 ' /></span></button></td>}
                {data.status == "Accepted" || data.status == "Rejected" ? <td><button className='btn'><TiDelete size={25} className='text-gray-400 disabled' /></button></td> : <td onClick={() => handleDelete(data._id)}><button className='btn'><TiDelete size={25} className='text-red-500' /></button></td>}


              </tr>
              </tbody>

              )
            }




          </table>
        </div>
      </div>
    </div>




  );
};

export default Review;