import "./HouseShow.css";
import house from "../../images/card-image.jpg";
import React from "react";
import image from "../../images/house.jpg";

import { MdMeetingRoom } from "react-icons/md";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

function HouseShow() {
  return (
    <div className="house-container">
      <div className="container-header">
        <h1>Latest Real Estate</h1>
      </div>
      <p className="container-paragraph">
        Find the latest homes for sale, property news & real estate market data
      </p>
      <div className="container-card">
        <MDBCard className="child-card">
          <MDBCardImage
            src={image}
            position="top"
            alt="..."
            className="card-image"
          />
          <MDBCardBody>
            <MDBCardTitle className="card-header">
              <a href="#"> Via di Boccea St.</a>
            </MDBCardTitle>
            <p className="card-paragraph">
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
              <Link to={"/propertyInfo"}>
                <button>Browse</button>
              </Link>
            </div>
          </MDBCardBody>
        </MDBCard>
        {/**second card */}
        <MDBCard className="child-card">
          <MDBCardImage
            src={image}
            position="top"
            alt="..."
            className="card-image"
          />
          <MDBCardBody>
            <MDBCardTitle className="card-header">
              Via di Boccea St.
            </MDBCardTitle>
            <p className="card-paragraph">
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
        {/**third card */}
        <MDBCard className="child-card">
          <MDBCardImage
            src={image}
            position="top"
            alt="..."
            className="card-image"
          />
          <MDBCardBody>
            <MDBCardTitle className="card-header">
              Via di Boccea St.
            </MDBCardTitle>
            <p className="card-paragraph">
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
        {/**fourth card */}
        <MDBCard className="child-card">
          <MDBCardImage
            src={image}
            position="top"
            alt="..."
            className="card-image"
          />
          <MDBCardBody>
            <MDBCardTitle className="card-header">
              Via di Boccea St.
            </MDBCardTitle>
            <p className="card-paragraph">
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
        {/**5th */}
      </div>
    </div>
  );
}

export default HouseShow;
