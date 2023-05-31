import "../index.css";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

import chat from "../Assets/chat.png";
import phone from "../Assets/phone.png";
import ellipsis from "../Assets/ellipsis.png";

function CommonCard({ data, house, similar }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  
  const { addViewedProperty } = useContext(AuthContext);
  const handleClick = () => {
    addViewedProperty();
  };
  return (
    <div>
      {isHome ? (
        <div>
          <div className="card-component-section-two">
            <div className="max-w-xs 2xl:max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 card-component-flowbite">
              <a href="#">
                <img
                  className="rounded-t-lg  aspect-video "
                  src={
                    data?.images?.[0]?.url
                      ? data.images?.[0]?.url
                      : "https://media.istockphoto.com/id/506545080/vector/transparent-pattern-background.jpg?s=1024x1024&w=is&k=20&c=oSehSBTS7lglexi8oNkDCVjvt0RE2QuSYWHWyfucp80="
                  }
                  alt="profile"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl  overflow-hidden text-ellipsis whitespace-nowrap font-bold tracking-tight card-text-flowbite">
                    {data?.propertyType ? data?.propertyType : "House"}
                  </h5>
                </a>
                {/* <p className="mb-3 font-normal card-text-flowbite-desc h-10 ">
                {sale.descriptionProp}
              </p> */}
                {/**property infos */}
                <div className="flex mb-4 mt-8">
                  <div className="flex items-center flex-col">
                    <p className="flex items-center">
                      <MdOutlineBedroomParent
                        className="mr-2"
                        size={30}
                        color="white"
                      />
                      <span className="text-color-icon mr-10">
                        {" "}
                        {data?.bedrooms ? data?.bedrooms : "2"}
                      </span>
                    </p>

                    <p className="mr-6 text-color-paragraph mt-2 ">Bedrooms</p>
                  </div>
                  <div className="flex items-center flex-col">
                    <p className="flex items-center">
                      <MdOutlineMeetingRoom
                        className="mr-2"
                        size={30}
                        color="white"
                      />
                      <span className="text-color-icon mr-10">
                        {" "}
                        {data?.bathroom ? data.bathroom : "3"}
                      </span>
                    </p>

                    <p className="mr-4 text-color-paragraph mt-2 ">Bathroom</p>
                  </div>
                  <div className="flex items-center flex-col">
                    <p className="flex items-center">
                      <FaBath className="mr-2" size={30} color="white" />
                      <span className="text-color-icon ">
                        {" "}
                        {data?.balcony ? data.balcony : "3"}
                      </span>
                    </p>

                    <p className="text-color-paragraph mt-2 "> balcony</p>
                  </div>
                </div>
                <Link to={`/info/${data?._id}`}>
                  <button
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  focus:ring-4 focus:outline-none "
                    onClick={handleClick}
                  >
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Link to={`/info/${house?._id || similar?._id}`}>
          <div className="cursor-pointer h-68 2xl:h-68 2xl:w-80 px-2 py-4  ml-4 mt-4 rounded-xl w-72 border-2 border-#d6ccc2  shadow-xl    ">
            <img
              src={house?.images?.[0].url || similar?.images?.[0]?.url}
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
      )}
    </div>
  );
}

export default CommonCard;
