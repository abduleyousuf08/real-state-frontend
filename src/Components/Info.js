import { BsArrowUpRightSquare } from "react-icons/bs";
import { MdMeetingRoom } from "react-icons/md";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//IMAGES
import cardHouse from "../images/card-image.jpg";

function Info() {
  return (
    <div className="flex justify-evenly content-center mt-40 ">
      {/**SECTION ONE */}
      <div>
        {/**START ..... */}

        {/**PART ONE > SECTION ONE */}
        <div className="flex justify-between items-center ">
          <h1>Via di Boccea St.</h1>
          <div className="ml-20">
            <button className="mr-2 border-solid outline  outline-2 border-black py-0 px-2 bg-amber-400 text-cyan-900 rounded-sm font-semibold">
              For Rent
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
        <div className="flex items-center mt-10">
          <div className="mr-4">
            <span className="flex items-center mb-2">
              <BsArrowUpRightSquare className="mr-2" size={30} /> 130
            </span>
            <p>Square FT.</p>
          </div>
          <div className="mr-6">
            <span className="flex items-center mb-2">
              <MdMeetingRoom className="mr-2" size={30} /> 2
            </span>
            <p>Rooms</p>
          </div>
          <div className="mr-6">
            <span className="flex items-center mb-2">
              <MdBedroomParent className="mr-2" size={30} /> 3
            </span>
            <p>Bedrooms</p>
          </div>
          <div className="mr-6">
            <span className="flex items-center mb-2">
              <MdOutlineBathroom className="mr-2" size={30} /> 3
            </span>
            <p>Bathrooms</p>
          </div>
          <div className="mr-6">
            <span className="flex items-center mb-2">
              <GiHomeGarage className="mr-2" size={30} /> 1
            </span>
            <p>Garages</p>
          </div>
        </div>
        {/**PART THREE > SECTION THREE */}
        <div>
          {/* <Carousel>
            <div>
              <img src={cardHouse} />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src={cardHouse} />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src={cardHouse} />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel> */}
        </div>
        {/**PART FOUR > SECTION FOUR  */}
        <div></div>
        {/**PART FIVE > SECTION FIVE */}
        <div></div>

        {/**....END */}
      </div>
      {/**SECTION TWO */}
      <div>
        <img src={cardHouse} alt="" />
      </div>
    </div>
  );
}

export default Info;
