import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiFillLike } from "react-icons/ai";
import Contex from '../Authentication/Contex';
import Featured from '../Fatching-data/Featured';
import Alldata from '../Fatching-data/Alldata';


const BTn = ({ data, _id, vote }) => {
    const { user, loading } = Contex()
    const [, refetch] = Alldata()
    const [, refetch1] = Featured()
    const [voteData, setVoteData] = useState(vote)


    const [voteController,setVoteController] = useState(false)
    const navigate = useNavigate()
    const handleVote = (id) => {

        if (user) {
            setVoteData(voteData + 1)
            setVoteController(true)

            axios.put(`https://b9a12-server-side-safwan169.vercel.app/vote/${id}`, user)
                .then(res => {
                    refetch()
                    refetch1()
                    setVoteData(vote+1)


                })


        }
        else {
            navigate('/login')
        }
    }
        ;



    const dd = data?.find(d => d == user?.email)
    const handleVoteDelete = id => {
        setVoteData(voteData - 1)
        setVoteController(false)

        axios.put(`https://b9a12-server-side-safwan169.vercel.app/voteDec/${id}`, user)
            .then(res => {
                console.log(res.data)
                refetch()
                refetch1()
                // setVoteData(vote-1)
                setVoteData(vote-1)



            })
    }
    return (
        <div>
            {loading ? <span className="loading loading-ring loading-md"></span> : <>{voteController||dd ? <button onClick={() => handleVoteDelete(_id)} className={`btn disabled  text-black`}> <span className=' text-blue-500'><AiFillLike size={25} />
            </span> {voteData}</button> : <button onClick={() => handleVote(_id)} className="btn "> <span className='text-gray-400'><AiFillLike size={25} /></span> {voteData}</button>}</>}

        </div>
    );
};

export default BTn;