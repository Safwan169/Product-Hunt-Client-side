import { data } from 'autoprefixer';
import React, { useState } from 'react';
import Contex from './Authentication/Contex';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alldata from './Alldata';
import BTn from './BTn';
import { FaShareFromSquare } from 'react-icons/fa6';


const Feretured = ({ data }) => {

    // const [, refetch] = Alldata()
    const { description, date, externalLinks, productImage, productName, vote, tags, _id, voteUser } = data
    const { user } = Contex()

    console.log(tags)
    const Datee = ((new Date(date)).toLocaleString())
    // console.log(new Date(date))
    // console.log(voteUser)

    // console.log(date, Datee)

    

 
 const dd= description.slice(0,35)

  


    return (
        <div>
            <div className="card mx-5 my-5 px-3
             card-side bg-base-100 shadow-xl">
                <figure><img className='w-20' src={productImage} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><Link to={`/details/${_id}`}>{productName}</Link> <span><a href={`${externalLinks}`}><FaShareFromSquare className='hover:text-orange-400' /></a></span> </h2>
                    <p>{dd}........</p>
                    <div className='w-max flex gap-5'>
                        {tags.map(d => <p className=''># <span className='font-bold text-purple-500'>{d.text}</span></p>

                        )}
                    </div>
                    <p>{Datee}</p>

                    <div className="card-actions justify-end">
                        <BTn vote={vote}  _id={_id} data={voteUser}></BTn>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feretured;