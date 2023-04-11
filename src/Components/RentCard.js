import "../index.css";

import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { FaBath } from "react-icons/fa";
//images

function RentCard({ rent }) {
  return (
    <div>
      <div className="card-component-section">
        <div class="max-w-ms  border border-gray-200 rounded-lg shadow dark:border-gray-700 card-component-flowbite">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={rent.image}
              alt=""
              className="image-general-size "
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight  card-text-flowbite">
                {rent.houseType}
              </h5>
            </a>

            <p class="mb-3  card-text-flowbite-desc">{rent.desc}</p>
            {/** property infos */}
            <div className="flex mb-4">
              <div className="flex items-center">
                <MdOutlineBedroomParent
                  className="mr-2"
                  size={30}
                  color="white"
                />
                <p className="mr-4 text-color-paragraph">
                  <span className="text-color-icon">2</span> Bedrooms
                </p>
              </div>
              <div className="flex items-center">
                <MdOutlineMeetingRoom
                  className="mr-2"
                  size={30}
                  color="white"
                />
                <p className="mr-4 text-color-paragraph">
                  <span className="text-color-icon">4</span> Rooms
                </p>
              </div>
              <div className="flex items-center">
                <FaBath className="mr-2" size={30} color="white" />
                <p className="text-color-paragraph">
                  <span className="text-color-icon">3</span> Bath
                </p>
              </div>
            </div>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 card-btn-two"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentCard;
