import React, { useEffect, useState } from 'react';
import Alldata from './Alldata';
import { Link } from 'react-router-dom';
import { TbListDetails } from 'react-icons/tb';
import { MdOutlineFeaturedPlayList, MdOutlineFileDownloadDone } from 'react-icons/md';
import Heading from './Dashboard/Heading';
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

  const [cart,refetch,] = Alldata()
  const [Dataa,SetData]=useState([ ])


  useEffect(() => {
    const sortDataByStatus = (Dataa) => {
      const statusOrder = ["pending", "Accepted", "Rejected"];
      return Dataa.sort((a, b) => statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status));
    };

    SetData(sortDataByStatus(cart));
  }, []);
 
console.log(cart) 



  // const statusOrder = ["pending", "Accepted", "Rejected"];
  // const sortedData = cart.sort((a, b) => {
  //   return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
  // });
  // SetData(sortedData);
  // console.log(cart)
  const handleAcepted=id=>{
    axios.put(`http://localhost:5000/status/${id}`)
    .then(res=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Accepted",
        showConfirmButton: false,
        timer: 1500
      }),
  
        refetch()}
  )

    // TODO:back hand ar kaj baki r baki hoilo status update koira abr saita refresh korta hoibo abr aikan ta sorai tay hoibo ai product ta abr delete ar kaj o baki .
  }
  return (

     

<>
      <Heading text={' Products Review'}></Heading>
      
      <div className='w-svw   mx-auto'>
            <div className="z-10 lg:mx-32 md:mt-20 mx-auto  lg:mt-10 md:mx-32">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th className=''></th>
                            <th className=' '>Product Name</th>
                            <th className=' '>Details</th>
                            <th className=' '>Make Featured</th>
                            <th className=''>Status</th>
                            <th className='w-4'></th>
                            <th></th>
                         
                        </tr>
                    </thead>
                      {
                        Dataa?.map((data,index)=> <tbody> <tr className=''>
                        <th>{index+1}</th>
                        <td>{data.productName}</td>
                        <td className=' '><Link className='btn' to={`/details/${data._id}`}><TbListDetails size={25} className='   text-green-400' /></Link></td>
                        <td className=''><span className='btn'><MdOutlineFeaturedPlayList className='text-blue-400' size={25} /></span></td>
                        <td className=' text-gray-400 font-semibold'>{data.status}</td>   
                        {data.status=="Accepted" || data.status =="Rejected" ?  <td ><button className=''><span  className=''><MdOutlineFileDownloadDone size={25} className='text-gray-400 disabled' /></span></button></td>:<td onClick={()=>handleAcepted(data._id)}  className={``}><button className=''><span  className=''><MdOutlineFileDownloadDone size={25} className='text-green-400 ' /></span></button></td>}
                        {data.status=="Accepted" || data.status == "Rejected"? 
                        <td><button className='btn'><TiDelete size={25} className='text-gray-400 disabled' /></button></td>

                          :<td><button className='btn'><TiDelete size={25} className='text-red-500' /></button></td>}
                     
                      
                    </tr>
                    </tbody>

                    )
                      }




                </table>
            </div>
        </div>
      </>
    



  );
};

export default Review;