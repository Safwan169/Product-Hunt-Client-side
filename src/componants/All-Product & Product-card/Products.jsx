import React from 'react';
import { Link } from 'react-router-dom';
import { FaShareFromSquare } from 'react-icons/fa6';
import BTn from '../All-Shared/BTn';

const Products = ({ dataa }) => {
    const { description, date, externalLinks, productImage, productName, vote, tags, _id, voteUser, photoURL, displayName, email } = dataa

    const des = description.slice(0, 35)
    const Datee=new Date(date).toLocaleString()
    return (
        <div>
            <div className="card card-compact w-96 mt-28 bg-base-100 shadow-xl">
                <figure><img className='w-[200px]  h-[200px]' src={productImage} alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title"><Link to={`/details/${_id}`}>{productName}</Link> <span><a href={`${externalLinks}`}><FaShareFromSquare className='hover:text-orange-400' /></a></span> </h2>
                <p>{des}....</p>
                    <div className='w-max flex gap-5'>
                        {tags.map(d => <p className=''># <span className='font-bold text-purple-500'>{d.text}</span></p>

                        )}
                    </div>
                    <p>{Datee}</p>
                    <div className="card-actions justify-end">
                        <BTn vote={vote} _id={_id} data={voteUser}></BTn>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;