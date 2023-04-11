import "../index.css";

import { AiOutlineHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useState, useRef, useEffect } from "react";
import { IoIosCall } from "react-icons/io";
import { BsFillChatDotsFill } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { AiTwotoneMail } from "react-icons/ai";

//images
import houses from "../images/edited-images/houses.png";
import wrong from "../images/edited-images/wrong.png";
import plus from "../images/edited-images/plus.png";
import call from "../images/edited-images/call.png";
import twitter from "../images/edited-images/twitter.png";
import facebook from "../images/edited-images/facebook.png";
import instagram from "../images/edited-images/instagram.png";
import snapchat from "../images/edited-images/snapchat.png";

//components
import RentCard from "../Components/RentCard";
import SaleCard from "../Components/SaleCard";

const Content = ({ types, rentPropertyTypes, salePropertyTypes, dropDown }) => {
  const [showIndex, setShowIndex] = useState(0);
  const [activeOne, setActiveOne] = useState("sale");
  const [expendedIndex, setExpendedIndex] = useState(-1);
  //

  const divEl = useRef();

  useEffect(() => {
    //checking if  nothing event happened to return nothing

    if (!divEl.current) {
      return;
    }
    //if the other content's or the body clicked setting back to -1 the expendedIndex no
    const elementClicked = (event) => {
      if (!divEl.current.contains(event.target)) {
        setExpendedIndex(-1);
      }
    };

    document.addEventListener("click", elementClicked, true);

    return () => {
      document.removeEventListener("click", elementClicked);
    };
  }, []);

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
        <div className="items-body">
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
  ////
  const handleNext = () => {
    const current = showIndex + 1;
    if (current > types.length - 1) {
      setActiveOne("sale");
      return setShowIndex(0);
    }
    setShowIndex(current);
    setActiveOne("rent");
  };
  ////
  const handlePrev = () => {
    const current = showIndex - 1;
    if (current < 0) {
      setActiveOne("rent");
      return setShowIndex(1);
    }
    setShowIndex(current);
    setActiveOne("sale");
  };

  ////
  const renderTypes = types.map((type, index) => {
    const show = index === showIndex;
    return (
      <div key={types.id} className="flex items-center">
        <div className="mr-2 mt-2 label-desing">{show && type.label}</div>
        <div>{show && type.desc}</div>
      </div>
    );
  });

  const rentComponent = salePropertyTypes.map((sale) => (
    <SaleCard sale={sale} />
  ));

  const saleComponent = rentPropertyTypes.map((rent) => (
    <RentCard rent={rent} />
  ));

  const renderActiveOne = () => {
    switch (activeOne) {
      case "sale":
        return saleComponent;
      case "rent":
        return rentComponent;
    }
  };

  ////
  return (
    <div className="content-component">
      <div className="ml-24 mt-20 content-header-container-one">
        <h1 className="content-header">
          Sell or Rent <br /> Your Home at <br />
          the Best Price
        </h1>
      </div>
      {/**rent and sell part */}
      <div className="selection-group">
        <div className="sell-button">
          <button>Sell</button>
        </div>
        <div className="rent-button">
          <button>Rent</button>
        </div>
      </div>
      {/** search part*/}
      <div className="search-types-container">
        <div className=" flex items-center types-selection">
          <AiOutlineHome className="mr-1 home-icon" />
          <select name="#" id="#" className="selection-options">
            <option value="#">Property Type</option>
            <option value="#">Public</option>
            <option value="#">Comercial</option>
            <option value="#">Govermental</option>
            <option value="#">Resedential</option>
          </select>
        </div>
        <div className=" flex items-center input-field">
          <BsSearch className="search-icon" />
          <input type="text" placeholder=" Search by location  " />
          <div className="button-field">
            <button className="button-search">Search</button>
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
      <div className="card-content">{renderActiveOne()}</div>

      {/**content 5 */}
      <div className="flex items-center content-5-container">
        <div>
          <img
            src="https://images.pexels.com/photos/1022936/pexels-photo-1022936.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="ml-20 content-five-image"
          />
        </div>

        <div ref={divEl} className="ml-60">
          <h1 className="content-five-header">
            VALUE WE GIVE <br /> TO YOU
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
                <div className="image-container-two">
                  <BsFillChatDotsFill
                    size={45}
                    color="#f4b41a"
                    className="icon-image"
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
