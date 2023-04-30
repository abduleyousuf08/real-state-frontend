import "../index.css";

import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { Link } from "react-router-dom";
//images

function RentCard({ rent }) {
  const imageSliced = rent.images.slice(0, 4);
  return (
    <div>
      <div className="card-component-section">
        <div className="max-w-sm border border-gray-200 rounded-lg shadow dark:border-gray-700 card-component-flowbite">
          <a href="#">
            <img
              className="rounded-t-lg w-full h-72  "
              src={
                imageSliced[0].url
                  ? imageSliced[0].url
                  : "https://media.istockphoto.com/id/506545080/vector/transparent-pattern-background.jpg?s=1024x1024&w=is&k=20&c=oSehSBTS7lglexi8oNkDCVjvt0RE2QuSYWHWyfucp80="
              }
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight  card-text-flowbite">
                {rent.propertyType ? rent.propertyType : "House"}
              </h5>
            </a>

            {/* <p className="mb-3  card-text-flowbite-desc">{rent.desc}</p> */}
            {/** property infos */}
            <div className="flex mb-4 mt-8">
              <div className="">
                <p className="flex items-center ">
                  <MdOutlineBedroomParent
                    className="mr-2"
                    size={30}
                    color="white"
                  />
                  <span className="text-color-icon">
                    {" "}
                    {rent.bedrooms ? rent.bedrooms : "2"}
                  </span>
                </p>

                <p className="mr-4 text-color-paragraph ml-4">Bedrooms</p>
              </div>
              <div className="">
                <p className="flex items-center">
                  <MdOutlineMeetingRoom
                    className="mr-2"
                    size={30}
                    color="white"
                  />
                  <span className="text-color-icon">
                    {" "}
                    {rent.bathroom ? rent.bathroom : "2"}
                  </span>
                </p>
                <p className="mr-4 text-color-paragraph ml-4">Bathroom</p>
              </div>
              <div className="">
                <p className="flex items-center">
                  <FaBath className="mr-2" size={30} color="white" />{" "}
                  <span className="text-color-icon">
                    {" "}
                    {rent.balcony ? rent.balcony : "3"}
                  </span>
                </p>

                <p className="text-color-paragraph ml-4">Balcony</p>
              </div>
            </div>
            <Link to={`/info/${rent._id}`}>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 card-btn-two"
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
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentCard;
