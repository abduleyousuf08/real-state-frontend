import "../index.css";

import { BiUserCheck } from "react-icons/bi";
import { Link } from "react-router-dom";
//images
import guryoSame from "../images/edited-images/guryo-same.png";
const Header = () => {
  return (
    <div className="header-component">
      <div className="flex ">
        {/**part 1 */}

        <img src={guryoSame} alt="" className="image-logo" />

        <div className="flex ml-40 mt-8 catogries">
          {/**main part options */}

          <button className="catogries-one">Properties</button>
          <button className="ml-10 catogries-two"> Agents</button>
          <button className="ml-10 catogries-three">Contact Us</button>
          <button className="ml-10 catogries-four">About Us</button>
        </div>
        {/**part 2 */}
        <button className="flex items-center ml-96 sign-in ">
          <BiUserCheck className="mr-1 sign-in-icon" /> Sign in
        </button>
      </div>
    </div>
  );
};

export default Header;
