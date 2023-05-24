import React from "react";
import { useState } from "react";

//IMAGES
import upload from "../Assets/upload.png";
import dollar from "../Assets/dollar.png";
import remove from "../Assets/remove.png";
import dropDown from "../Assets/down-arrow.png";
import plus from "../Assets/plus.png";
import minus from "../Assets/minus.png";

//COMPONENTS AND PAGES

const SubmitProperty = () => {
  const [count, setCount] = useState(1);
  const [descount, setDescount] = useState(0);

  //RENTAL TIME
  const handleCount = () => {
    if (count > 12) {
      return setCount(1);
    }
    setCount(parseInt(count) + 1);
  };

  const decrementCount = () => {
    if (count <= 1) {
      return (count += 1);
    }
    setCount(parseInt(count) - 1);
  };

  //DISCOUNT FUNCTION

  const handleDescount = () => {
    setDescount(parseInt(descount) + 1);
  };

  const decremenentDescount = () => {
    if (descount <= 0) {
      return;
    }
    setDescount(parseInt(descount) - 1);
  };

  const images = [
    "https://images.pexels.com/photos/2104151/pexels-photo-2104151.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ,
  ];

  const data = images.map((one) => {
    return (
      <div className="mr-2">
        <img
          src={one}
          alt="prop-image"
          width={120}
          className={"rounded-xl aspect-video relative"}
        />
        <span className="absolute top-2 right-4 cursor-pointer">
          <img src={remove} width={20} alt="" />
        </span>
      </div>
    );
  });

  return (
    <div className="mt-10  ml-4 flex  items-center   ">
      {/**SECTION ONE  */}
      <div className="w-full">
        <h1 className="text-2xl font-ulHeader">About Properties</h1>
        {/**START HERE SECTION ONE  */}
        <div className="border border-black px-4 py-4 ">
          <h2 className="text-lg mb-4 font-uls">Property Information</h2>
          <label htmlFor="#" className="text-base">
            Property Type <span>*</span>
          </label>
          <br />
          <input
            type="text"
            className="border-2 border-#d6ccc2 w-full px-2 py-2 focus:outline-none  text-start font-abc mt-2 rounded-md active:border-2 border-#d6ccc2"
          />
          <br />
          <div className="mt-2 relative ">
            <label htmlFor="#" className="">
              Property Image <span>*</span>
            </label>
            <br />
            <label className="absolute right-0 top-10 cursor-pointer border-4 rounded-md border-#d3d3d3 border-dashed  px-4 py-2">
              Upload image
              <input type="file" name="" id="" className="hidden" multiple />
              <img src={upload} width={23} alt="" className="ml-8" />
            </label>
            <div className="absolute top-12 flex items-center ">{data}</div>
          </div>
          {/**CONTINUEE ..... */}
          <div className="mt-32 border-t-2 border-#d3d3d3">
            <h1 className="mt-2 font-uls text-lg">Property Location</h1>
            <label className="text-lg">
              City <span>*</span>
            </label>
            <input
              type="text"
              className="border-2 border-#d6ccc2 w-full px-2 py-2  text-start focus:outline-none font-abc mt-2 rounded-md active:border-2 border-#d6ccc2"
            />
            <div className="mt-2 flex items-center">
              <div className="mr-4">
                <label className="text-lg">Property No</label>
                <input
                  type="text"
                  className="border-2 border-#d6ccc2 w-full px-2 py-2 focus:outline-none  text-start font-abc mt-2 rounded-md active:border-2 border-#d6ccc2"
                />
              </div>

              <div className="mr-4">
                <label className="text-lg">Zip Code</label>
                <input
                  type="text"
                  className="border-2 border-#d6ccc2 w-full px-2 py-2 focus:outline-none text-start font-abc mt-2 rounded-md active:border-2 border-#d6ccc2"
                />
              </div>

              <div className="mr-4">
                <label className="text-lg">Country</label>
                <input
                  type="text"
                  className="border-2 border-#d6ccc2 w-full px-2 py-2 focus:outline-none text-start font-abc mt-2 rounded-md active:border-2 border-#d6ccc2"
                />
              </div>
            </div>
            {/**CONTINUEE.. */}
            <div className="mt-4 border-t-2 border-#d6ccc2  mb-4">
              <h2 className="mt-4 font-uls text-lg">Price & Duration</h2>
              <div>
                <div className="mt-2">
                  <label className="text-lg">
                    Rental Costs <span>*</span>
                  </label>
                  <div className="flex items-center border-2 border-#d6ccc2 py-2  rounded-md">
                    <h1>
                      <img src={dollar} alt="" width={28} className="mr-2" />
                    </h1>
                    <input
                      type="number"
                      className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-outer-spin-button] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]
                            w-full px-2 text-lg text-center active:border-white focus:outline-none text-start font-uls mt-1 rounded-md active:border-2 border-#d6ccc2"
                    />

                    <select className="focus:outline-none py-2 font-uls appearance-none px-4">
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
                        Minimum rental time{" "}
                        <span className="  font-abc">(in months)</span>*
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
                          value={count}
                          onChange={(e) => setCount(e.target.value)}
                          className="w-28 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-outer-spin-button] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]  px-2 py-2 text-lg focus:outline-none font-uls mt-1 "
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
                          value={descount}
                          onChange={(e) => setDescount(e.target.value)}
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
            <div className="mt-6 border-t-2 border-#d6ccc2 ">
              <h1 className="font-uls mt-4">Additional Information</h1>
              <div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-col ">
                    <label className="font-abc">
                      <input type="checkbox" className="mr-2" />
                      Garage
                    </label>
                    <label className="font-abc">
                      <input type="checkbox" className="mr-2" />
                      Balcony
                    </label>
                    <label className="font-abc">
                      <input type="checkbox" className="mr-2" />
                      Fully-furnished
                    </label>
                    <label className="font-abc">
                      <input type="checkbox" className="mr-2" />
                      Quite Saroundings
                    </label>
                  </div>

                  <div className="flex flex-col mr-20">
                    {" "}
                    <label className="font-abc">
                      <input type="checkbox" className="mr-2" />
                      Home security
                    </label>
                    <label className="font-abc">
                      <input type="checkbox" className="mr-2" />
                      A/C Rooms
                    </label>
                    <label className="font-abc">
                      <input type="checkbox" className="mr-2" />
                      Oven
                    </label>
                    <label className="font-abc">
                      <input type="checkbox" className="mr-2" />
                      Bat-Hub
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**SECTION TWO */}
      <div className="w-full ml-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        repudiandae accusamus eos vel deserunt officia ut consequatur dicta
        molestiae porro. Error nemo tenetur at deleniti nesciunt, laborum modi
        fugit ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Nemo velit illum sequi reprehenderit, sunt pariatur tempora quo vitae
        doloremque error, corrupti quidem consequuntur et vero rem. Commodi,
        molestiae. Sit, maiores.
      </div>
    </div>
  );
};

export default SubmitProperty;
