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
import axios from "axios";

//CONTEXT API
import GeneralContext from "../ContextApi";

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
import call from "../images/edited-images/telephone.png";
import schedule from "../images/edited-images/schedule.png";
import agent from "../images/edited-images/agent.png";

function Info() {
  //INFO PAGE FETCHING ONE ID
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [infoLoading, setInfoLoading] = useState(true);
  const [date, setDate] = useState();
  const [scheduling, setScheduleing] = useState(true);
  const token = localStorage.getItem("token");
  const tokenParsed = JSON.parse(token);
  // console.log(tokenParsed);
  // console.log(date);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/propertyInfo/oneHouse/${id}`)
      .then((res) => {
        setData(res.data.oneProp);
        console.log(res.data);
        setInfoLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (infoLoading) {
    return <div>PLEASE WAIT.....</div>;
  }

  const makeSchedule = async (event) => {
    event.preventDefault();
    await axios
      .post(
        "http://localhost:3000/schedule/makeSchedule",
        { date, propertyId: id },
        {
          headers: { Authorization: tokenParsed.token },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
    setScheduleing(false);
  };

  /////
  const oneCard = [
    {
      id: 1,
      Image:
        "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    ///
    {
      id: 2,
      Image:
        "https://images.pexels.com/photos/8031878/pexels-photo-8031878.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    //
    {
      id: 3,
      Image:
        "https://images.pexels.com/photos/5997996/pexels-photo-5997996.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    //
    {
      id: 4,
      Image:
        "https://images.pexels.com/photos/5997996/pexels-photo-5997996.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

  ////
  let renderCarousel = data.images.map((image) => {
    return (
      <div key={image.id}>
        <img
          src={
            image.url
              ? image.url
              : "https://images.pexels.com/photos/987550/pexels-photo-987550.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          alt=""
          className="CarouselImage"
        />
      </div>
    );
  });

  ////

  return (
    <div className="flex justify-evenly content-center mt-40 ">
      {/**SECTION ONE */}
      <div>
        {/**START ..... */}

        {/**PART ONE > SECTION ONE */}
        <div className="flex justify-between px-20  items-center  ">
          <h1 className="text-3xl">
            {data.location ? data.location : "Hargeisa"}
          </h1>
          <div className="ml-20">
            <button className="mr-2 border-solid outline  outline-2 border-black py-0 px-4 bg-amber-400 text-cyan-900 rounded-sm font-semibold">
              {data.contract === "sale" ? "Sale" : "Rent"}
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
        <div className="flex justify-evenly items-center mt-10 ">
          <div className="mr-4">
            <span className="flex items-center ">
              <BsArrowUpRightSquare className="mr-2" size={30} />{" "}
              {/* {data.squareFT} */} {data.squareFT ? data.squareFT : "2000km"}
            </span>
            <p>Square FT.</p>
          </div>
          <div className="mr-6">
            <span className="flex items-center mb-2">
              <MdMeetingRoom className="mr-2" size={30} />{" "}
              {data.bedrooms + data.bathroom
                ? data.bedrooms + data.bathroom
                : "7"}
            </span>
            <p>Rooms</p>
          </div>
          <div className="mr-6">
            <span className="flex items-center mb-2">
              <MdBedroomParent className="mr-2" size={30} />{" "}
              {data.bedrooms ? data.bedrooms : "2"}
            </span>
            <p>Bedrooms</p>
          </div>
          <div className="mr-6">
            <span className="flex items-center mb-2">
              <MdOutlineBathroom className="mr-2" size={30} />{" "}
              {data.bathroom ? data.bathroom : "2"}
            </span>
            <p>Bathrooms</p>
          </div>
          <div className="mr-6">
            <span className="flex items-center mb-2">
              <GiHomeGarage className="mr-2" size={30} />{" "}
              {data.garage ? data.garage : "1"}
            </span>
            <p>Garages</p>
          </div>
        </div>
        {/**PART THREE > SECTION THREE */}
        <div>
          <Carousel
            className="w-4/5 ml-28 mt-10 "
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
            <span> {data.refrenceNo ? data.refrenceNo : "232324"}</span>
          </h4>
          <div className="flex items-center">
            <h1 className=" relative text-4xl mb-4 w-5/12 text-amber-400 font-bold">
              {data.location ? data.location : "Hargeisa"}
              <span className="absolute ">
                <img src={blueTick} alt="" width={20} className="" />
              </span>
            </h1>
            <div className="ml-60 border-2 border-solid border-black px-4 py-4 bg-amber-400 font-semibold text-cyan-900 rounded-xl mb-8">
              <h2 className="text-2xl font-semibold flex items-center ">
                Price :{" "}
                <span className="font-bold text-2xl ml-2">
                  {" "}
                  {data.price ? `$${data.price}` : "2000"}
                </span>
              </h2>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4 bg-gray-400 w-40 h-20 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center  ">
                Type
                <span className="ml-0 text-black font-bold ">
                  {" "}
                  {data.propertyType ? data.propertyType : "House"}
                </span>
              </h1>
            </div>
            <div className="mr-4 bg-gray-300 w-40 h-20 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Bathroom
                <span className="ml-0 text-black  font-bold">
                  {" "}
                  {data.bathroom ? data.bathroom : "2"}
                </span>
              </h1>
            </div>
            <div className="mr-4 bg-gray-400 w-40 h-20 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Bedroom{" "}
                <span className="ml-0 font-bold">
                  {" "}
                  {data.bedrooms ? data.bedrooms : "2"}
                </span>
              </h1>
            </div>
            <div className="mr-4 bg-gray-300 w-40 h-20 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Rooms{" "}
                <span className="ml-0 font-bold">
                  {data.bedrooms + data.bathroom
                    ? data.bedrooms + data.bathroom
                    : "7"}
                </span>
              </h1>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div className="mr-4 bg-gray-400 w-40 h-20 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Square FT.{" "}
                <span className="ml-0 font-bold">
                  {data.squareFT ? data.squareFT : "23532KM"}
                </span>
              </h1>
            </div>
            <div className="mr-4 bg-gray-300 w-40 h-20 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Garage{" "}
                <span className="ml-0 font-bold">
                  {data.garage ? data.garage : "1"}
                </span>
              </h1>
            </div>
            <div className="mr-4 bg-gray-400 w-40 h-20 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Lift{" "}
                <span className="ml-0 font-bold">
                  {data.lift ? data.lift : "1"}
                </span>
              </h1>
            </div>
            <div className="mr-4 bg-gray-300 w-40 h-20 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Water Availability{" "}
                <span className="ml-0 font-bold">
                  {data.status ? data.status : "available"}
                </span>
              </h1>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div className="  mr-4 bg-gray-400 w-40 h-20 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Balcony{" "}
                <span className="ml-0 font-bold">
                  {" "}
                  {data.balcony ? data.balcony : "1"}
                </span>
              </h1>
            </div>
            <div className="  mr-4 bg-gray-300 w-40 h-20 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Status{" "}
                <span className="ml-0 font-bold">
                  {data.status ? data.status : "available"}
                </span>
              </h1>
            </div>
            <div className="  mr-4 bg-gray-400 w-40 h-20 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Year Built{" "}
                <span className="ml-0 font-bold">
                  {data.yearBuilt ? data.yearBuilt : "2011"}
                </span>
              </h1>
            </div>
            <div className="  mr-4 bg-gray-300 w-40 h-20 opacity-80 border-2 border-solid border-amber-400 py-2 px-4">
              <h1 className="flex flex-col text-center">
                Refrence{" "}
                <span className="ml-0">
                  {data.refrenceNo ? data.refrenceNo : "2323234"}
                </span>
              </h1>
            </div>
          </div>
        </div>
        {/**PART FOUR > SECTION FOUR  */}
        <div className=" ">
          <h1 className="ml-28   mt-20 text-4xl">Amenities</h1>
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
                  {data.FullyFurnished ? "FullyFurnished" : "No FullyFurnished"}
                </span>
              </div>
              <div className="flex items-center ml-28 mt-10">
                <img src={noShouting} alt="" width={40} className="mr-4" />

                <span>
                  {data.QueitSaroudings
                    ? "Queit-Saroudings"
                    : "No Queit-Saroudings "}
                </span>
              </div>
              <div className="flex items-center ml-28 mt-10">
                <img src={bathHub} alt="" width={40} className="mr-4" />

                <span>{data.bathHub ? "bathHub" : "No bath-hub"}</span>
              </div>
            </div>

            <div>
              <div className="flex items-center ml-28 mt-10">
                <img src={noSmoking} alt="" width={40} className="mr-4" />
                <span>
                  {data.NoSmookingRooms ? "SmookingRooms" : "No Smooking Rooms"}
                </span>
              </div>
              <div className="flex items-center ml-28 mt-10">
                <img src={spinkler} alt="" width={40} className="mr-4" />

                <span>
                  {" "}
                  {data.FireExtinguish
                    ? "Fire Extinguish"
                    : "No Fire-Extinguish"}
                </span>
              </div>
              <div className="flex items-center ml-28 mt-10">
                <img src={protection} alt="" width={40} className="mr-4" />

                <span>
                  {" "}
                  {data.HomeSecurity
                    ? "Home-Security available"
                    : "No Home-Security"}
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center ml-28 mt-10">
                <img src={airCondition} alt="" width={40} className="mr-4" />

                <span> {data.ACRooms ? "ACRooms" : "No ACRooms"}</span>
              </div>
              <div className="flex items-center ml-28 mt-10">
                <img src={wifi2} alt="" width={40} className="mr-4" />

                <span>
                  {data.HightSpeedWifi
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
            {data.descriptionProp ? data.descriptionProp : "waa guri fiican "}{" "}
          </p>
        </div>
        {/**....END */}
      </div>
      {/**SECTION TWO */}
      <div className="px-10 w-96 ">
        <div className="bg-gray-300 px-20 py-4 ">
          <img
            src="https://img.freepik.com/free-photo/portrait-young-businessman_144627-21852.jpg?size=626&ext=jpg&ga=GA1.1.1650648011.1677910709&semt=ais"
            className="rounded-full w-40 h-28"
            alt=""
          />
          <h1 className="text-center mt-2 text-1xl tracking-widest font-bold">
            {data.ownerID ? data.ownerID.firstName : "unKnown"}
          </h1>
          <p className="text-center mt-2">
            {" "}
            {data.ownerID ? data.ownerID.email : "unKnown"}
          </p>
          <p className="w-40  pb-2 tracking-wide border-b-2 border-solid border-amber-400 mt-2 flex items-center">
            <img src={call} alt="" width={20} className="mr-2" />
            <span className="font-semibold">
              +25263{data.ownerID ? data.ownerID.phone : "unKnown"}
            </span>
          </p>
        </div>
        <div className="bg-gray-300 px-20 py-4 mt-10 ">
          <img
            src="https://img.freepik.com/free-photo/happy-successful-muslim-businesswoman-posing-outside_74855-2007.jpg?size=626&ext=jpg&ga=GA1.1.1650648011.1677910709&semt=ais"
            className="rounded-full w-40 h-28"
            alt=""
          />
          <h1 className="text-center mt-2 text-1xl tracking-widest font-bold">
            {data.ownerID ? data.ownerID.lastName : "unKnown"}
          </h1>
          <p className="text-center mt-2">
            {data.ownerID ? data.ownerID.email : "unKnown"}
          </p>
          <p className="w-40  pb-2 tracking-wide border-b-2 border-solid border-amber-400 mt-2 flex items-center">
            <img src={call} alt="" width={20} className="mr-2" />
            <span className="font-semibold">
              +25263{data.ownerID ? data.ownerID.phone : "unKnown"}
            </span>
          </p>
        </div>
        {/** */}

        <a
          href="#"
          className="flex  mt-40 h-28 w-80 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
        >
          <img
            className=" absolute object-contain w-28 rounded-t-lg   h-28 right-1 "
            src="https://img.freepik.com/free-photo/portrait-young-businessman_144627-21852.jpg?size=626&ext=jpg&ga=GA1.1.1650648011.1677910709&semt=ais"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white w-40">
              Listing Agent
            </h5>
          </div>
        </a>
        <div className="mt-10">
          <h1 className="flex items-center">
            <img src={schedule} alt="" width={30} className="mr-2" />{" "}
            <span className="font-bold tracking-wide">
              Schedule The Agent Now !
            </span>
          </h1>

          {/** */}

          <div className=" relative border-2 border-solid border-black  mt-4 w-80 h-96 bg-cyan-900">
            <input
              type="date"
              name=""
              id=""
              value={date}
              className=" px-2 py-2 border-2 border-solid border-black w-40 mt-2 ml-2 bg-amber-400 text-cyan-900 font-bold "
              onChange={(e) => setDate(e.target.value)}
            />

            <button
              onClick={makeSchedule}
              className="absolute flex items-center top-80 mt-2 right-1 border-2 border-solid border-black px-2 py-2 bg-white text-black hover:bg-amber-400 hover:border-black active:bg-cyan-900 active:text-white hover:text-black rounded-lg font-bold opacity-90"
            >
              <img src={agent} alt="" width={30} /> <span>Meeth the agent</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
