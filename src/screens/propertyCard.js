import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

//IMAGES
import chat from "../Assets/chat.png";
import phone from "../Assets/phone.png";
import ellipsis from "../Assets/ellipsis.png";
import { AuthContext } from "../Context/AuthContext";

function PropertyCard({ house, similar }){
  const { addViewedProperty } = useContext(AuthContext)
  const handleClick = () => {
    addViewedProperty();
  };

  return (
    <Link to={`/info/${house?._id || similar?._id}`}>
      <div className="cursor-pointer h-68 2xl:h-68 2xl:w-80 px-2 py-4  ml-4 mt-4 rounded-xl w-72 border-2 border-#d6ccc2  shadow-xl    " onClick={handleClick}>
        <img
          src={house?.images?.[0]?.url || similar?.images?.[0]?.url}
          alt=""
          className="aspect-video px-1 w-72 2xl:w-full  py-1 rounded-2xl"
        />
        {/** CARD-BODY */}
        <div className="flex items-center  mt-4 relative">
          <img
            src={house?.userID?.image?.url || similar?.userID.image?.url}
            width={55}
            alt=""
            className="cursor-pointer rounded-full border-2 border-#d6ccc2 px-1 py-1  object-center  aspect-square "
          />
          <div className="ml-2 text-balck">
            <h2 className="font-header font-bold text-sm 2xl:text-base">
              {house?.userID?.name || similar?.userID.name}
            </h2>
            <p className="text-xs tracking-widest text-stone-700">
              {house?.userID?.is_agent
                ? "Estate Agent"
                : "Client" || similar?.userID.is_agent
                ? "Estate Agent "
                : "Client"}
            </p>
          </div>
          <div className="absolute right-0 top-2 px-2 py-2 flex items-center ">
            {/**CALL*/}
            <img src={phone} width={23} alt="" className="mr-2" />
            <img src={chat} width={23} alt="" className="mr-2" />
            <img src={ellipsis} width={24} alt="" className="mr-2" />
            {/**DropUp*/}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
