import React from "react";
import { useContext, useState } from "react";
import GeneralContext from "../Context/ContextApi";
import {BsDashLg} from 'react-icons/bs'

//IMAGES
import upload from "../Assets/upload.png";
import dollar from "../Assets/dollar.png";
import remove from "../Assets/remove.png";
import dropDown from "../Assets/down-arrow.png";
import plus from "../Assets/plus.png";
import minus from "../Assets/minus.png";
import fullHeadt from "../Assets/full-heart.png";
import half from "../Assets/heart.png";
import location from "../Assets/location2.png";

//COMPONENTS AND PAGES

const SubmitProperty = () => {
  const { setValues, handleSendData, values, handleImage, submiting } =
    useContext(GeneralContext);

  const [selectedBox, setSelectedBox] = useState("");

  //RENTAL TIME
  const handleCount = () => {
    if (values.count >= 12) {
      return;
    }
    setValues((prev) => ({ ...prev, count: Number(values.count) + 1 }));
  };

  const decrementCount = () => {
    if (values.count <= 1) {
      return (values.count += 1);
    }
    setValues((prev) => ({ ...prev, count: Number(values.count) - 1 }));
  };

  //DISCOUNT FUNCTION
  const handleDescount = () => {
    setValues((prev) => ({ ...prev, descount: Number(values.descount) + 1 }));
  };

  const decremenentDescount = () => {
    if (values.descount <= 0) {
      return;
    }
    setValues((prev) => ({ ...prev, descount: Number(values.descount) + 1 }));
  };

  //BEDROOMS
  const handleBedrooms = () => {
    setValues((prev) => ({ ...prev, bedrooms: Number(values.descount) + 1 }));
  };

  const decrementBedrooms = () => {
    if (values.bedrooms <= 0) {
      return;
    }
    setValues((prev) => ({ ...prev, bedrooms: Number(values.descount) + 1 }));
  };

  //BATHROOMS
  const handleBathroom = () => {
    setValues((prev) => ({ ...prev, bathroom: Number(values.descount) + 1 }));
  };

  const decremenetBathroom = () => {
    if (values.bathroom <= 0) {
      return;
    }
    setValues((prev) => ({ ...prev, bathroom: Number(values.descount) + 1 }));
  };

  const handleContractCheckbox = (event) => {
    setValues((prev) => ({ ...prev, contract: event.target.value }));
  };

  //HANDLE PREVIEW DELETE IMAGE
  const handlePreviewDelete = async (index) => {
    const newSelected = await values?.selectedFiles?.filter(
      (found, id) => id !== index
    );
    setValues((prev) => ({ ...prev, selectedFiles: newSelected }));
  };

  const data = values?.selectedFiles?.map((one, index) => {
    return (
      <div className="mr-2 relative">
        <img
          src={URL.createObjectURL(one)}
          id="blah"
          alt="prop-image"
          width={100}
          className={"rounded-xl aspect-video relative"}
        />
        <span className="absolute right-2  top-2 cursor-pointer" onClick={""}>
          <img
            src={remove}
            width={20}
            alt=""
            onClick={() => handlePreviewDelete(index)}
          />
        </span>
      </div>
    );
  });

  return (
    <div className="mt-10  ml-4 flex justify-between mr-20 ">
      
      {/**SECTION ONE  */}
      <div className="w-7/12 2xl:w-8/12 ">
      <h1 className='flex gap-3 items-center text-amber-400 font-bold text-xl'> <BsDashLg className="fill-current " style={{ strokeWidth: '3px' }}/>Submit Property </h1>
        
        {/**START HERE SECTION ONE  */}
        <div className="border border-#d6ccc2 px-4 py-4 mt-5">
          <h2 className="text-lg mb-4 font-uls">Property Information</h2>
          <label>
            Property Type{" "}
            <span className="font-uls text-red-600 font-bold">*</span>
          </label>
          <br />
          <input
            type="text"
            className="border-2 border-#d6ccc2 w-96 2xl:w-full px-2 py-2 focus:outline-none  text-start font-abc mt-2 rounded-md active:border-2 border-#d6ccc2"
            required
            value={values.propertyType}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, propertyType: e.target.value }))
            }
          />
          <br />
          <div className="mt-2 relative ">
            <label htmlFor="#" className="">
              Property Image
              <span className="font-uls text-red-600 font-bold">*</span>
            </label>
            <br />
            <label className="absolute right-0 top-10 cursor-pointer border-4 rounded-md border-#d3d3d3 border-dashed  px-4 py-2">
              Upload image
              <input
                type="file"
                className="hidden"
                multiple
                required
                onChange={handleImage}
              />
              <img src={upload} width={23} alt="" className="ml-8" />
            </label>
            <div className=" mt-4 flex items-center ">{data}</div>
          </div>
          {/**CONTINUEE HERE..... */}
          <div className="mt-4">
            <div className=" flex items-center  ">
              <div className="flex flex-col mr-20">
                <label>
                  Bedrooms{" "}
                  <span className="font-uls text-red-600 font-bold">*</span>
                </label>
                <div className="mt-2 rounded-md border-2 border-#d6ccc2 flex items-center w-48 px-2 relative ">
                  <img
                    src={plus}
                    alt=""
                    width={25}
                    className="py-4 pr-2 border-r-2 border-#d6ccc2  cursor-pointer"
                    onClick={handleBedrooms}
                  />
                  <input
                    type="number"
                    name=""
                    id=""
                    value={values.bedrooms}
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        bedrooms: Number(e.target.value),
                      }))
                    }
                    className=" w-28 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-outer-spin-button] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]  px-2 py-2 text-lg focus:outline-none font-uls mt-1 "
                    required
                  />

                  <img
                    src={minus}
                    alt=""
                    width={25}
                    className="py-4 pl-2 border-l-2 border-#d6ccc2 cursor-pointer"
                    onClick={decrementBedrooms}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label>
                  Bathrooms
                  <span className="font-uls text-red-600 font-bold">*</span>
                </label>
                <div className="mt-2 rounded-md border-2 border-#d6ccc2 flex items-center w-48 px-2 relative ">
                  <img
                    src={plus}
                    alt=""
                    width={25}
                    className="py-4 pr-2 border-r-2 border-#d6ccc2  cursor-pointer"
                    onClick={handleBathroom}
                  />
                  <input
                    type="number"
                    name=""
                    id=""
                    value={values.bathroom}
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        bathroom: Number(e.target.value),
                      }))
                    }
                    className=" w-28 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-outer-spin-button] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]  px-2 py-2 text-lg focus:outline-none font-uls mt-1 "
                    required
                  />

                  <img
                    src={minus}
                    alt=""
                    width={25}
                    className="py-4 pl-2 border-l-2 border-#d6ccc2 cursor-pointer"
                    onClick={decremenetBathroom}
                  />
                </div>
              </div>
            </div>
            {/**CONTINUEE HERE .... */}
            <div className="mt-4 flex items-center">
              <div className="flex flex-col mr-20">
                <label>
                  Year Built{" "}
                  <span className="font-uls text-red-600 font-bold">*</span>
                </label>
                <div className="mt-2 rounded-md border-2 border-#d6ccc2 flex items-center w-48 px-2 relative ">
                  <input
                    type="number"
                    name=""
                    id=""
                    value={values.yearBuilt}
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        yearBuilt: Number(e.target.value),
                      }))
                    }
                    placeholder="2021"
                    className=" w-28  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-outer-spin-button] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]  px-2 py-2 text-lg focus:outline-none font-uls mt-1 "
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col">
                  <label>SquareFT</label>
                  <div className="mt-2 rounded-md border-2 border-#d6ccc2 flex items-center w-48 px-2 relative ">
                    <input
                      type="number"
                      name=""
                      id=""
                      value={values.squareFT}
                      onChange={(e) =>
                        setValues((prev) => ({
                          ...prev,
                          squareFT: Number(e.target.value),
                        }))
                      }
                      placeholder="2,500"
                      className=" w-28  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-outer-spin-button] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]  px-2 py-2 text-lg focus:outline-none font-uls mt-1 "
                      required
                    />
                    <span className="font-uls text-lg text-sky-500">ft²</span>
                  </div>
                </div>
              </div>
            </div>
            {/**CONTINUEE HERE... */}
            <div className="mt-4">
              <h2>
                Contract{" "}
                <span className="font-uls font-bold text-red-600">*</span>
              </h2>
              <div className=" ">
                <div className="">
                  <input
                    type="checkbox"
                    name=""
                    id="rent"
                    value={"rent"}
                    checked={values.contract === "rent"}
                    onClick={handleContractCheckbox}
                    className="mr-4"
                  />
                  <label>For Rent</label>
                </div>
                <div className="">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="mr-4"
                    value={"sale"}
                    checked={values.contract === "sale"}
                    onClick={handleContractCheckbox}
                  />
                  <label>For Sale</label>
                </div>
              </div>
            </div>
          </div>
          {/**CONTINUEE ..... */}
          <div className="mt-4 border-t-4 border-#d3d3d3">
            <h1 className="mt-2 font-uls text-lg">Property Location</h1>
            <div className="flex flex-col">
              <label className="text-lg">
                City <span className="font-uls text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                className="border-2 border-#d6ccc2 w-96 px-2 py-2  text-start focus:outline-none font-abc mt-2 rounded-md active:border-2 border-#d6ccc2"
                required
                value={values.city}
                onChange={(e) =>
                  setValues((prev) => ({ ...prev, city: e.target.value }))
                }
              />
            </div>
            <div className="mt-2 flex items-center">
              <div className="mr-4">
                <label className="text-lg">
                  Property No{" "}
                  <span className="font-uls text-red-600 font-bold">*</span>
                </label>
                <input
                  type="text"
                  className="border-2 border-#d6ccc2 w-full px-2 py-2 focus:outline-none  text-start font-abc mt-2 rounded-md active:border-2 border-#d6ccc2"
                  required
                  onChange={(e) =>
                    setValues((prev) => ({
                      ...prev,
                      propertyNo: Number(e.target.value),
                    }))
                  }
                />
              </div>

              <div className="mr-4">
                <label className="text-lg">Zip Code</label>
                <input
                  type="text"
                  className="border-2 border-#d6ccc2 w-full px-2 py-2 focus:outline-none text-start font-abc mt-2 rounded-md active:border-2 border-#d6ccc2"
                  onChange={(e) =>
                    setValues((prev) => ({
                      ...prev,
                      zipCode: Number(e.target.value),
                    }))
                  }
                />
              </div>

              <div className="mr-4">
                <label className="text-lg">
                  Country{" "}
                  <span className="font-uls text-red-600 font-bold">*</span>
                </label>
                <input
                  type="text"
                  className="border-2 border-#d6ccc2 w-full px-2 py-2 focus:outline-none text-start font-abc mt-2 rounded-md active:border-2 border-#d6ccc2"
                  required
                  value={values.country}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, country: e.target.value }))
                  }
                />
              </div>
            </div>
            {/**CONTINUEE.. */}
            <div className="mt-4 border-t-4 border-#d6ccc2  mb-4">
              <h2 className="mt-4 font-uls text-lg">Price & Duration</h2>
              <div>
                <div className="mt-2">
                  <label className="text-lg">
                    Rental Costs{" "}
                    <span className="text-red-600 font-uls font-bold">*</span>
                  </label>
                  <div className="flex items-center border-2 border-#d6ccc2 py-2  rounded-md">
                    <h1>
                      <img src={dollar} alt="" width={28} className="mr-2" />
                    </h1>
                    <input
                      type="number"
                      className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-outer-spin-button] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]
                            w-full px-2 text-lg text-center active:border-white focus:outline-none text-start font-uls mt-1 rounded-md active:border-2 border-#d6ccc2"
                      required
                      value={values.price}
                      onChange={(e) =>
                        setValues((prev) => ({
                          ...prev,
                          price: Number(e.target.value),
                        }))
                      }
                    />

                    <select
                      className="focus:outline-none py-2 font-uls appearance-none px-4"
                      required
                    >
                      <option value="#">Per Month</option>
                      <option value="#">Per 2 month</option>
                      <option value="#">Per 3 month</option>
                      <option value="#">Per 4 month</option>
                      <option value="#">Per 5 month</option>
                      <option value="#">Per 6 month</option>
                      <option value="#">Per 7 month</option>
                      <option value="#">Per 8 month</option>
                      <option value="#">Per 9 month</option>
                      <option value="#">Per year</option>
                    </select>
                    <img
                      src={dropDown}
                      alt=""
                      width={40}
                      className="pr-4 cursor-pointer"
                    />
                  </div>
                  {/**OTHER ONE */}
                  <div className="flex items-center justify-between mt-2 ">
                    <div className="flex flex-col">
                      <label className="mt-2 text-lg">
                        Minimum rental time
                        <span className="  font-abc">(in months)</span>{" "}
                        <span className="font-uls text-red-600 font-bold">
                          *
                        </span>
                      </label>
                      <div className="rounded-md border-2 border-#d6ccc2 flex items-center w-48 px-2  ">
                        <img
                          src={plus}
                          alt=""
                          width={25}
                          className="py-4 pr-2 border-r-2 border-#d6ccc2  cursor-pointer"
                          onClick={handleCount}
                        />
                        <input
                          type="number"
                          name=""
                          id=""
                          value={values.contractTime}
                          onChange={(e) =>
                            setValues((prev) => ({
                              ...prev,
                              contractTime: Number(e.target.value),
                            }))
                          }
                          className="w-28 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-outer-spin-button] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]  px-2 py-2 text-lg focus:outline-none font-uls mt-1 "
                          required
                        />
                        <img
                          src={minus}
                          alt=""
                          width={25}
                          className="py-4 pl-2 border-l-2 border-#d6ccc2 cursor-pointer"
                          onClick={decrementCount}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col ">
                      <label className="mt-2 text-lg">Discount</label>
                      <div className="rounded-md border-2 border-#d6ccc2 flex items-center w-48 px-2 relative ">
                        <img
                          src={plus}
                          alt=""
                          width={25}
                          className="py-4 pr-2 border-r-2 border-#d6ccc2  cursor-pointer"
                          onClick={handleDescount}
                        />
                        <input
                          type="number"
                          name=""
                          id=""
                          value={values.descount}
                          onChange={(e) =>
                            setValues((prev) => ({
                              ...prev,
                              discount: Number(e.target.value),
                            }))
                          }
                          className=" w-28 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-outer-spin-button] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]  px-2 py-2 text-lg focus:outline-none font-uls mt-1 "
                        />
                        <label className="absolute right-16 text-lg ">%</label>
                        <img
                          src={minus}
                          alt=""
                          width={25}
                          className="py-4 pl-2 border-l-2 border-#d6ccc2 cursor-pointer"
                          onClick={decremenentDescount}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/**CONTINEE HERE.... */}
            <div className="mt-6 border-t-4 border-#d6ccc2 ">
              <h1 className="font-uls mt-4">Additional Information</h1>
              <div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-col ">
                    <label className="font-abc">
                      <input
                        type="checkbox"
                        className="mr-2"
                        onClick={() =>
                          setValues((prev) => ({
                            ...prev,
                            garage: !values.garage,
                          }))
                        }
                      />
                      Garage
                    </label>
                    <label className="font-abc">
                      <input
                        type="checkbox"
                        className="mr-2"
                        onClick={() =>
                          setValues((prev) => ({
                            ...prev,
                            balcony: !values.balcony,
                          }))
                        }
                      />
                      Balcony
                    </label>
                    <label className="font-abc">
                      <input
                        type="checkbox"
                        className="mr-2"
                        onClick={() =>
                          setValues((prev) => ({
                            ...prev,
                            fullyFurnished: !values.fullyFurnished,
                          }))
                        }
                      />
                      Fully-furnished
                    </label>
                    <label className="font-abc">
                      <input
                        type="checkbox"
                        className="mr-2"
                        onClick={() =>
                          setValues((prev) => ({
                            ...prev,
                            quiteSaroundings: !values.quiteSaroundings,
                          }))
                        }
                      />
                      Quite Saroundings
                    </label>
                  </div>

                  <div className="flex flex-col mr-20">
                    {" "}
                    <label className="font-abc">
                      <input
                        type="checkbox"
                        className="mr-2"
                        onClick={() =>
                          setValues((prev) => ({
                            ...prev,
                            homeSecurity: !values.homeSecurity,
                          }))
                        }
                      />
                      Home security
                    </label>
                    <label className="font-abc">
                      <input
                        type="checkbox"
                        className="mr-2"
                        onClick={() =>
                          setValues((prev) => ({
                            ...prev,
                            ACRooms: !values.ACrooms,
                          }))
                        }
                      />
                      A/C Rooms
                    </label>
                    <label className="font-abc">
                      <input
                        type="checkbox"
                        className="mr-2"
                        onClick={() =>
                          setValues((prev) => ({
                            ...prev,
                            oven: !values.oven,
                          }))
                        }
                      />
                      Oven
                    </label>
                    <label className="font-abc">
                      <input
                        type="checkbox"
                        className="mr-2"
                        onClick={() =>
                          setValues((prev) => ({
                            ...prev,
                            bathHub: !values.bathHub,
                          }))
                        }
                      />
                      Bat-Hub
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/**CONTINUEE... HERE */}
            <div className="mt-8 flex items-center justify-around">
              <button className="active:outline outline-offset-2 outline-red-500 border border-#d6ccc2 px-6 py-2 bg-red-600 rounded-md hover:bg-red-700 text-white">
                Cancel
              </button>
              <button
                className="active:outline outline-offset-2 outline-sky-500 border border-#d6ccc2 px-6 py-2 bg-sky-600 rounded-md hover:bg-sky-700 text-white"
                onClick={handleSendData}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      {/**SECTION TWO */}
      <div className="mt-10 w-96 ">
        {/**CARD CONTAINER */}
        <h1 className="font-uls font-bold text-2xl">Quick Preview</h1>
        <div className=" shadow-lg  mt-4 border-2 border-#d6ccc2  inline-block px-2 py-2 rounded-lg  relative">
          <img
            src={
              values?.selectedFiles[0]
                ? URL.createObjectURL(values.selectedFiles[0])
                : "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            alt="iamge card"
            className="aspect-video px-1 w-72 2xl:w-full  py-1 rounded-2xl "
          />
          <p className=" absolute top-6 left-6 bg-zinc-400 px-2 py-1 text-white rounded-md">
            For Rent
          </p>
          <h1 className="ml-2 relative font-uls font-bold mt-2 tracking-widest text-xl text-blue-800 ">
            {values.propertyType !== null
              ? values.propertyType
              : "Example-Building"}
          </h1>
          {values?.addFavorite ? (
            <span>
              <img
                src={fullHeadt}
                alt=""
                className="absolute top-44 2xl:top-56 right-6 cursor-pointer"
                width={27}
                onClick={() =>
                  setValues((prev) => ({
                    ...prev,
                    addFavorite: !values.addFavorite,
                  }))
                }
              />
            </span>
          ) : (
            <span>
              <img
                src={half}
                alt=""
                className="absolute top-44 2xl:top-56 right-6 cursor-pointer"
                width={27}
                onClick={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    addFavorite: !values?.addFavorite,
                  }))
                }
              />
            </span>
          )}

          <p className="ml-2 font-bold font-uls tracking-wide text-base">
            {values.country !== null ? values.country : "Example-Somalia"}
          </p>
          <p className="flex items-center  font-bold ml-2  mb-2">
            <img src={location} width={17} alt="" className="mr-2" />{" "}
            {values.city !== null ? values.city : "Example-Mogadisho"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubmitProperty;
