import React from 'react';
import ReportDataHook from '../../Fatching-data/ReportDataHook';
import { TiDelete } from 'react-icons/ti';
import { TbListDetails } from 'react-icons/tb';
import Heading from '../../All-Shared/Heading';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Alldata from '../../Fatching-data/Alldata';

const Reported = () => {
    const [,refetch,]=Alldata()
    const [reportData,refetchReport,] = ReportDataHook()
    // console.log('daf',data)

    const handleDelete=id=>{
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
      
                axios.delete(`https://b9a12-server-side-safwan169.vercel.app/reportdel/${id}`)
                .then(res => {
      
      
                  refetch()
                  refetchReport()
      
                  Swal.fire({
                    title: "Deleted!",
                    text: "This File has been deleted.",
                    icon: "success"
                  });
                }
      
                )
      
      
      
            }
          });

    }
    return (
        <div>

            <Heading text={'Reported Contents'}></Heading>

            <div className='w-svw   mx-auto'>
                <div className="z-10 lg:mx-32 md:mt-20 mx-auto  lg:mt-10 md:mx-32">
                    <table className="table table-xs">
                        <thead>
                            <tr>
                                <th className=''></th>
                                <th className='font-bold text-xl '>Product Name</th>
                                <th className='font-bold text-xl '>Details</th>
                                <th></th>

                            </tr>
                        </thead>
                        {
                            reportData?.map((data, index) => <tbody> <tr className=''>
                                <th className='text-xl'>{index + 1}</th>
                                <td className='font-bold text-xl'>{data.name}</td>
                                <td className=' '><Link className='btn' to={`/details/${data.id}`}><TbListDetails size={35} className='   text-green-400' /></Link></td>
                                <td onClick={() => handleDelete(data.id)}><button className='btn'><TiDelete size={35} className='text-red-500' /></button></td>
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

export default Reported;