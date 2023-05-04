import React, { useState, useRef } from "react";
import { BsDashLg } from "react-icons/bs";
import "react-calendar/dist/Calendar.css";
import { useEffect } from "react";
import axios from "axios";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//ICONS
import { BsArrowUpRightSquare } from "react-icons/bs";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
import tagPrice from "../../Assets/tag-price.png";
import square from "../../Assets/square.png";
import year from "../../Assets/year.png";
import status from "../../Assets/status.png";
import contract from "../../Assets/contract.png";
import house from "../../Assets/house.png";
import appointment from "../../Assets/appointment.png";
import userImage from "../../Assets/user.jpg";
import phone from "../../Assets/phone.png";
import location from "../../Assets/location.png";

function Schedule({ user }) {
  const [scheduleData, setScheduleData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [expendedIndex, setExpendedIndex] = useState(-1);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/schedule/scheduleList/`)
      .then((res) => {
        setScheduleData(res.data.schedulePlan);
        setDataLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const devEl = useRef();

  useEffect(() => {
    const elementClicked = (event) => {
      if (!devEl.current.contains(event.target)) {
        setExpendedIndex(-1);
      }
    };

    document.addEventListener("click", elementClicked, true);

    return () => {
      document.removeEventListener("click", elementClicked);
    };
  }, []);

  if (dataLoading) {
    return <div>Scheduling listing....</div>;
  }

  const thisAgentSchedule = scheduleData
    .map((house) => house)
    .filter((thisAgentOnly) => {
      return thisAgentOnly.agentID._id === user._id;
    });

  if (!thisAgentSchedule) {
    return <div>un-found data.....</div>;
  }

  console.log(thisAgentSchedule);
  const scheduleList = thisAgentSchedule?.map((data, index) => {
    const isExpended = index === expendedIndex;
    const content = isExpended && data;
    //MAPING TO GET ONLY ONE IMAGE AT A TIME
    const images = data.propertyID.images.map((image) => {
      return <img src={image.url} alt="" key={image.url} />;
    });
    return (
      <div className="mt-8" key={data._id}>
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setExpendedIndex(index)}
        >
          <h2 className="font-bold">3 CENTERAL AVE, MAYLANDS WA 6105</h2>
          <button className="border-2 border-black px-4 py-1 bg-amber-400 text-cyan-900 rounded-lg">
            Ready to {data?.propertyID?.contract}
          </button>
        </div>
        {content && (
          <div className="border-2 border-cyan-900  px-6 py-4 ">
            <p className="text-amber-400 font-bold tracking-wide">
              Incoming request
            </p>
            {/**PROPERTY SHOW-CASING */}
            <div className="mt-4">
              <div className="flex items-center">
                <p className="flex items-center mr-4">
                  <MdBedroomParent className="mr-2" size={23} />{" "}
                  <span>Bedrooms</span>
                </p>
                <p className="flex items-center mr-4 ">
                  <MdOutlineBathroom className="mr-2" size={23} />{" "}
                  <span>Baths</span>
                </p>
                <p className="flex items-center  mr-4">
                  <GiHomeGarage className="mr-2" size={23} /> <span>Parks</span>
                </p>
                <p className="flex items-center mr-4 ">
                  <BsArrowUpRightSquare className="mr-2" size={23} />
                  <span>{data?.propertyID?.squareFT}sqft</span>
                </p>
              </div>
              <div className="flex items-center  ">
                <div>
                  <Carousel
                    width={230}
                    showThumbs={false}
                    className="mt-10"
                    infiniteLoop={true}
                    autoPlay
                  >
                    {images}
                  </Carousel>
                </div>
                <div className="ml-10">
                  <h1 className="font-bold text-2xl">Hargeisa-Jigjigayar</h1>
                  <p>
                    Lorem ipsu, dolor sit amet consectetur adipisicing elit.
                    Incidunt, harum vitae labore dignissimos possimus laboriosam
                    tempora esse quam in, consectetur accusantium assumenda
                    saepe cum, culpa necessitatibus recusandae similique ex vel.
                  </p>
                  <div className="mt-4">
                    <section className="flex items-center">
                      <div>
                        <span className="flex justify-between items-center text-lg mr-24 ">
                          <img
                            src={tagPrice}
                            width={20}
                            alt=""
                            className="mr-2"
                          />{" "}
                          Price
                        </span>
                        <p className="text-lg ml-1 mt-1 ">$4500</p>
                      </div>
                      <div>
                        <span className="flex items-center text-lg mr-32  ">
                          <img src={house} width={20} alt="" className="mr-2" />{" "}
                          Villa
                        </span>
                        <p className="text-lg ml-1 mt-1 ">2300km</p>
                      </div>
                      <div>
                        <span className="flex items-center text-lg  ">
                          <img src={year} width={20} alt="" className="mr-2" />{" "}
                          Year-Built
                        </span>
                        <p className="text-lg ml-1 mt-1 ">2022</p>
                      </div>
                    </section>
                    {/**SECTION TWO */}
                    <section className="flex items-center mt-6 border-b-2 border-black pb-2">
                      <div>
                        <span className="flex justify-between items-center text-lg mr-20  ">
                          <img
                            src={status}
                            width={20}
                            alt=""
                            className="mr-2"
                          />{" "}
                          Status
                        </span>
                        <p className="text-lg ml-1 mt-1 ">Available</p>
                      </div>
                      <div>
                        <span className="flex items-center text-lg mr-20  ">
                          <img
                            src={square}
                            width={20}
                            alt=""
                            className="mr-2"
                          />{" "}
                          Square FT
                        </span>
                        <p className="text-lg ml-1 mt-1 ">2300km</p>
                      </div>
                      <div>
                        <span className="flex items-center text-lg  ">
                          <img
                            src={contract}
                            width={20}
                            alt=""
                            className="mr-2"
                          />{" "}
                          Contract
                        </span>
                        <p className="text-lg  ml-1 mt-1 ">Rent</p>
                      </div>
                    </section>
                    <div className="mt-2">
                      <p className="flex items-center font-bold text-xs italic">
                        <span>
                          <img
                            src={appointment}
                            width={25}
                            className="mr-2"
                            alt=""
                          />
                        </span>
                        Appointment
                      </p>
                      <button className=" border-2 border-black px-6 mt-2	cursor-text">
                        <span className="text-sm">2022-3-14</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/**USER SECTION */}
              <div className="border border-black px-4 py-6 w-96 mt-20">
                <p className="flex items-center justify-between">
                  <img
                    src={userImage}
                    alt=""
                    className="rounded-full object-scale-down h-20 border-black"
                  />
                  <button className="flex items-center px-2 py-2 rounded-md  hover:shadow-lg hover:shadow-black hover:transition hover:duration-700 hover:ease-in-out bg-amber-400 border-2 border-black">
                    <img src={phone} alt="" width={18} className=" mr-2" />
                    <span className="font-bold ">CONTACT THE USER</span>
                  </button>
                </p>

                <h1 className="font-bold text-lg mt-2">Abdule Yousuf</h1>
                <p className="mt-2 tracking-widest font-bold text-lg">
                  Location
                </p>
                <p className="flex items-center">
                  <img src={location} width={18} alt="" className="mr-2" />
                  Borama
                </p>
                <p className="mt-2 tracking-widest font-bold text-lg">Phone</p>
                <p className="flex items-center">
                  <img src={phone} alt="" width={18} className="mr-2 " />
                  +252633502241
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  });

  // console.log(thisAgentSchedule);

  return (
    <div className="h-full p-10">
      <div>
        <h2 className="flex gap-3 items-center text-amber-400 font-bold text-xl">
          <BsDashLg className="fill-current " style={{ strokeWidth: "3px" }} />
          Schedules
        </h2>
        {/**EXPENDED DROPDOWN SCHEDULE DESIGN */}
        <div ref={devEl}>{scheduleList}</div>

        {/* <Calendar className="mt-10" /> */}
      </div>
    </div>
  );
}

export default Schedule;
