import React from "react";
import { useState, useRef } from "react";
import { BsDashLg } from "react-icons/bs";
import "react-calendar/dist/Calendar.css";
import { useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

//IMAGES
import agentImage from "../../images/edited-images/agent.png";
import userImage from "../../Assets/user.jpg";
import userImage2 from "../../Assets/IMG_4627.jpg";
//ICONS
// import { BsArrowUpRightSquare } from "react-icons/bs";
// import { MdBedroomParent } from "react-icons/md";
// import { MdOutlineBathroom } from "react-icons/md";
// import { GiHomeGarage } from "react-icons/gi";
// import tagPrice from "../../Assets/tag-price.png";
// import square from "../../Assets/square.png";
// import year from "../../Assets/year.png";
// import status from "../../Assets/status.png";
// import contract from "../../Assets/contract.png";
// import house from "../../Assets/house.png";
// import appointment from "../../Assets/appointment.png";

// import phone from "../../Assets/phone.png";
import location from "../../Assets/location.png";
import link from "../../Assets/link.png";
import call from "../../Assets/call.png";
import mail from "../../Assets/mail.png";
import date from "../../Assets/date.png";

///
////
function Schedule({ user }) {
  const [scheduleData, setScheduleData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [expendedIndex, setExpendedIndex] = useState(-1);
  const [message, setMessage] = useState(false);

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
  const picEl = useRef();

  useEffect(() => {
    const elementClicked = (event) => {
      if (!devEl.current.contains(event.target)) {
        setExpendedIndex(-1);
        console.log(event.target);
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
    return <div>un found data.....</div>;
  }

  //

  const scheduleList = thisAgentSchedule?.map((data, index) => {
    const isExpended = index === expendedIndex;
    const content = isExpended && data;
    //MAPING TO GET ONLY ONE IMAGE AT A TIME
    const images = data?.propertyID?.images.map((image) => {
      return (
        <img
          className=" h-52 2xl:h-96 aspect-video"
          alt="property"
          src={image.url}
          // src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      );
    });

    return (
      <div>
        <div
          className={
            content
              ? "hidden"
              : `mt-10 border border-#d6ccc2 shadow-2xl w-80 px-4 py-2 bg-cyan-900 rounded-lg cursor-pointer `
          }
          onClick={() => {
            setExpendedIndex(index);
          }}
        >
          {/* <div className="absolute top-24 right-auto ml-72 bg-red-600 border border-black rounded-full px-2 w-6 aspect-square ">
            <span className="font-bold text-white">{null}</span>
          </div> */}

          {/* )} */}
          <div className="flex items-center ">
            <img
              src={data.clientID?.image?.url}
              width={64}
              alt=""
              className="rounded-full border-2 border-amber-400 px-1 py-1  object-center  aspect-square "
            />
            <div>
              <h3 className="font-bold text-white pl-4 ">
                {data?.clientID?.name}
              </h3>
              <p className=" text-white pl-4 flex items-center mt-1">
                <img src={location} width={20} alt="" className="mr-2" /> Borama
              </p>
              <p className=" text-white pl-4 flex items-center mt-2">
                <img src={link} width={20} alt="" className="mr-2" /> Ref-No :
                {data?.propertyID?.refrenceNo}
              </p>
            </div>
          </div>
        </div>
        {/**END */}
        {content && (
          <div className="mt-10 border border-black flex items-center py-6 px-2  relative ">
            <Link to={`/info/${data.propertyID._id}`}>
              <button className="absolute top-4 right-2 border border-#d6ccc2 shadow-xl    px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700  text-white ">
                Go Check
              </button>
            </Link>
            {/** PART ONE  */}
            <div className=" border border-black px-8 py-4  ml-2  w-64 rounded-md    h-96 bg-cyan-900">
              <img
                src={data?.clientID?.image?.url}
                alt=""
                width={64}
                className="rounded-full border-2 border-amber-400 px-1 py-1 object-center  aspect-square"
              />

              <h1 className="font-bold text-white pl-2 mt-4 tracking-widest ">
                {data?.clientID?.name}
              </h1>
              <p className=" text-white pl-2 flex items-center mt-6">
                <img src={location} width={20} alt="" className="mr-2" />
                <span> Borama</span>
              </p>
              <p className=" text-white pl-2 flex items-center mt-6">
                <img src={link} width={20} alt="" className="mr-2" /> Ref-No :
                <span className="pl-1"> {data?.propertyID?.refrenceNo}</span>
              </p>
              <p className=" text-white pl-2 flex items-center mt-6">
                <img src={call} width={20} alt="" className="mr-2" />
                <span className="pl-1 tracking-wide">
                  <strong>+252 {data?.clientID?.phone}</strong>
                </span>
              </p>
              <p className=" text-white pl-2 flex items-center mt-6">
                <img src={mail} width={20} alt="" className="mr-2" />
                <span className="pl-1 tracking-wide">
                  <strong> {data?.clientID?.email}</strong>
                </span>
              </p>
              <p className=" text-white pl-2 flex items-center mt-6">
                <img src={date} width={20} alt="" className="mr-2" />
                <span className="pl-1 tracking-widest decoration-solid underline ">
                  <strong> {data?.date}</strong>
                </span>
              </p>
            </div>
            {/**PART TWO */}
            <div className="ml-4 ">
              {/**CAROUSEL SECTION */}
              <div>
                <Carousel
                  showThumbs={false}
                  infiniteLoop={true}
                  autoPlay
                  // width={}
                  className=" w-10/12 2xl:w-11/12  "
                >
                  {/**RENDERED IMAGES */}
                  {images}
                </Carousel>
                {/**description part */}
                <div className="mt-4 px-2 py-1">
                  {/**FIRST PART */}
                  <div className="flex items-center justify-around">
                    <div className="  mr-4 bg-gray-400  w-28 h-16 opacity-80 border-2 border-solid border-amber-400 py-2 px-4 rounded-lg">
                      <h1 className="flex flex-col text-center text-base font-bold tracking-wide  decoration-solid underline  decoration-solid decoration-2   ">
                        Type
                      </h1>
                      <p className="text-center font-bold ">
                        {data?.propertyID?.propertyType}
                      </p>
                    </div>
                    {/**TWO */}
                    <div className="  mr-4 bg-gray-400  w-28 h-16 opacity-80 border-2 border-solid border-amber-400 py-2 px-4 rounded-lg">
                      <h1 className="flex flex-col text-center text-base  font-bold tracking-wide  decoration-solid underline  decoration-solid decoration-2   ">
                        Ref-No
                      </h1>
                      <p className="text-center font-bold ">
                        {data?.propertyID?.propertyNo}
                      </p>
                    </div>
                    {/**THREE */}
                    <div className="  mr-4 bg-gray-400  w-28 h-16 opacity-80 border-2 border-solid border-amber-400 py-2 px-4 rounded-lg">
                      <h1 className="flex flex-col text-center text-base  font-bold tracking-wide  decoration-solid underline  decoration-solid decoration-2   ">
                        Price
                      </h1>
                      <p className="text-center font-bold text-base ">
                        $ {data?.propertyID?.price}
                      </p>
                    </div>
                  </div>
                  {/**SEFCOND PART */}
                  <div className="flex items-center justify-around mt-4">
                    <div className="  mr-4 bg-gray-400  w-28 h-14 opacity-80 border-2 border-solid border-amber-400 py-2 px-4 rounded-lg">
                      <h1 className="flex flex-col text-center text-sm font-bold tracking-wide  decoration-solid underline  decoration-solid decoration-2   ">
                        Year Built
                      </h1>
                      <p className="text-center font-bold ">
                        {" "}
                        {data?.propertyID?.yearBuilt}{" "}
                      </p>
                    </div>
                    {/**TWO */}
                    <div className="  mr-4 bg-gray-400  w-28 h-14 opacity-80 border-2 border-solid border-amber-400 py-2 px-4 rounded-lg">
                      <h1 className="flex flex-col text-center text-base  font-bold tracking-wide  decoration-solid underline  decoration-solid decoration-2   ">
                        Rooms
                      </h1>
                      <p className="text-center font-bold ">
                        {data?.propertyID?.bedrooms +
                          data?.propertyID?.bathroom}
                      </p>
                    </div>
                    {/**THREE */}
                    <div className="  mr-4 bg-gray-400  w-28 h-16 opacity-80 border-2 border-solid border-amber-400 py-2 px-4 rounded-lg">
                      <h1 className="flex flex-col text-center text-base  font-bold tracking-wide  decoration-solid underline  decoration-solid decoration-2   ">
                        Contract
                      </h1>
                      <p className="text-center font-bold text-base ">
                        {data?.propertyID?.contract}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/**APPOINTMENT PART */}

            {/* <div className="2xl:w-1/2 w-3/4 ml-4 px-2 py-2 border border-black h-80  rounded-md mt-6 bg-cyan-900 relative ">
              <div className="">
                <h3 className="text-amber-400 font-semibold">
                  Appointement-Date
                </h3>
                <p className=" text-white  flex items-center mt-2">
                  <img src={date} width={20} alt="" className="mr-2" />
                  <span className="pl-1 tracking-widest decoration-solid underline ">
                    <strong> {data?.date}</strong>
                  </span>
                </p>
              </div>
              <div className="mt-8">
                <img
                  src={data.clientID?.image?.url}
                  alt=""
                  onClick={() => setMessage(true)}
                  width={55}
                  className={
                    message
                      ? `rounded-full border-2 border-white px-1 py-1 object-center  aspect-square cursor-pointer`
                      : `rounded-full border-2 border-amber-400 px-1 py-1 object-center  aspect-square cursor-pointer`
                  }
                />
                {message && (
                  <div className="border-2 border-amber-400 mt-2 px-2 py-1 text-white font-mono  ">
                    <span className="font-bold tracking-widest text-amber-400">
                      Message :
                    </span>
                    <br /> Hey Ahmed my name is abdule i've seen your property
                    and i like it iam ready to rent hope you will text me back
                  </div>
                )}
              </div>
            </div> */}
          </div>
        )}
      </div>
    );
  });

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
