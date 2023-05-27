import "../index.css";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { MdMeetingRoom } from "react-icons/md";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
import { GrFavorite } from 'react-icons/gr'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../index.css";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Calendar from "react-calendar";

//CONTEXT API
import GeneralContext from "../Context/ContextApi";
//IMAGES
import microWave from "../images/edited-images/microwave.png";
import furnished from "../images/edited-images/furnished.png";
import noShouting from "../images/edited-images/no-shouting.png";
import bathHub from "../images/edited-images/bathtub.png";
import airCondition from "../images/edited-images/air-conditioner.png";
import noSmoking from "../images/edited-images/no-smoking.png";
import protection from "../images/edited-images/protection.png";
import spinkler from "../images/edited-images/sprinkler.png";
import wifi2 from "../images/edited-images/wifi.png";
import blueTick from "../images/edited-images/bluetick.png";
import schedule from "../images/edited-images/schedule.png";
import call from "../images/edited-images/call.png";
import email from "../Assets/mail.png";
import chat from '../Assets/chat-icon.png'
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";

function Info() {
  const { createChat } = useContext(ChatContext)
  const { id } = useParams();
  const { user } = useContext(AuthContext)
  

  const { fetchingOneProperty, data, infoLoading, makeSchedule } = useContext(GeneralContext);
  let [date, onChange] = useState(new Date());

  useEffect(() => {
    fetchingOneProperty(id);
  }, [id, fetchingOneProperty]);

  if (infoLoading) {
    return <div>PLEASE WAIT.....</div>;
  }

  const handleOnClick = () => {
    createChat(user._id, data.oneProp.userID._id)
  }


  ////
  let renderCarousel = data.oneProp.images.map((image) => {
    return (
      <div key={image.id}>
        <img
          src={
            image.url
              ? image.url
              : "https://images.pexels.com/photos/987550/pexels-photo-987550.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          alt=""
        />
      </div>
    );
  });

  ////

  return (
    <div className="flex justify-evenly mt-20 ">
      {/**SECTION ONE */}
      <div>
        {/**START ..... */}

        {/**PART ONE > SECTION ONE */}
        <div className="flex  px-20  items-center justiv   relative ">
          <h1 className="text-3xl">
            {data.oneProp.location ? data.oneProp.location : "Hargeisa"}
          </h1>
          <div className=" absolute right-40  2xl:right-1/3">
            <button className="mr-2 border-solid outline  outline-2 border-black py-0 px-4 bg-amber-400 text-cyan-900 rounded-sm font-semibold">
              {data.oneProp.contract === "sale" ? "Sale" : "Rent"}
            </button>
            <button className="mr-2 border-solid border-2 border-black py-0  px-4 bg-cyan-900 text-white rounded-sm font-semibold">
              House
            </button>
            <button className="mr-2 border-solid border-2 border-black py-0  px-4 bg-cyan-900 text-white rounded-sm font-semibold">
              Available
            </button>
          </div>
        </div>
        {/**PART TWO > SECTION ONE */}
        <div className="flex  items-center  ml-32  mt-10 ">
          <div className="mr-16">
            <span className="flex items-center ">
              <BsArrowUpRightSquare className="mr-2" size={30} />{" "}
              {/* {data.squareFT} */}{" "}
              {data.oneProp.squareFT ? data.oneProp.squareFT : "2000km"}
            </span>
            <p>Square FT.</p>
          </div>
          <div className="mr-16">
            <span className="flex items-center mb-2">
              <MdMeetingRoom className="mr-2" size={30} />{" "}
              {data.oneProp.bedrooms + data.oneProp.bathroom
                ? data.oneProp.bedrooms + data.oneProp.bathroom
                : "7"}
            </span>
            <p>Rooms</p>
          </div>
          <div className="mr-16">
            <span className="flex items-center mb-2">
              <MdBedroomParent className="mr-2" size={30} />{" "}
              {data.oneProp.bedrooms ? data.oneProp.bedrooms : "2"}
            </span>
            <p>Bedrooms</p>
          </div>
          <div className="mr-16">
            <span className="flex items-center mb-2">
              <MdOutlineBathroom className="mr-2" size={30} />{" "}
              {data.oneProp.bathroom ? data.oneProp.bathroom : "2"}
            </span>
            <p>Bathrooms</p>
          </div>
          <div className="mr-4">
            <span className="flex items-center mb-2">
              <GiHomeGarage className="mr-2" size={30} />{" "}
              {data.oneProp.garage ? data.oneProp.garage : "1"}
            </span>
            <p>Garages</p>
          </div>
        </div>
        {/**PART THREE > SECTION THREE */}
        <div>
          <Carousel
            className=" flex justify-center ml-28 mt-8 w-3/5 2xl:w-2/4 aspect-video"
            autoPlay
            infiniteLoop
            showThumbs={false}
          >
            {renderCarousel}
          </Carousel>
        </div>
        {/** BEFORE PART FOUR > SECTION  FOUR AND THREE */}
        <div className="mt-10 ml-28">
          <h4 className="text-1xl font-semibold mb-1">
            Refrence No:{" "}
            <span>
              {" "}
              {data.oneProp.refrenceNo ? data.oneProp.refrenceNo : "232324"}
            </span>
          </h4>
          <div className="flex items-center relative">
            <h1 className=" relative text-3xl mb-4 w-5/12 text-amber-400 font-bold">
              {data.oneProp.location ? data.oneProp.location : "Hargeisa"}
              <span className="absolute ">
                <img src={blueTick} alt="" width={20} className="" />
              </span>
            </h1>
            <GrFavorite className="w-15 h-15"/>
            <div className=" absolute right-40 2xl:right-2/4 border-2 border-solid border-black px-2 py-2 bg-amber-400 font-semibold text-cyan-900 rounded-xl mb-8">
              <h2 className="text-xl font-semibold flex items-center ">
                Price :{" "}
                <span className="font-bold text-lg ml-2">
                  {" "}
                  {data.oneProp.price ? `$${data.oneProp.price}` : "2000"}
                </span>
              </h2>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4 bg-gray-400 w-40  opacity-80 border-2 border-solid border-amber-400  ">
              <h1 className="flex flex-col  py-2  px-4  text-center  ">
                Type
                <span className="ml-0 text-black text-base font-bold ">
                  {data.oneProp.propertyType
                    ? data.oneProp.propertyType
                    : "House"}
                </span>
              </h1>
            </div>
            <div className="mr-4 bg-gray-300 w-40  opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Bathroom
                <span className="ml-0 text-black  font-bold">
                  {" "}
                  {data.oneProp.bathroom ? data.oneProp.bathroom : "2"}
                </span>
              </h1>
            </div>
            <div className="mr-4 bg-gray-400 w-40 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Bedroom{" "}
                <span className="ml-0 font-bold">
                  {data.oneProp.bedrooms ? data.oneProp.bedrooms : "2"}
                </span>
              </h1>
            </div>
            <div className="mr-4 bg-gray-300 w-40 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Rooms{" "}
                <span className="ml-0 font-bold">
                  {data?.oneProp?.bedrooms + data?.oneProp?.bathroom}
                </span>
              </h1>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div className="mr-4 bg-gray-400 w-40 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Square FT.{" "}
                <span className="ml-0 font-bold">
                  {data.oneProp.squareFT ? data.oneProp.squareFT : "23532KM"}
                </span>
              </h1>
            </div>
            <div className="mr-4 bg-gray-300 w-40 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Garage{" "}
                <span className="ml-0 font-bold">
                  {data.oneProp.garage ? data.oneProp.garage : "1"}
                </span>
              </h1>
            </div>
            <div className="mr-4 bg-gray-400 w-40 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Lift{" "}
                <span className="ml-0 font-bold">
                  {data.oneProp.lift ? data.oneProp.lift : "1"}
                </span>
              </h1>
            </div>
            <div className="mr-4 bg-gray-300 w-40 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Water Availability{" "}
                <span className="ml-0 font-bold">
                  {data.oneProp.status ? data.oneProp.status : "available"}
                </span>
              </h1>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div className="  mr-4 bg-gray-400 w-40 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Balcony{" "}
                <span className="ml-0 font-bold">
                  {" "}
                  {data.oneProp.balcony ? data.oneProb.balcony : "1"}
                </span>
              </h1>
            </div>
            <div className="  mr-4 bg-gray-300 w-40 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Status{" "}
                <span className="ml-0 font-bold">
                  {data.oneProp.status ? data.oneProp.status : "available"}
                </span>
              </h1>
            </div>
            <div className="  mr-4 bg-gray-400 w-40 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Year Built{" "}
                <span className="ml-0 font-bold">
                  {data.oneProp.yearBuilt ? data.oneProp.yearBuilt : "2011"}
                </span>
              </h1>
            </div>
            <div className="  mr-4 bg-gray-300 w-40 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Refrence{" "}
                <span className="ml-0">
                  {data.oneProp.refrenceNo
                    ? data.oneProp.refrenceNo
                    : "2323234"}
                </span>
              </h1>
            </div>
          </div>
        </div>
        {/**PART FOUR > SECTION FOUR  */}
        <div className=" ">
          <h1 className="ml-28   mt-14 text-4xl">Amenities</h1>
          <div className="flex justify-between pr-40 pl-0">
            <div>
              <div className="flex items-center ml-28 mt-10">
                <img
                  src={furnished}
                  alt=""
                  s
                  width={40}
                  className="mr-4 text-amber-400"
                />

                <span>
                  {data.oneProp.FullyFurnished
                    ? "FullyFurnished"
                    : "No FullyFurnished"}
                </span>
              </div>
              <div className="flex items-center ml-28 mt-10">
                <img src={noShouting} alt="" width={40} className="mr-4" />

                <span>
                  {data.oneProp.QueitSaroudings
                    ? "Queit-Saroudings"
                    : "No Queit-Saroudings "}
                </span>
              </div>
              <div className="flex items-center ml-28 mt-10">
                <img src={bathHub} alt="" width={40} className="mr-4" />

                <span>{data.oneProp.bathHub ? "bathHub" : "No bath-hub"}</span>
              </div>
            </div>

            <div>
              <div className="flex items-center ml-28 mt-10">
                <img src={noSmoking} alt="" width={40} className="mr-4" />
                <span>
                  {data.oneProp.NoSmookingRooms
                    ? "SmookingRooms"
                    : "No Smooking Rooms"}
                </span>
              </div>
              <div className="flex items-center ml-28 mt-10">
                <img src={spinkler} alt="" width={40} className="mr-4" />

                <span>
                  {" "}
                  {data.oneProp.FireExtinguish
                    ? "Fire Extinguish"
                    : "No Fire-Extinguish"}
                </span>
              </div>
              <div className="flex items-center ml-28 mt-10">
                <img src={protection} alt="" width={40} className="mr-4" />

                <span>
                  {" "}
                  {data.oneProp.HomeSecurity
                    ? "Home-Security available"
                    : "No Home-Security"}
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center ml-28 mt-10">
                <img src={airCondition} alt="" width={40} className="mr-4" />

                <span> {data.oneProp.ACRooms ? "ACRooms" : "No ACRooms"}</span>
              </div>
              <div className="flex items-center ml-28 mt-10">
                <img src={wifi2} alt="" width={40} className="mr-4" />

                <span>
                  {data.oneProp.HightSpeedWifi
                    ? "High-Speed Wifi"
                    : "No High-Speed Wifi"}
                </span>
              </div>
              <div className="flex items-center ml-28 mt-10">
                <img src={microWave} alt="" width={40} className="mr-4" />
                <span>{data.Oven ? "Oven" : "No Oven available"}</span>
              </div>
            </div>
          </div>
        </div>
        {/**PART FIVE > SECTION FIVE */}
        <div className="ml-28 mt-20 h-40">
          <h1 className=" relative text-2xl   border-b-2 border-solid border-black">
            PROPERTY DESCRIPTION
            <span>
              <h2 className="border-b-4 border-solid border-amber-400  w-40 h-2 ">
                {null}
              </h2>
            </span>
          </h1>
          <p className="mt-4  ">
            {data.oneProp.descriptionProp
              ? data.oneProp.descriptionProp
              : "waa guri fiican "}{" "}
          </p>
        </div>

        {/**....END */}
      </div>
      {/**SECTION TWO */}

      <div className="px-8 w-96  2xl:w-1/4  ">
        <div className="bg-cyan-900 obacity-300 h-60 rounded-lg ">
          <img
            src="data:image/jpeg;base64,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"
            width={130}
            alt=""
            className="cursor-pointer bg-cyan-900 absolute right-32 top-24   rounded-full border-4 border-amber-400 px-1 py-1  object-center  aspect-square "
          />
          <h2 className="absolute top-64  right-52 text-xl text-amber-400  font-bold">
            Abdule Yousuf
          </h2>
          <div className="absolute top-64 mt-8  right-14 text-white border-l-2 border-amber-400 ">
            <p className="text-lg pl-2  flex items-center">
              <img src={call} width={20} alt="" className="mr-2 " />{" "}
              <span> +252633502241</span>
            </p>
            <p className="text-lg pl-2   flex items-center">
              <img src={email} width={20} alt="" className="mr-2 " />{" "}
              <span> abduleyousuf08@gmail.com </span>
            </p>
            <button className="text-lg  flex items-center" onClick={handleOnClick}>
              <img src={chat} width={40} alt="chat-icon" className=""/>{" "}
              <span className="font-bold text-amber-400">Chat</span>
            </button>
          </div>
        </div>

        {/** */}

        <div className="mt-10">
          <h1 className="flex items-center">
            <img src={schedule} alt="" width={30} className="mr-2" />{" "}
            <span className="font-bold tracking-wide">
              Schedule The Agent Now !
            </span>
          </h1>

          {/** */}

          <div className="mt-8">
            <Calendar className="rounded-lg px-2 py-2" onChange={onChange} />
            <button
              className="border border-#d6ccc2 px-8 py-4 mt-4 ml-20 shadow-2xl hover:shadow-inner bg-cyan-900 text-white rounded-lg active:bg-black active:text-white "
              onClick={() => makeSchedule(date, id)}
            >
              Meet the Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
