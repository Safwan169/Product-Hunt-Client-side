import { data } from 'autoprefixer';
import React from 'react';
import Contex from './Authentication/Contex';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alldata from './Alldata';


const Feretured = ({ data }) => {
    const [,refetch]=Alldata()
    const { description, date, externalLinks, productImage, productName, vote, tags, _id } = data
    console.log(tags)
    const Datee = ((new Date(date)).toLocaleString())
    console.log(new Date(date))

    console.log(date, Datee)
    const { user, loading } = Contex()
    const navigate = useNavigate()
    const handleVote = (id) => {

        if (user) {

            axios.put(`http://localhost:5000/vote/${id}`)
                .then(res => {
                    console.log(res.data)
                    refetch()

                })


        }
        else {
            navigate('/login')
        }
    }

    return (
        <div>
            <div className="card mx-5 my-5 px-3
             card-side bg-base-100 shadow-xl">
                <figure><img className='w-20' src={productImage} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>{description}</p>
                    <div className='w-max flex gap-5'>
                        {tags.map(d => <p className=''># <span className='font-bold text-purple-500'>{d.text}</span></p>

                        )}
                    </div>
                    <p>{Datee}</p>

                    <div className="card-actions justify-end">
                        {loading ? <span className="loading loading-ring loading-md"></span> : <button onClick={() => handleVote(_id)} className="btn btn-primary">{vote}</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feretured;