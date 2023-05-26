import "../index.css";

//REACT HOOKS
import { AiOutlineHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import GeneralContext from "../Context/ContextApi";

//ICONS
import { IoIosCall } from "react-icons/io";
import { BsFillChatDotsFill } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { AiTwotoneMail } from "react-icons/ai";
import axios from "axios";

//IMAGES

import wrong from "../images/edited-images/wrong.png";
import plus from "../images/edited-images/plus.png";
import twitter from "../images/edited-images/twitter.png";
import facebook from "../images/edited-images/facebook.png";
import instagram from "../images/edited-images/instagram.png";
import snapchat from "../images/edited-images/snapchat.png";

//COMPONENTS
import Header from "../Components/Header.js";

const Content = () => {
  const [expendedIndex, setExpendedIndex] = useState(-1);

  const {
    loading,
    isLoading,
    handleNext,
    handlePrev,
    showIndex,
    renderActiveOne,
    setInputs,
    inputs,
    getSearchedProperties,
  } = useContext(GeneralContext);

  const divEl = useRef();
  

  ///DROPDOWN
  const dropDown = [
    {
      id: "a",
      label: "Best Interest rates On The Market",
      desc: "the value we provide to you is more than anything else ",
    },
    {
      id: "b",
      label: "Prevent Unstable Prices",
      desc: "the value we provide to you is more than anything nothing",
    },
    {
      id: "c",
      label: "Best Price On The Market ",
      desc: "the value we provide to you is more than anything oky",
    },
    {
      id: "d",
      label: "Security Of Your Data",
      desc: "the value we provide to you is more than anything alright",
    },
  ];
  ////
  const renderedDropdown = dropDown.map((item, index) => {
    const isExpended = index === expendedIndex;
    const discription = isExpended && item.desc;
    const icon = isExpended ? (
      <span>
        <img
          src={wrong}
          alt=""
          className="cursor-pointer icon-image-content"
          onClick={() => setExpendedIndex(-1)}
        />
      </span>
    ) : (
      <span>
        <img
          src={plus}
          alt=""
          className="cursor-pointer  icon-image-content "
          onClick={() => setExpendedIndex(index)}
        />
      </span>
    );

    return (
      <div key={item.id}>
        <div className="items-body 2xl:w-full">
          <div className="container-item">
            <h1 className="item-label">
              {item.label}
              {icon}
            </h1>
            <p className="discription-content">{discription}</p>
          </div>
        </div>
      </div>
    );
  });
  //TYPES of properties RENT / SALE
  const types = [
    {
      id: "a",
      label: " 🏠 LATEST PROPERTY FOR RENT",
      desc: " :  Choose your property based on your needs",
    },
    {
      id: "b",
      label: " 🏠 LATEST PROPERTY FOR SALE",
      desc: " : Choose your property based on your needs",
    },
  ];

  // Enabling if user clicks the plus icon to show the description of that topic
  const renderTypes = types.map((type, index) => {
    const show = index === showIndex;
    return (
      <div key={type.id} className="flex items-center">
        <div className="mr-2 mt-2 2xl:font-bold label-desing">
          {show && type.label}
        </div>
        <div>{show && type.desc}</div>
      </div>
    );
  });

  if (loading && isLoading) {
    return <div>LOADING....</div>;
  }

  ////
  return (
    <div className="content-component">
      <div className="ml-32  2xl:mt-10 ">
        <h1 className=" content-header">
          Sell or Rent Your Home <br /> at the Best Price
        </h1>
      </div>
      {/**rent and sell part */}
      <div className="selection-group">
        <button
          className="sell-button"
          onClick={() => setInputs({ ...inputs, contract: "sale" })}
        >
          Sell
        </button>

        <button
          className="rent-button"
          onClick={() => setInputs({ ...inputs, contract: "rent" })}
        >
          Rent
        </button>
      </div>
      {/** search part*/}
      <div className="search-types-container">
        <div className=" flex items-center types-selection">
          <AiOutlineHome className="mr-1 home-icon" />

          <select
            name="#"
            id="#"
            className="selection-options"
            onChange={(e) => setInputs({ ...inputs, options: e.target.value })}
          >
            <option value="#">Property Type</option>
            <option value="villa">Villa</option>
            <option value="building">Building</option>
            <option value="apartment">Apartment</option>
            <option value="house">Normal-houses</option>
          </select>
        </div>
        <div className=" flex items-center input-field">
          <BsSearch className="search-icon" />
          <input
            type="text"
            placeholder=" Search by location "
            onChange={(e) => setInputs({ ...inputs, search: e.target.value })}
          />
          <div className="button-field">
            <Link to={"/properties"}>
              <button className="button-search" onClick={getSearchedProperties}>
                Search
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/** content 3 */}
      <div className="content3">
        <div className=" flex items-center types-property">
          <div className=" types-model">{renderTypes}</div>

          <button onClick={handlePrev} className="ml-20 icon-prev">
            <GrPrevious />
          </button>
          <button onClick={handleNext} className=" ml-20 icon-next">
            <GrNext />
          </button>
        </div>
      </div>
      {/**content 4*/}

      <div className="relative top-6 2xl:top-0 card-content">
        {renderActiveOne()}
      </div>

      {/**content 5 */}
      <div className="flex items-center   relative content-5-container ">
        <div className="absolute top-0 left-16 2xl:left-40">
          <video
            className="aspect-video 2xl:w-full"
            width="600 "
            height="340"
            autoplay
            loop
            controls
          >
            <source
              src="https://player.vimeo.com/external/539010630.sd.mp4?s=eece48149dc657ed00be70b5c104a962ca5e7f95&profile_id=164&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
        </div>

        <div ref={divEl} className="ml-20 absolute right-16 2xl:right-72 ">
          <h1 className=" 2xl:text-4xl content-five-header">
            VALUE WE GIVE TO YOU
          </h1>
          <p className="content-five-paragraph">
            Here is the services we provide to support your needs
          </p>
          {renderedDropdown}
        </div>
      </div>
      {/**Content 6 */}
      <div className=" flex content-six">
        <div>
          <div className="content-six-first-section">
            <h4 className="sub-header-one">Contact us</h4>
            <h1 className="flex items-center sub-header-two">
              Easy to contact us
              <span className="mini-dot">
                <RxDotFilled />
              </span>
            </h1>
            <p className="sub-paragrpah-desc">
              Is there a problem finding your dream home
              <span className="question-mark"> ? </span> need a
              <br /> guide in buying your first home{" "}
              <span className="question-mark"> ? </span> or need a consultation{" "}
              <br /> on resedential issues{" "}
              <span className="question-mark"> ? </span> just contact us
            </p>
          </div>
          {/** SECTION SUB-THREE */}
          <div>
            <div className="flex  sub-content">
              <div className="flex mr-20 sub-container">
                {/** ICON CALL */}
                <div className="image-container">
                  <IoIosCall size={56} color="#f4b41a" className="icon-image" />
                </div>

                <div className="content-six-part-two">
                  <h2 className="call-header">CALL</h2>
                  <p className="number-paragrph">+252633502241</p>
                  <button className="call-now-btn">Call Now</button>
                </div>
              </div>
              {/** PART 2  ....*/}
              <div className="flex mr-20 sub-container">
                {/** ICON CALL */}
                <div className=" 2xl:w-2/4 image-container-two">
                  <BsFillChatDotsFill
                    size={45}
                    color="#f4b41a"
                    className="2xl:pt-2 icon-image"
                  />
                </div>

                <div className="content-six-part-two">
                  <h2 className="call-header">CHAT</h2>
                  <p className="number-paragrph">+252634424143</p>
                  <button className="call-now-btn-two">Chat Now</button>
                </div>
              </div>
            </div>
            {/**PART 3 */}
            <div className="flex sub-container-two">
              <div className="image-container-three">
                <AiTwotoneMail
                  size={45}
                  color="#f4b41a"
                  className="icon-image"
                />
              </div>

              <div className="content-six-part-two">
                <h2 className="call-header">MESSAGE</h2>
                <p className="number-paragrph">+252634424143</p>
                <button className="call-now-btn-three">Message Now</button>
              </div>
            </div>
          </div>
        </div>
        {/**SECTION TWO */}
        <div className="image-container-last">
          <div className="image-sub-container">
            <img
              src="https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="size-of-image"
            />
          </div>
        </div>
      </div>
      {/**CONTENT EIGHT */}
      <div className="content-eight">
        <div className="sub-content-eight">
          <h1 className="content-eight-header">
            Get Started With Your New House
          </h1>
          <p className="content-eight-paraghraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit <br />{" "}
            Voluptate repellat nihil laboriosam, dolore quas nemo ratione,
            <br /> totam quae maxime est minima dolorem quis fugit itaque ipsa
            aspernatur impedit reprehenderit laborum?
          </p>
          <button className="content-eight-button">GET STARTED</button>
        </div>
      </div>
      {/** CONTENT NINE*/}
      <div className="content-nine-update">
        <div className="sub-content-container">
          <div className="links-container">
            <div className="links-imgs">
              <a href="">
                <img src={facebook} alt="" />
              </a>
              <a href="">
                <img src={instagram} alt="" />
              </a>
              <a href="">
                <img src={twitter} alt="" />
              </a>
              <a href="">
                <img src={snapchat} alt="" />
              </a>
            </div>
            <div className="links">
              <a href="#">HOME</a>
              <a href="#">ABOUT</a>
              <a href="#">CONTACT US</a>
              <a href="#">PRIVACY & POLICIES</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
