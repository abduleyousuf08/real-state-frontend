import React, { useState } from "react";
import {BsDashLg} from 'react-icons/bs'

function CreateProperty() {
  const [propertyData, setPropertyData] = useState({
    title: '',
    description: '',
    price: 0,
    location: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();


  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPropertyData({ ...propertyData, [name]: value });
  };

  return (
    <div>
      <div className="p-4">
      <h2 className='flex gap-3 items-center text-amber-400 font-bold text-xl'> <BsDashLg className="fill-current " style={{ strokeWidth: '3px' }}/>Submit New Property</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={propertyData.title}
              onChange={handleInputChange}
              className="border rounded-lg px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-medium mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={propertyData.description}
              onChange={handleInputChange}
              className="border rounded-lg px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block font-medium mb-2">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={propertyData.price}
              onChange={handleInputChange}
              className="border rounded-lg px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block font-medium mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={propertyData.location}
              onChange={handleInputChange}
              className="border rounded-lg px-3 py-2 w-full"
              required
            />
          </div>
          <div className="text-right">
            <button type="submit" className="  border border-amber-400 justify-center font-bold text-amber-400 hover:bg-amber-400 hover:text-white px-4 py-2 rounded-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateProperty;
