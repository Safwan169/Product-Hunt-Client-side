import React from 'react';
import Contex from './Authentication/Contex';
import axios from 'axios';
import Alldata from './Alldata';

const BTn = ({data,voteBTn,_id,vote}) => {
    const {user,loading}=Contex()
    const [,refetch]=Alldata()
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
            {loading ? <span className="loading loading-ring loading-md"></span> :<>{dd?<button onClick={() => handleVoteDelete(_id)} className={`btn disabled bg-slate-300 text-black`}>{vote}</button> : <button onClick={() => voteBTn(_id)} className="btn btn-primary">{vote}</button>}</>}
        
        </div>
    );
};

export default BTn;