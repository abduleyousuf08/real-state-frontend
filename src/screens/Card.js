import "../index.css";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineMeetingRoom } from "react-icons/md";
import {GrFavorite} from 'react-icons/gr'
import { FaBath } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";


function Card({ data }) {
  const {addViewedProperty} = useContext(AuthContext)
  const handleClick = () => {
    addViewedProperty();
  };
  return (
    <div>
      <div className="csard-component-section-two">
        <div className="max-w-xs 2xl:max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 card-component-flowbite">
          <a href="#">
            <img
              className="rounded-t-lg  aspect-video "
              src={
                data?.images?.[0]?.url
                  ? data.images[0].url
                  : "https://media.istockphoto.com/id/506545080/vector/transparent-pattern-background.jpg?s=1024x1024&w=is&k=20&c=oSehSBTS7lglexi8oNkDCVjvt0RE2QuSYWHWyfucp80="
              }
              alt="profile"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl  overflow-hidden text-ellipsis whitespace-nowrap font-bold tracking-tight card-text-flowbite">
                {data.propertyType ? data.propertyType : "House"}
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
                    {data.bedrooms ? data.bedrooms : "2"}
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
                    {data.bathroom ? data.bathroom : "3"}
                  </span>
                </p>

                <p className="mr-4 text-color-paragraph mt-2 ">Bathroom</p>
              </div>
              <div className="flex items-center flex-col">
                <p className="flex items-center">
                  <FaBath className="mr-2" size={30} color="white" />
                  <span className="text-color-icon ">
                    {" "}
                    {data.balcony ? data.balcony : "3"}
                  </span>
                </p>

                <p className="text-color-paragraph mt-2 "> balcony</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Link to={`/info/${data._id}`}>
                <button
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  focus:ring-4 focus:outline-none    card-btn"
                  onClick={handleClick}
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                
              </Link>
              <GrFavorite
                className="text-white cursor-pointer h-5 w-5"
                onClick={(e) => {
                  e.target.style.fill = "red";
                }}
                
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
