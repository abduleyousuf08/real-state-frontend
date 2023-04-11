import "./HouseInfo.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdTabUnselected } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdBedroomParent } from "react-icons/md";
import { MdMeetingRoom } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";

//images
import person from "../../images/abdule.jpg";
import person_two from "../../images/from.jpg";
import person_three from "../../images/to.jpg";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

//components

//images
import insideImage_one from "../../images/insideImage-1.jpg";
import insideImage_two from "../../images/insideImage-2.jpg";
import insideImage_three from "../../images/insideImage-3.jpg";
import insideImage_four from "../../images/insideImage-4.jpg";

import {
  MdOutlineMeetingRoom,
  MdOutlineBedroomParent,
  MdOutlineBathroom,
} from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";

function HouseInfo() {
  return (
    <div>
      <div className="sections-container">
        {/**the propery information part */}
        <div className="part-1">
          {/**the header */}
          <div className="header-container">
            <div>
              <h1 className="location-header">Via di Boccea St.</h1>
            </div>
            <div className="buttons-container">
              <button className="for-rent">For Rent</button>
              <button>House</button>
              <button>Available</button>
            </div>
          </div>
          {/** */}
          {/**the house property */}
          <div className="house-info-property">
            <div className="prop-one">
              <MdTabUnselected className="icon-one" />{" "}
              <p>
                {" "}
                <span>170</span> <br />
                Square fit
              </p>
            </div>
            <div className="prop-two">
              <MdOutlineMeetingRoom className="icon-two" />
              <p>
                <span>1</span> <br /> Room
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
            <div className="prop-three">
              <GiHomeGarage className="icon-three" />
              <p>
                {" "}
                <span>1</span> <br />
                Bathroom
              </p>
            </div>
          </div>
          {/**image scrolling */}
          <div className="images-container-section">
            <Carousel>
              <div>
                <img src={insideImage_one} />
              </div>
              <div>
                <img src={insideImage_two} />
              </div>
              <div>
                <img src={insideImage_three} />
              </div>
              <div>
                <img src={insideImage_four} />
              </div>
            </Carousel>
          </div>
          {/**property overview  */}
          <h1 className="overview">PROPERTY OVERVIEW</h1>
          <h2 className="border_bottom"></h2>
          <table className="table-container">
            <tr>
              <td className="black-light-color">Price</td>
              <td className="black-color-rasiin">$180</td>
              <td className="black-light-color">Refrence</td>
              <td className="black-color-rasiin">9876</td>
            </tr>
            {/** */}
            <tr>
              <td className="black-light-color">Contact Name</td>
              <td className="rest-color-design">Alice</td>
              <td className="black-light-color">Contact Phone</td>
              <td className="rest-color-design">Hand Work</td>
            </tr>
            {/** */}
            <tr>
              <td className="black-light-color">Year built</td>
              <td className="rest-color-design">1997</td>
              <td className="black-light-color">Type</td>
              <td className="rest-color-design">House</td>
            </tr>
            {/** */}
            <tr>
              <td className="black-light-color">Sold</td>
              <td className="rest-color-design">No</td>
              <td className="black-light-color">Contract</td>
              <td className="rest-color-design">Rent</td>
            </tr>
            {/** */}
            <tr>
              <td className="black-light-color">Status</td>
              <td className="rest-color-design">Available</td>
              <td className="black-light-color">Location</td>
              <td className="rest-color-design">Italy/Rome</td>
            </tr>
            {/** */}
            <tr>
              <td className="black-light-color">Home Area</td>
              <td className="rest-color-design">130 sqft</td>
              <td className="black-light-color">Lot demonsions</td>
              <td className="rest-color-design">20 x 30 ft</td>
            </tr>
            {/** */}
            <tr>
              <td className="black-light-color">Material</td>
              <td className="rest-color-design">Block</td>
              <td className="black-light-color">Rooms</td>
              <td className="rest-color-design">2</td>
            </tr>
            {/** */}
            <tr>
              <td className="black-light-color">Beds</td>
              <td className="rest-color-design">1</td>
              <td className="black-light-color">Baths</td>
              <td className="rest-color-design">1</td>
            </tr>
            {/** */}
            <tr>
              <td className="black-light-color">Garages</td>
              <td className="rest-color-design">1</td>
            </tr>
          </table>
          <div>
            <h1 className="property_discription">PROPERTY DISCRIPTION</h1>
            <h2 className="border_bottom"></h2>
            <p className="paragraph_discription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              reprehenderit, voluptas error cumque quaerat officia illo dolore
              molestias doloribus! Dolores sit repellat molestiae, cupiditate
              magnam quo ex nisi quia libero! Labore praesentium dolor
              doloremque quasi asperiores ipsam assumenda rem perspiciatis ad
              nulla? Aperiam ea, nihil neque illum modi alias dicta. Ipsam sit
              dolorum ex dolorem dicta praesentium exercitationem doloribus
              velit. Ducimus quia maxime rem cumque magni rerum inventore
              veritatis at similique labore ipsa deleniti unde, delectus qui
              nihil harum laboriosam atque, veniam illum earum eum amet? Amet
              tempore alias ad. Reprehenderit, eos officiis. Similique labore
              fuga, laborum consequuntur natus voluptas iusto sapiente
              recusandae id dolore saepe ipsam, nesciunt aperiam et a vitae?
              Architecto illo tenetur quibusdam temporibus, repellat enim
              aliquid? Quia, enim? Rerum earum deleniti sequi aperiam dolorum,
              cum nulla nisi nesciunt omnis illo est maxime repellat voluptatum
              corrupti, dolore aspernatur cumque dignissimos harum officia
              possimus enim nostrum. Eum, possimus?
            </p>
          </div>
          {/**similar properties */}

          <div className="similar_properties">
            <h1>SIMILAR PROPERTIES</h1>
            <h2 className="border_bottom"></h2>
          </div>

          <div className="house_card_container">
            <MDBCard className="house_child_card">
              <MDBCardImage
                src={insideImage_three}
                position="top"
                alt="..."
                className="house_card_image"
              />
              <MDBCardBody>
                <MDBCardTitle className="house_card_header">
                  <a href="#"> Via di Boccea St.</a>
                </MDBCardTitle>
                <p className="house_card_paragraph">
                  <CiLocationOn />
                  Via di Boccea St, Italy
                </p>
                <div className="property-info-card">
                  <div className="prop-one-card">
                    <div>
                      <MdMeetingRoom className="room-icon-card" />
                      <span>2</span>
                    </div>

                    <p>Rooms</p>
                  </div>
                  <div className="prop-two-card">
                    <div className="">
                      <MdBedroomParent className="bedroom-icon-card" />
                      <span>3</span>
                    </div>
                    <p>Bedroom</p>
                  </div>
                  <div className="prop-two-card">
                    <div>
                      <MdOutlineBathroom className="bedroom-icon-card" />
                      <span>4</span>
                    </div>
                    <p>Bath</p>
                  </div>
                </div>
                <div className="card-button">
                  <button>Browse</button>
                </div>
              </MDBCardBody>
            </MDBCard>
            {/**second card on houseInfo component */}
            <MDBCard className="house_child_card">
              <MDBCardImage
                src={insideImage_four}
                position="top"
                alt="..."
                className="house_card_image"
              />
              <MDBCardBody>
                <MDBCardTitle className="house_card_header">
                  <a href="#"> Via di Boccea St.</a>
                </MDBCardTitle>
                <p className="house_card_paragraph">
                  <CiLocationOn />
                  Via di Boccea St, Italy
                </p>
                <div className="property-info-card">
                  <div className="prop-one-card">
                    <div>
                      <MdMeetingRoom className="room-icon-card" />
                      <span>2</span>
                    </div>

                    <p>Rooms</p>
                  </div>
                  <div className="prop-two-card">
                    <div className="">
                      <MdBedroomParent className="bedroom-icon-card" />
                      <span>3</span>
                    </div>
                    <p>Bedroom</p>
                  </div>
                  <div className="prop-two-card">
                    <div>
                      <MdOutlineBathroom className="bedroom-icon-card" />
                      <span>4</span>
                    </div>
                    <p>Bath</p>
                  </div>
                </div>
                <div className="card-button">
                  <button>Browse</button>
                </div>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>

        {/**this part is house owner information and contact */}

        <div className="owner_card">
          <div className="first_owner">
            <div className="">
              {" "}
              <img src={person} alt="" className="circle_container" />
            </div>
            <h3 className="owner-header">Peter Ruck</h3>
            <p className="owner_paragraph">
              {" "}
              <span>
                <HiOutlineMail />
              </span>{" "}
              info@gmail.com
            </p>
            <p className="owner-phone">
              <span>
                <BiPhone />
              </span>{" "}
              +252633502241
            </p>
          </div>
          {/** */}
          <div className="second_owner">
            <img src={person_two} alt="" className="circle_container" />
            <h3 className="owner-header">Britney Doe</h3>
            <p className="owner_paragraph">
              <span>
                <HiOutlineMail />
              </span>{" "}
              info@gmail.com
            </p>
            <p className="owner-phone">
              {" "}
              <span>
                <BiPhone />
              </span>{" "}
              +252634424143
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseInfo;
