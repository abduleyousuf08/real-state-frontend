import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import GeneralContext from "../Context/ContextApi";

//images
import downArrow from "../Assets/down-arrow.png";
import upArrow from "../Assets/up-arrow.png";
import threeD from "../Assets/3d.png";
//COMPONENTS
import CommonCard from "./CommonCard";
import Card from "./Card";

const Properties = () => {
  ////
  const { searchedProperties, setInputs, handleBug, setSearchedProperties } =
    useContext(GeneralContext);
  const toggle = useRef([]);
  const [countryHidden, setCountryHidden] = useState(false);
  const [propertyHidden, setPropertyHidden] = useState(false);
  const [contractHidden, setContractHidden] = useState(false);

  if (searchedProperties === null) {
    return <div>Loading....</div>;
  }

  /////
  const handleToggle = (index) => {
    const element = toggle.current[index];
    element.classList.toggle("hidden");

    if (index === 0) {
      setCountryHidden(!countryHidden);
    } else if (index === 1) {
      setPropertyHidden(!propertyHidden);
    } else if (index === 3) {
      setContractHidden(!contractHidden);
    }
  };

  // ///////
  const searchedList = searchedProperties[0]?.searchList[0]?.map((house) => {
    return <CommonCard house={house} key={house._id} />;
  });

  const simirlarList = searchedProperties[0]?.simirlarProperties?.map(
    (similar) => {
      return <CommonCard similar={similar} />;
    }
  );

  //////////s
  return (
    <div>
      {/**BODY OF THIS CONTENT */}

      <div className=" mt-8 flex items-center justify-between px-10 relative ">
        {/**SEARCH PART  */}
        <div>
          <div className="mb-2 flex items-center">
            <img src={threeD} width={35} alt="" />
            <h1 className="ml-2 text-2xl font-ulHeader tracking-wide">
              H O M E
            </h1>
          </div>
          <div className="border-r-4 border-#d6ccc2 px-6 py-2 overflow-y-auto ">
            <h2
              className="font-ulHeader text-xl flex items-center relative cursor-pointer tracking-wide "
              onClick={() => handleToggle(0)}
            >
              {/* <img src={world} alt="" width={23} className="mr-2" /> */}
              CHOOSE COUNTRY
              {countryHidden ? (
                <span>
                  <img
                    src={upArrow}
                    width={20}
                    alt=""
                    className="absolute ml-4 inset-x-28 inset-y-1 cursor-pointer"
                  />
                </span>
              ) : (
                <span>
                  <img
                    src={downArrow}
                    width={20}
                    alt=""
                    className="absolute inset-x-28 inset-y-1 cursor-pointer"
                  />
                </span>
              )}
            </h2>
            <ul
              className="font-uls mb-4"
              ref={(el) => (toggle.current[0] = el)}
            >
              <li className="text-sm">
                <h1
                  className="font-semibold text-cyan-500"
                  onClick={() => handleToggle(3)}
                >
                  SOMALILAND
                </h1>
                <ul className="ml-4" ref={(el) => (toggle.current[3] = el)}>
                  <li>
                    <input type="checkbox" name="" id="" /> Hargeisa
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" /> Borama
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" /> Burco
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" /> Berbera
                  </li>
                </ul>
              </li>

              <li className="text-sm">
                <h1
                  className="font-semibold text-cyan-500"
                  onClick={() => handleToggle(4)}
                >
                  SOMALIA
                </h1>
                <ul className="ml-4" ref={(el) => (toggle.current[4] = el)}>
                  <li>
                    <input type="checkbox" name="" id="" /> Mogadisho
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" /> Banadir
                  </li>
                </ul>
              </li>
              <li className="text-sm">
                <h1
                  className=" cursor-pointer font-semibold text-cyan-500"
                  onClick={() => handleToggle(5)}
                >
                  TURKEY
                </h1>
                <ul className="ml-4" ref={(el) => (toggle.current[5] = el)}>
                  <li>
                    <input type="checkbox" name="" id="" /> Istanbul
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" /> Konya
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" /> Izmir
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" /> Ankara
                  </li>
                </ul>
              </li>
              <li className="text-sm ">
                <h1
                  className=" cursor-pointer font-semibold text-cyan-500"
                  onClick={() => handleToggle(6)}
                >
                  ETHOPIA
                </h1>
                <ul className="ml-4" ref={(el) => (toggle.current[6] = el)}>
                  <li>
                    <input type="checkbox" name="" id="" /> Addis-ababa
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" /> Jig-jiga
                  </li>
                </ul>
              </li>
            </ul>
            <h2
              className="font-ulHeader text-xl flex items-center  relative  cursor-pointer  tracking-wide"
              onClick={() => handleToggle(1)}
            >
              PROPERTY TYPE
              {propertyHidden ? (
                <span>
                  <img
                    src={upArrow}
                    width={20}
                    alt=""
                    className="absolute inset-x-28 inset-y-1 cursor-pointer"
                  />
                </span>
              ) : (
                <span>
                  <img
                    src={downArrow}
                    width={20}
                    alt=""
                    className="absolute inset-x-28 inset-y-1 cursor-pointer"
                  />
                </span>
              )}
            </h2>

            <ul
              className="font-uls mb-4  "
              ref={(el) => (toggle.current[1] = el)}
            >
              <li className="text-base">
                <input type="checkbox" className="mr-2 " /> Apartment
              </li>
              <li className="text-base">
                <input type="checkbox" className="mr-2" /> Villa
              </li>
              <li className="text-base">
                <input type="checkbox" className="mr-2" /> Building
              </li>
              <li className="text-base">
                <input type="checkbox" className="mr-2" /> Noraml-houses
              </li>
            </ul>
            <h2
              className="font-ulHeader text-xl  relative cursor-pointer  tracking-wide"
              onClick={() => handleToggle(7)}
            >
              CONTRACT TYPE
              {contractHidden ? (
                <span>
                  <img
                    src={upArrow}
                    width={20}
                    alt=""
                    className="absolute inset-x-28 inset-y-1 cursor-pointer"
                  />
                </span>
              ) : (
                <span>
                  <img
                    src={downArrow}
                    width={20}
                    alt=""
                    className="absolute inset-x-28 inset-y-1 cursor-pointer"
                  />
                </span>
              )}
            </h2>
            <ul className="font-uls" ref={(el) => (toggle.current[7] = el)}>
              <li className="text-base">
                <input type="checkbox" className="mr-2 " /> Rent
              </li>
              <li className="text-base">
                <input type="checkbox" className="mr-2" /> Sale
              </li>
            </ul>
          </div>
          <button className="mt-6 ml-4 mb-4 bg-cyan-900 text-white hover:text-black tracking-widest  hover:bg-amber-400 border border-black rounded-md px-14 py-1 font-uls">
            FILTER
          </button>
        </div>

        {/**CARD'S PART */}
        <Link to={"/"}>
          <button
            onClick={handleBug}
            className="absolute border border-black px-4 py-2 bg-cyan-900  text-white font-semibold right-10 top-0 rounded-md focus:drop-shadow-2xl  hover:text-white hover:-translate-y-1 hover:scale-110 duration-300 hover:text-black hover:font-bold"
          >
            Go Back
          </button>
        </Link>
        <div className="absolute left-72 px-4 py-2 top-2  h-96 w-9/12">
          <h2 className="text-base w-full font-uls tracking-wide relative">
            Showing{" "}
            <span> {searchedProperties[0]?.searchList[0]?.length} </span>
            results
          </h2>
          <p
            className={
              searchedProperties[0]?.searchList[0]?.length <= 0 ||
              searchedProperties[0]?.searchList[0] === undefined
                ? "text-2xl text-start mt-0 "
                : "hidden"
            }
          >
            no results found
          </p>
          <div
            className={
              searchedProperties[0]?.searchList[0] <= 0
                ? "hidden"
                : " py-4 flex items-center overflow-auto "
            }
          >
            {searchedList}
          </div>
          <div className="mt-4 border-t border-black">
            <h2>Similar Propeties</h2>
            <div className="py-4 flex  flex-wrap tems-center  overflow-y-auto">
              {simirlarList}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
