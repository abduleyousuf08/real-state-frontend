import React from 'react'
import './MyActivities.css';
import image from "../../images/house.jpg";
import { MdMeetingRoom } from "react-icons/md";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
} from "mdb-react-ui-kit";

function ViewedProperties() {
    const properties = [
        {
            id: 1,
            title: "Via di Boccea St.",
            location: "Via di Boccea St, Italy",
            rooms: 2,
            bedrooms: 3,
            bathrooms: 4,
        },
        {
            id: 2,
            title: "Another Property",
            location: "Some Location",
            rooms: 3,
            bedrooms: 4,
            bathrooms: 2,
        },
    ];

    return (
        <div className="my-activities-section">
            <div className="my-activities-grid">
                {properties.map(property => (
                    <div key={property.id} className="my-activities-card">
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
                                        <a href="#">{property.title}</a>
                                    </MDBCardTitle>
                                    <p className="card-paragraph">
                                        <CiLocationOn />
                                        {property.location}
                                    </p>
                                    <div className="property-info-card">
                                        <div className="prop-one-card">
                                            <div>
                                                <MdMeetingRoom className="room-icon-card" />
                                                <span>{property.rooms}</span>
                                            </div>
                                            <p>Rooms</p>
                                        </div>
                                        <div className="prop-two-card">
                                            <div className="">
                                                <MdBedroomParent className="bedroom-icon-card" />
                                                <span>{property.bedrooms}</span>
                                            </div>
                                            <p>Bedroom</p>
                                        </div>
                                        <div className="prop-two-card">
                                            <div>
                                                <MdOutlineBathroom className="bedroom-icon-card" />
                                                <span>{property.bathrooms}</span>
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
                ))}
            </div>
        </div>
    );
}

export default ViewedProperties
