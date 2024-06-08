import { FaShareFromSquare } from 'react-icons/fa6';
import { useLoaderData, useParams } from 'react-router-dom';
import BTn from './BTn';
import Alldata from './Alldata';
import { data } from 'autoprefixer';
import axios from 'axios';
import { useState } from 'react';

const Details = () => {
    // const data = useLoaderData()
    // const [dep,setDet]=useState('false')
    const id = useParams().id
    const [cart, refetch, isLoading] = Alldata()

    // useEffect(()=>{fetch(`http://localhost:5000/alldata/${id}`
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    // ),[dep]})
    // const [productNames, setProductName] = useState('');

    const dd = axios.get(`http://localhost:5000/alldata`).data



    // console.log('sf',cart)
    const detailsData = cart?.find(d => d._id == id)
    console.log(detailsData)




    const { description, date, externalLinks, productImage, productName, vote, tags, _id, voteUser, photoURL, displayName, email } = detailsData



    const Datee = new Date(date).toLocaleString()
    return (
        <div className='z-10'>
            <div className="card z-10 mx-5 my-5 px-3
         card-side bg-base-100 shadow-xl">
                <figure><img className='w-full h-[400px]' src={productImage} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}<span><a href={`${externalLinks}`}><FaShareFromSquare className='hover:text-orange-400' /></a></span> </h2>
                    <p>{description}</p>
                    <div className='w-max flex gap-5'>
                        {tags.map(d => <p className=''># <span className='font-bold text-purple-500'>{d.text}</span></p>

                        )}
                    </div>
                    <p>{Datee}</p>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Product Owner Info</label>
                        <div className="mt-1">
                            <div className="flex items-center space-x-4">
                                <img src={photoURL} alt="Owner" className="w-10 h-10 rounded-full" />
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{displayName}</p>
                                    <p className="text-sm text-gray-500">{email}</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card-actions justify-end">
                        <BTn vote={vote} _id={_id} data={voteUser}></BTn>

                    </div>
                </div>

            </div>
        </div>
        // <div></div>
    );
};

export default Details;