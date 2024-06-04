// import React from 'react';
// import TagsInput from './TagsInput';


import React, { useState, useContext } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import Contex from '../Authentication/Contex';

// Mock context for Product Owner Info (replace with actual context if available)

const Addproducts = () => {

  const { user } = Contex()
  console.log(user.displayName)
  const {displayName,email,photoURL}=user
  // const { ownerName, ownerImage, ownerEmail } = useContext(ProductOwnerContext);

  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState('');
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [externalLinks, setExternalLinks] = useState("");

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      productName,
      productImage,
      description,
      tags,
      externalLinks,
      displayName,
      photoURL,
      email,
    });

      

  };
  return (
    // <div>


    //     <form class="max-w-md mx-auto">
    //         <div class="relative z-0 w-full mb-5 group">
    //             <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    //             <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
    //         </div>
    //         <div class="relative z-0 w-full mb-5 group">
    //             <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    //             <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
    //         </div>
    //         <div class="relative z-0 w-full mb-5 group">
    //             <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    //             <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
    //         </div>
    //        <TagsInput>sdfda</TagsInput>

    //         <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    //     </form>

    // </div>



    // src/ProductForm.js







    <>
      <div>
        <p className='text-center font-bold text-2xl underline '>Add Product Page
        </p>

      </div>
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

    </>
  );
};



export default Addproducts;