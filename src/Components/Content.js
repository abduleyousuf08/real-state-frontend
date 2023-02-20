import "../CSS/Content.css";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { MdTabUnselected } from "react-icons/md";

function Content() {
  return (
    <div>
      <div className="background">
        {/*this will be scrolling part click*/}
        <div className="scroll-buttons">
          <a href="#">
            <GrFormPrevious />
          </a>{" "}
          <a href="#">
            {" "}
            <GrFormNext />
          </a>
        </div>

        {/*the property information part*/}

        <div className="property-info">
          {/*the location of that house and the common district */}
          <h1>West Broadway street</h1>
          <p>42 jigjigayar street 10</p>
          {/*the propert information will be flex */}
          <div className="information-house">
            <div>
              <p>
                {" "}
                <span>170</span> <br />
                Square fit
              </p>
            </div>
            <div>
              <p>
                <span>1</span> <br /> Bedroom
              </p>
            </div>
            <div>
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
