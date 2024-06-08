import React from 'react';
import BTn from './BTn';

const Products = ({ dataa }) => {
    const { description, date, externalLinks, productImage, productName, vote, tags, _id, voteUser, photoURL, displayName, email } = dataa

const des=description.slice(0,35)
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={productImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>{des}</p>
                    <div className="card-actions justify-end">
                        <BTn vote={vote} _id={_id} data={voteUser}></BTn>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;