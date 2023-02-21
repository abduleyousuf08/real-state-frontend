import "./content.css";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { MdTabUnselected } from "react-icons/md";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { GiArcheryTarget } from "react-icons/gi";
function Content() {
  return (
    <div>
      <div className="background">
        {/*this will be scrolling part click*/}

        <div className="scroll-buttons">
          <div className="button-one">
            <a href="#">
              <GrFormPrevious />
            </a>{" "}
          </div>
          <div className="button-two">
            <a href="#">
              {" "}
              <GrFormNext />
            </a>
          </div>
        </div>

        {/*the property information part*/}

        <div className="property-info">
          {/*the location of that house and the common district */}
          <a href="#" className="main-location">
            <h1>West Broadway street</h1>
          </a>
          <p>
            {" "}
            <ImLocation className="icon-location" />
            42 jigjigayar street 10
          </p>
          {/*the propert information will be flex */}
          <div className="information-house">
            <div className="prop-one">
              <MdTabUnselected className="icon-one" />{" "}
              <p>
                {" "}
                <span>170</span> <br />
                Square fit
              </p>
            </div>
            <div className="prop-two">
              <MdOutlineBedroomParent className="icon-two" />
              <p>
                <span>1</span> <br /> Bedroom
              </p>
            </div>
            <div className="prop-three">
              <MdOutlineBathroom className="icon-three" />
              <p>
                {" "}
                <span>1</span> <br />
                Bathroom
              </p>
            </div>
          </div>
          {/*sale button */}
          <button className="sale-btn">Sale</button>
        </div>

        {/**search bar content */}

        {/**sale and rent choice */}

        <div className="sale-rent-choice">
          <div className="rent">
            <a href="#">Rent</a>
          </div>
          <div className="sale">
            {" "}
            <a href="#">Sale</a>
          </div>
        </div>
        <div className="main-parent">
          {/**propery filter search like location status metarial */}
          <div className="sub-main-parent">
            <div className="location-container">
              <label className="label-location">Location </label>

              <select name="#" id="#" className="selection-location">
                <option value="#" className="all-location">
                  All location <br />
                  <IoMdArrowDropdown className="icon-drop-down" />
                </option>
                <option value="#">Hargeisa</option>
                <option value="#">Borama</option>
                <option value="#">Burao</option>
                <option value="#">Berbera</option>
                <option value="#">Cerigavo</option>
              </select>
            </div>
            <div className="property-container">
              <label className="label-property">Property type </label>

              <select name="#" id="#" className="selection-property">
                <option value="#">All property types</option>
                <option value="#">Building</option>
                <option value="#">Apartment</option>
                <option value="#">House</option>
                <option value="#">Villa</option>
              </select>
            </div>
            <div className="status-container">
              {" "}
              <label className="label-property">Status </label>
              <select name="#" id="#" className="selection-status">
                <option value="#">All Statuses</option>
                <option value="#">Available</option>
                <option value="#">Rent agreed</option>
                <option value="#">Reserved</option>
                <option value="#">Sell agreed</option>
              </select>
            </div>
            <div className="material-container">
              <label className="label-material">Material </label>
              <select name="#" id="#" className="selection-Material">
                <option value="#">All Materials</option>
                <option value="#">Block</option>
                <option value="#">Brick agreed</option>
                <option value="#">Mixed</option>
                <option value="#">Stone</option>
                <option value="#">Wood</option>
              </select>
            </div>
          </div>
          {/**that property price rooms and button search */}
          <div className="second-sub-main-parent">
            <div className="price-from-container">
              <label className="price-from-label">Price from </label>
              <input type="number" className="price-from-input" />
            </div>
            <div className="price-to-container">
              <label className="price-to-label">Price to</label>

              <input type="number" className="price-to-input" />
            </div>
            <div className="room-container">
              <label className="label-room">Rooms </label>
              <select name="#" id="#" className="selection-rooms">
                <br />
                <option value="#">Any</option>
                <option value="#">1+</option>
                <option value="#">2+</option>
                <option value="">3+</option>
                <option value="">4+</option>
              </select>
            </div>
            <button className="search-btn">Search</button>
          </div>
        </div>

        <div className="About-website-content">
          <div className="about-website-header">
            <h1>Best Real Estates</h1>
            <p>You need to do is very simple just join us</p>
          </div>
          <div className="about-website-child">
            <div>
              <div className="about-website-icon">
                <AiFillHome className="icon-website-about" />
              </div>
              <h3>Finds Your Home</h3>2 Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Expedita eaque quos soluta ad incidunt
              recusandae cumque, mollitia doloribus eligendi exercitationem et
              ducimus placeat, aliquid labore est voluptate vel dolores beatae.
            </div>
            <div>
              <div className="about-website-icon">
                <FaLock className="icon-website-about" />
              </div>
              <h3>Securing the property</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              eaque nesciunt reiciendis asperiores a ipsa consectetur dicta rem
              dolorum ea quis est deserunt corporis laboriosam tempora, ducimus
              quo aliquid quae? Recusandae similique quas tempore rem mollitia
            </div>
            <div>
              <div className="about-website-icon">
                <VscTools className="icon-website-about" />
              </div>
              <h3>Furnishing the property</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              eaque nesciunt reiciendis asperiores a ipsa consectetur dicta rem
              dolorum ea quis est deserunt corporis laboriosam tempora, ducimus
              quo aliquid quae? Recusandae similique quas tempore rem mollitia
            </div>
            <div>
              <div className="about-website-icon">
                <GiArcheryTarget className="icon-website-about" />
              </div>
              <h3>Providing legal support</h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus quae dolorem consectetur aliquid tenetur repellat rem
              impedit eum facilis veritatis dicta, labore temporibus sit natus
              optio excepturi culpa explicabo commodi.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
