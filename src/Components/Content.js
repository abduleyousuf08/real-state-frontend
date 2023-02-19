import "../App.css";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { MdTabUnselected } from "react-icons/md";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { ImLocation } from "react-icons/im";
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
      </div>
    </div>
  );
}

export default Content;
