import React, { useContext } from 'react';
import Heading from '../../../All-Shared/Heading';
import alUser from '../../../Fatching-data/alUser';
import { MdAddModerator, MdAdminPanelSettings } from 'react-icons/md';
import axios from 'axios';
import { myContext } from '../../../Authentication/Authentication';

const ManageUser = () => {
    const [user2,refetchUser,]=alUser()
    const {dep,setDep,user}=useContext(myContext)
    // console.log(user[0])
    const user3=user2.filter(d=>d.email!==user.email)
    


    const handleStatus=(id,text)=>{

        const data=text
    const dd = { data }
    console.log(dd)

        axios.put(`https://b9a12-server-side-safwan169.vercel.app/roleChanged/${id}`,dd)
        .then(res=>{
            refetchUser()
            setDep(!dep)
        })
    }
    return (
        <div>
            
      <Heading text={' All Users'}></Heading>

<div className='w-svw   mx-auto'>
  <div className="z-10 lg:mx-32 md:mt-20 mx-auto  lg:mt-10 md:mx-32">
    <table className="table table-xs">
      <thead>
        <tr>
          <th className=''></th>
          <th className=' '>User Name</th>
          <th className=' '>User Email</th>
          <th className=' '>Role</th>
          <th className=' '>Admin/Moderator</th>
          
          <th></th>

        </tr>
      </thead>
      {
        user3?.map((data, index) => <tbody> <tr className=''>
          <th>{index + 1}</th>
          <td className='font-bold ' >{data?.name}</td>
          <td className='font-bold text-red-500'>{data.email}</td>
          <td className='font-bold text-blue-500'>{data.status}</td>
          <td className=' flex gap-5'>
            {data.status=="Admin"?<span > <  MdAdminPanelSettings className={`text-gray-400 `} size={35} /></span>
            :<span onClick={()=>handleStatus((data._id),"Admin")} > <  MdAdminPanelSettings className={`text-blue-500 `} size={35} /></span>}
            {(data.status=="Moderator" || data.status=="Admin") ? <span className='' > < MdAddModerator     className={`text-gray-400 disabled`} size={35} />
            </span>
             : <span className='' onClick={()=>handleStatus((data._id),"Moderator")}> < MdAddModerator     className={`text-blue-500 disabled`} size={35} />
            </span>}
            </td>
          {/* <td className='font-bold'>{data.role}</td> */}
          
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
        </div>
    );
};

export default ManageUser;