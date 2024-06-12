import React from 'react';
import Contex from './Authentication/Contex';
import axios from 'axios';
import Alldata from './Alldata';
import { useNavigate } from 'react-router-dom';
import Featured from './Featured';

const BTn = ({data,_id,vote }) => {
    const {user,loading}=Contex()
    const [,refetch]=Alldata()
    const [,refetch1]=Featured()

    const navigate = useNavigate()
    const handleVote = (id) => {

        if (user) {

            axios.put(`https://b9a12-server-side-safwan169.vercel.app//vote/${id}`, user)
                .then(res => {
                    refetch()
                    refetch1()

                })


        }
        else {
            navigate('/login')
        }
    }
   ;


  
    const dd= data?.find(d=>d==user?.email)
    const handleVoteDelete=id=>{
        axios.put(`https://b9a12-server-side-safwan169.vercel.app//voteDec/${id}`, user)
        .then(res => {
            console.log(res.data)
            refetch()
            refetch1()


        })
    }
    return (
        <div>
            {loading ? <span className="loading loading-ring loading-md"></span> :<>{dd?<button onClick={() => handleVoteDelete(_id)} className={`btn disabled bg-slate-300 text-black`}>{vote}</button> : <button onClick={() => handleVote(_id)} className="btn btn-primary">{vote}</button>}</>}
        
        </div>
    );
};

export default BTn;