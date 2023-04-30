import React, { useState } from "react";
import {BsDashLg} from 'react-icons/bs'
import Amenities from "./User/Amenities";

function CreateProperty() {

  return (
    <div className='h-full p-10'>
      <div className="">
        <h2 className='flex gap-3 items-center text-amber-400 font-bold text-xl'> <BsDashLg className="fill-current " style={{ strokeWidth: '3px' }}/>Submit New Property</h2>
          <form className="mt-10">
            <div className="flex justify-around w-30 mb-2">
              <label htmlFor="title" className="text-gray-500 mb-2 flex flex-col items-center font-semibold">
                Title
                <input
                type="text"
                name="title"
                className="border rounded-lg py-1 outline-none font-normal"
              />
              </label>

              <label htmlFor="price" className="text-gray-500 mb-2 flex flex-col items-center font-semibold">
              Price (in USD)
              <input
                  type="number"
                  name="price"
                  className="border rounded-lg px-3 py-1 outline-none font-normal"
              />
              </label>
              

              <label htmlFor="location" className="mb-2 text-gray-500 flex flex-col items-center font-semibold">
                Location
                <input
                type="text"
                name="location"
                className="border rounded-lg px-3 py-1 outline-none font-normal"
              />
                </label>
            </div >

            <div className="flex justify-around w-30 mb-2">
              <label htmlFor="bedrooms" className="mb-2 text-gray-500 flex flex-col items-center font-semibold">
                Number of Bedrooms
                  <input
                    type="number"
                    name="bedrooms"
                    className="border rounded-lg px-3 py-1  outline-none font-normal"
                  />
              </label>

              <label htmlFor="bedrooms" className="mb-2 text-gray-500 flex flex-col items-center font-semibold">
                Number of Bathrooms
                  <input
                    type="number"
                    name="bathrooms"
                    className="border rounded-lg px-3 py-1  outline-none font-normal"
                  />
              </label>

              <label htmlFor="bedrooms" className="mb-2 text-gray-500 flex flex-col items-center font-semibold">
                Number of Balconies
                  <input
                    type="number"
                    name="balcony"
                    className="border rounded-lg px-3 py-1  outline-none font-normal"
                  />
              </label>
            </div>

            <div className="flex justify-around w-30 mb-5">
              <label htmlFor="size" className="mb-2 text-gray-500 flex flex-col items-center font-semibold">
                Square Footage
                <input
                  type="number"
                  name="size"
                  className="border rounded-lg px-3 py-1  outline-none font-normal"
                />
              </label>

              <label htmlFor="referenceNumber" className="mb-2 text-gray-500 flex flex-col items-center font-semibold">
                Reference Number
                <input
                  type="number"
                  name="referenceNumber"
                  className="border rounded-lg px-3 py-1  outline-none font-normal"
                />
              </label>

              <label htmlFor="size" className="mb-2 text-gray-500 flex flex-col items-center font-semibold">
                Year Built
                <input
                  type="date"
                  name="yearBuilt"
                  className="border rounded-lg px-3 py-1 outline-none font-normal"
                />
              </label>
            </div>

            <div className="flex justify-around mb-5">
              <label className="mb-2 text-gray-500 flex items-center gap-3 font-semibold">
                Property Type: 
                <select name="propertyType" className="outline-none text-black font-normal rounded-lg border ">
                  <option value="" disabled selected>Select One</option>
                  <option value="Villa">Villa</option>
                  <option value="Apartment">Apartment </option>
                  <option value="Commercial">Commercial</option>
                  <option value="Duplex">Duplex</option>
                  <option value="Mansion">Mansion</option>
                  <option value="Bungalow">Bungalow </option>
                </select>
              </label>

              <label className="mb-2 text-gray-500 flex items-center gap-3 font-semibold">
                Status: 
                <select name="status" className="outline-none text-black font-normal rounded-lg border">
                  <option value="" disabled selected>Select One</option>
                  <option value="For Sale">For Sale</option>
                  <option value="For Rent">For Rent</option>
                </select>
              </label>
            </div>

            <Amenities/>
  
            <div className="flex justify-around gap-28 mt-12 ">
              <label htmlFor="description" className="mb-2 text-gray-500 flex flex-col font-semibold items-center">
                Description
                <textarea
                  name="description"
                  className="border-b-2 border-slate-300 h-20 outline-none w-80 justify-center text-black font-normal"
                />
              </label>

              <input
              name="images"
              type="file"
              className="cursor-pointer text-gray-500 font-semibold m-auto"
              multiple
              />
            </div>
  
            <div className="text-right mt-5">
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
