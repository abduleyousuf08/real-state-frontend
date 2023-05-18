import React from "react";
import { Link } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import GeneralContext from "../Context/ContextApi";
import { Card, Row, Col } from "react-bootstrap";

//images
import userImage from "../Assets/user.jpg";
import gurosamo from "../images/edited-images/guryo-same.png";
import downArrow from "../Assets/down-arrow.png";
import upArrow from "../Assets/up-arrow.png";

const Properties = () => {
  const { searchedProperties, getSearchedProperties } =
    useContext(GeneralContext);
  const toggle = useRef([]);
  ////
  const [countryHidden, setCountryHidden] = useState(false);
  const [propertyHidden, setPropertyHidden] = useState(false);
  const [contractHidden, setContractHidden] = useState(false);

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

  ///////
  const searchedList = searchedProperties[0]?.searchList?.map((house) => {
    return (
      <Card className="" style={{ width: "20rem" }}>
        {/* <Link to={`/product/${product._id}`}> */}
        <Card.Img src={house.images[0].url} className="aspect-video" />
        {/* </Link> */}

        <Card.Body>
          {/* <Link to={`/product/${product._id}`}> */}
          <Card.Title
            as="div"
            className="overflow-hidden text-ellipsis whitespace-nowrap"
          >
            <strong>{house?.propertyType}</strong>
          </Card.Title>
          {/* </Link> */}
          <Card.Text>Waa guri kiro ah o banaan</Card.Text>

          <Card.Text as="h3">$ {house?.price}</Card.Text>
        </Card.Body>
      </Card>
    );
  });

  console.log(searchedProperties);
  // console.log(searchedProperties[0].searchList.length);

  //////////
  return (
    <div>
      <nav className="flex items-center justify-between px-12 bg-cyan-900 ">
        {/* <Link to={"/"} className="text-white text-2xl"> */}
        <a href="/">
          <img src={gurosamo} alt="" className="w-23 h-20" />
        </a>
        {/* </Link> */}

        <section className="flex items-center">
          <input
            type="text"
            placeholder="SEARCH HOME"
            className="mr-4 py-1 rounded-md pl-8 outline-none font-abc"
          />

          <Link to={"/dashboard"}>
            <img
              src={userImage}
              width={44}
              alt=""
              className="rounded-full aspect-square"
            />
          </Link>
        </section>
      </nav>
      {/**BODY OF THIS CONTENT */}

      <div className=" mt-8 flex items-center justify-between px-10 relative ">
        {/**SEARCH PART  */}
        <div>
          <div className="border-2 border-r-black px-6 py-2 max-h-96   overflow-y-scroll">
            <h2
              className="font-ulHeader text-xl flex items-center relative cursor-pointer tracking-wide "
              onClick={() => handleToggle(0)}
            >
              CHOOSE COUNTRY
              {countryHidden ? (
                <span>
                  <img
                    src={upArrow}
                    width={20}
                    alt=""
                    className="absolute mr-2 inset-x-28 inset-y-1 cursor-pointer"
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
              <li>
                <h1 className="font-semibold" onClick={() => handleToggle(3)}>
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

              <li className="text-base">
                <h1 className="font-semibold" onClick={() => handleToggle(4)}>
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
              <li className="text-base">
                <h1
                  className=" cursor-pointer font-semibold"
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
              <li className="text-base">
                <h1 className="cursor-pointer" onClick={() => handleToggle(6)}>
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
              className="font-ulHeader text-xl flex items-center  relative  cursor-pointer tracking-wide"
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
              className="font-ulHeader text-xl  relative cursor-pointer tracking-wide"
              onClick={() => handleToggle(3)}
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
            <ul className="font-uls" ref={(el) => (toggle.current[2] = el)}>
              <li className="text-base">
                <input type="checkbox" className="mr-2 " /> Rent
              </li>
              <li className="text-base">
                <input type="checkbox" className="mr-2" /> Sale
              </li>
            </ul>
          </div>
          <button className="mt-6 ml-4 bg-cyan-900 text-white hover:text-black tracking-widest  hover:bg-amber-400 border border-black rounded-md px-14 py-1 font-uls">
            FILTER
          </button>
        </div>

        {/**CARD'S PART */}
        <Link to={"/"}>
          <button className="absolute border border-black px-4 py-2 bg-cyan-900  text-white font-semibold right-10 top-0 rounded-md active:drop-shadow-2xl  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-black hover:font-bold">
            Go Back
          </button>
        </Link>
        <div className="absolute left-72 px-4 py-2 top-2  h-96 w-96">
          <h2 className="text-base relative">
            Showing (<span>{searchedProperties[0]?.searchList?.length}</span>)
            results
            <p
              className={
                searchedProperties[0]?.searchList.length <= 0
                  ? "text-2xl w-96 text-start mt-2 "
                  : "hidden"
              }
            >
              No resuls found Similar-Properties
            </p>
          </h2>
          <div className="mt-4">
            <Row>
              <Col sm={12} md={6} lg={4} xl={3}>
                {searchedList}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
