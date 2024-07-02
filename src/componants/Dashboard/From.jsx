import React, { useState,  } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import Contex from '../Authentication/Contex';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Navigate, useNavigate } from 'react-router-dom';
import AddorNot from './AddorNot';

const From = () => {
    const navigate =useNavigate()
    const { user } = Contex()
    const [,refetchYesOrNot]=AddorNot()

    console.log(user.displayName)
    const {displayName,email,photoURL}=user
    // const { ownerName, ownerImage, ownerEmail } = useContext(ProductOwnerContext);
  
    const [productName, setProductName] = useState('');
    const [productImage, setProductImage] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState([]);
    const [externalLinks, setExternalLinks] = useState('');
  
    const handleDelete = (i) => {
      setTags(tags.filter((tag, index) => index !== i));
    };
  
    const handleAddition = (tag) => {
      setTags([...tags, tag]);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const date=Date.now()
      const vote= 0
      const status='pending'
      // Handle form submission logic here
      const data={
        productName,
        productImage,
        description,
        tags,
        externalLinks,
        displayName,
        photoURL,
        email,
        vote,
        status,
        date
        
      }
      console.log((new Date(date)).toLocaleString())
      // console.log(date)
  
        axios.post('https://b9a12-server-side-safwan169.vercel.app/add',data)
        .then(res=>{
          // console.log(res.data.insertedId)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            setProductName('')
            setProductImage('')
            setDescription('')
            setTags([])
            setExternalLinks('')
            navigate('/dashboard/myproducts')
            refetchYesOrNot()
            
  
  
  
          }
  
          
        })
        
  
    };
    return (
        <div className="max-w-lg mx-auto p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Product Name</label>
                    <input
                        type="text"
                        required
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Product Image</label>
                    <input
                        type="url"
                        required
                        value={productImage}
                        onChange={(e) => setProductImage(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Tags(After Confirm please enter for add tag)</label>
                    <ReactTags
                        tags={tags}
                        handleDelete={handleDelete}
                        handleAddition={handleAddition}
                        inputFieldPosition="bottom"
                        autocomplete
                        classNames={{
                            tags: 'tagsClass',
                            tagInput: 'tagInputClass',
                            tagInputField: 'tagInputFieldClass',
                            selected: 'selectedClass',
                            tag: 'tagClass',
                            remove: 'removeClass',
                            suggestions: 'suggestionsClass',
                            activeSuggestion: 'activeSuggestionClass'
                        }}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">External Links</label>
                    <input
                        type="url"
                        value={externalLinks}
                        onChange={(e) => setExternalLinks(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

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

                <div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default From;