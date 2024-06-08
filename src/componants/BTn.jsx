import React from 'react';
import Contex from './Authentication/Contex';
import axios from 'axios';
import Alldata from './Alldata';
import { useNavigate } from 'react-router-dom';

const BTn = ({data,_id,vote }) => {
    const {user,loading}=Contex()
    const [,refetch]=Alldata()

    const navigate = useNavigate()
    const handleVote = (id) => {

        if (user) {

            axios.put(`http://localhost:5000/vote/${id}`, user)
                .then(res => {
                    refetch()

                })


        }
        else {
            navigate('/login')
        }
    }
   ;


  
    const dd= data?.find(d=>d==user?.email)
    const handleVoteDelete=id=>{
        axios.put(`http://localhost:5000/voteDec/${id}`, user)
        .then(res => {
            console.log(res.data)
            refetch()

        })
    }
    return (
        <div>
            {loading ? <span className="loading loading-ring loading-md"></span> :<>{dd?<button onClick={() => handleVoteDelete(_id)} className={`btn disabled bg-slate-300 text-black`}>{vote}</button> : <button onClick={() => handleVote(_id)} className="btn btn-primary">{vote}</button>}</>}
        
        </div>
    );
};

export default BTn;