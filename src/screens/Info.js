import "../index.css";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { MdMeetingRoom } from "react-icons/md";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
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

function Info() {
  const { id } = useParams();
  const { fetchingOneProperty, data, infoLoading, makeSchedule } =
    useContext(GeneralContext);
  let [date, onChange] = useState(new Date());

  useEffect(() => {
    fetchingOneProperty(id);
  }, [id]);

  if (!data) {
    return <div>Loading</div>;
  }

  console.log(data);

  ////
  let renderCarousel = data?.oneProp?.images.map((image) => {
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
            {data?.oneProp?.city ? data?.oneProp?.city : "Hargeisa"}
          </h1>
          <div className=" absolute right-40  2xl:right-1/3">
            <button className="mr-2 border-solid outline  outline-2 border-black py-0 px-4 bg-amber-400 text-cyan-900 rounded-sm font-semibold">
              {data?.oneProp?.contract === "sale" ? "Sale" : "Rent"}
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
              {data?.oneProp?.squareFT ? data?.oneProp?.squareFT : "2000km"}
            </span>
            <p>Square FT.</p>
          </div>
          <div className="mr-16">
            <span className="flex items-center mb-2">
              <MdMeetingRoom className="mr-2" size={30} />{" "}
              {data?.oneProp?.bedrooms + data?.oneProp?.bathroom
                ? data?.oneProp?.bedrooms + data?.oneProp?.bathroom
                : "7"}
            </span>
            <p>Rooms</p>
          </div>
          <div className="mr-16">
            <span className="flex items-center mb-2">
              <MdBedroomParent className="mr-2" size={30} />{" "}
              {data?.oneProp?.bedrooms ? data?.oneProp?.bedrooms : "2"}
            </span>
            <p>Bedrooms</p>
          </div>
          <div className="mr-16">
            <span className="flex items-center mb-2">
              <MdOutlineBathroom className="mr-2" size={30} />{" "}
              {data?.oneProp?.bathroom ? data?.oneProp?.bathroom : "2"}
            </span>
            <p>Bathrooms</p>
          </div>
          <div className="mr-4">
            <span className="flex items-center mb-2">
              <GiHomeGarage className="mr-2" size={30} />{" "}
              {data?.oneProp?.garage ? "1" : "0"}
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
              {data?.oneProp?.propertyNo ? data?.oneProp?.propertyNo : "232324"}
            </span>
          </h4>
          <div className="flex items-center relative">
            <h1 className=" relative text-3xl mb-4 w-5/12 text-amber-400 font-bold">
              {data?.oneProp?.country ? data?.oneProp?.country : "Hargeisa"}
              <span className="absolute ">
                <img src={blueTick} alt="" width={20} className="" />
              </span>
            </h1>
            <div className=" absolute right-40 2xl:right-2/4 border-2 border-solid border-black px-2 py-2 bg-amber-400 font-semibold text-cyan-900 rounded-xl mb-8">
              <h2 className="text-xl font-semibold flex items-center ">
                Price :{" "}
                <span className="font-bold text-lg ml-2">
                  {" "}
                  {data?.oneProp?.price ? data.oneProp.price : "2000"}
                </span>
              </h2>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4 bg-gray-400 w-40  opacity-80 border-2 border-solid border-amber-400  ">
              <h1 className="flex flex-col  py-2  px-4  text-center  ">
                Type
                <span className="ml-0 text-black text-base font-bold ">
                  {data?.oneProp?.propertyType
                    ? data?.oneProp?.propertyType
                    : "House"}
                </span>
              </h1>
            </div>
            <div className="mr-4 bg-gray-300 w-40  opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Bathroom
                <span className="ml-0 text-black  font-bold">
                  {" "}
                  {data?.oneProp?.bathroom ? data?.oneProp?.bathroom : "2"}
                </span>
              </h1>
            </div>
            <div className="mr-4 bg-gray-400 w-40 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Bedroom{" "}
                <span className="ml-0 font-bold">
                  {data?.oneProp?.bedrooms ? data?.oneProp?.bedrooms : "2"}
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
                  {data?.oneProp?.squareFT
                    ? data?.oneProp?.squareFT
                    : "23532KM"}
                </span>
              </h1>
            </div>
            <div className="mr-4 bg-gray-300 w-40 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Garage{" "}
                <span className="ml-0 font-bold">
                  {data?.oneProp?.garage ? "1" : "0"}
                </span>
              </h1>
            </div>
            <div className="mr-4 bg-gray-400 w-40 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Lift{" "}
                <span className="ml-0 font-bold">
                  {data?.oneProp?.lift ? data?.oneProp?.lift : "1"}
                </span>
              </h1>
            </div>
            <div className="mr-4 bg-gray-300 w-40 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Water Availability{" "}
                <span className="ml-0 font-bold">
                  {data?.oneProp?.status ? data?.oneProp?.status : "available"}
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
                  {data?.oneProp?.balcony ? "1" : "0"}
                </span>
              </h1>
            </div>
            <div className="  mr-4 bg-gray-300 w-40 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Status{" "}
                <span className="ml-0 font-bold">
                  {data?.oneProp?.status ? data?.oneProp?.status : "available"}
                </span>
              </h1>
            </div>
            <div className="  mr-4 bg-gray-400 w-40 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Year Built{" "}
                <span className="ml-0 font-bold">
                  {data?.oneProp?.yearBuilt ? data?.oneProp?.yearBuilt : "2021"}
                </span>
              </h1>
            </div>
            <div className="  mr-4 bg-gray-300 w-40 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Refrence{" "}
                <span className="ml-0">
                  {data?.oneProp?.propertyNo
                    ? data?.oneProp?.propertyNo
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
                  {data?.oneProp?.fullyFurnished
                    ? "FullyFurnished"
                    : "No FullyFurnished"}
                </span>
              </div>
              <div className="flex items-center ml-28 mt-10">
                <img src={noShouting} alt="" width={40} className="mr-4" />

                <span>
                  {data?.oneProp?.QueitSaroudings
                    ? "Queit-Saroudings"
                    : "No Queit-Saroudings "}
                </span>
              </div>
              <div className="flex items-center ml-28 mt-10">
                <img src={bathHub} alt="" width={40} className="mr-4" />

                <span>
                  {data?.oneProp?.bathHub ? "BathHub" : "No bath-hub"}
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center ml-28 mt-10">
                <img src={noSmoking} alt="" width={40} className="mr-4" />
                <span>
                  {data?.oneProp?.NoSmookingRooms
                    ? "SmookingRooms"
                    : "No Smooking Rooms"}
                </span>
              </div>
              <div className="flex items-center ml-28 mt-10">
                <img src={spinkler} alt="" width={40} className="mr-4" />

                <span>
                  {" "}
                  {data?.oneProp?.FireExtinguish
                    ? "Fire Extinguish"
                    : "No Fire-Extinguish"}
                </span>
              </div>
              <div className="flex items-center ml-28 mt-10">
                <img src={protection} alt="" width={40} className="mr-4" />

                <span>
                  {data?.oneProp?.homeSecurity
                    ? "Home-Security "
                    : "No Home-Security"}
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center ml-28 mt-10">
                <img src={airCondition} alt="" width={40} className="mr-4" />

                <span>
                  {" "}
                  {data?.oneProp?.ACRooms ? "ACRooms" : "No ACRooms"}
                </span>
              </div>
              <div className="flex items-center ml-28 mt-10">
                <img src={wifi2} alt="" width={40} className="mr-4" />

                <span>
                  {data?.oneProp?.HighSpeedWifi
                    ? "High-Speed Wifi"
                    : "No High-Speed Wifi"}
                </span>
              </div>
              <div className="flex items-center ml-28 mt-10">
                <img src={microWave} alt="" width={40} className="mr-4" />
                <span>{data.oneProp.oven ? "Oven" : "No Oven available"}</span>
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
            {data?.oneProp?.descriptionProp
              ? data?.oneProp?.descriptionProp
              : "waa guri fiican "}{" "}
          </p>
        </div>

        {/**....END */}
      </div>
      {/**SECTION TWO */}

      <div className="px-8 w-96  2xl:w-1/4  ">
        <div className="bg-cyan-900 obacity-300 h-60 rounded-lg ">
          <img
            width={130}
            src={data?.oneProp?.userID?.image.url}
            alt=""
            className="cursor-pointer bg-cyan-900 absolute right-32 top-24   rounded-full border-4 border-amber-400 px-1 py-1  object-center  aspect-square "
          />
          <h2 className="absolute top-64  right-52 text-xl text-amber-400  font-bold">
            {data?.oneProp?.userID?.name}
          </h2>
          <div className="absolute top-64 mt-8  right-14 text-white border-l-2 border-amber-400 ">
            <p className="text-lg pl-2  flex items-center">
              <img src={call} width={20} alt="" className="mr-2 " />{" "}
              <span> {data?.oneProp?.userID?.phone} </span>
            </p>
            <p className="text-lg pl-2   flex items-center">
              <img src={email} width={20} alt="" className="mr-2 " />{" "}
              <span>{data?.oneProp?.userID?.email} </span>
            </p>
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
              className="border border-#d6ccc2 px-8 py-4 mt-4 ml-20 shadow-xl  bg-blue-700 hover:bg-blue-800 text-white rounded-lg active:bg-black active:text-white "
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
