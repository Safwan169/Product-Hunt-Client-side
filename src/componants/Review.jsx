import React from 'react';
import Alldata from './Alldata';
import { Link } from 'react-router-dom';
import { TbListDetails } from 'react-icons/tb';
import { MdOutlineFeaturedPlayList, MdOutlineFileDownloadDone } from 'react-icons/md';
import Heading from './Dashboard/Heading';
import { TiDelete } from 'react-icons/ti';
import axios from 'axios';

const Review = () => {
  const [cart] = Alldata()
  const handleAcepted=id=>{
    axios.put(`http://localhost:5000/${id}`)
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
                            <th className=''></th>
                            <th className='w-4'></th>
                         
                        </tr>
                    </thead>
                      {
                        cart.map((data,index)=> <tbody> <tr className=''>
                        <th>{index+1}</th>
                        <td>{data.productName}</td>
                        <td className=' '><Link className='btn' to={`/details/${data._id}`}><TbListDetails size={25} className='   text-green-400' /></Link></td>
                        {/* <td></td>    */}
                        <td className=''><span className='btn'><MdOutlineFeaturedPlayList className='text-blue-400' size={25} /></span></td>
                        <td onClick={()=>handleAcepted(data._id)} className=''><button className=''><span className='btn '><MdOutlineFileDownloadDone size={25} className='text-green-400 ' /></span></button></td>
                        <td><button className='btn'><TiDelete size={25} className='text-red-500' /></button></td>
                     
                      
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