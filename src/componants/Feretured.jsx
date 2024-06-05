import { data } from 'autoprefixer';
import React from 'react';

const Feretured = ({ data }) => {
    const { description,date, externalLinks, productImage, productName, vote, tags } = data
    console.log(tags)
const Datee = ((new Date(date)).toLocaleString())
      console.log(new Date(date))

console.log(date,Datee)

    return (
        <div>
            <div className="card mx-5 my-5 px-3
             card-side bg-base-100 shadow-xl">
                <figure><img className='w-20' src={productImage} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>{description}</p>
                    <div className='w-max flex gap-5'>
                    {tags.map(d=> <p className=''># <span className='font-bold text-purple-500'>{d.text}</span></p>
                        
                    )}
                    </div>
                    <p>{Datee}</p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">{vote}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feretured;