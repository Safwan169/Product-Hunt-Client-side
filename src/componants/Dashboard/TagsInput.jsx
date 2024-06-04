import React, { useState } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const TagsInput = () => {
  const [tags, setTags] = useState([]);

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  console.log(tags)

  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTags(newTags);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-6">
      <ReactTags
        tags={tags}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        inputFieldPosition="inline"
        autocomplete
        classNames={{
          tags: 'flex flex-wrap border border-gray-300 rounded p-2',
          tagInput: 'inline-block',
          tagInputField: 'outline-none border-none focus:ring-0 focus:border-transparent',
          selected: 'flex flex-wrap',
          tag: 'bg-blue-500 text-white rounded px-2 py-1 m-1 flex items-center',
          remove: 'ml-2 cursor-pointer',
        }}
      />
    </div>
  );
};

export default TagsInput;
