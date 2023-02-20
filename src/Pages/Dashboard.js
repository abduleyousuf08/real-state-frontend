import React from 'react'
import "../CSS/Dashboard.css";
import { CgProfile } from 'react-icons/cg'
import { BsHouseDoor, BsChatRightDots } from 'react-icons/bs'
import { AiOutlinePlusCircle, AiOutlineLogout } from 'react-icons/ai'
import Profile from '../Components/Profile'
import MyProperties from '../Components/MyProperties'
import CreateProperty from '../Components/CreateProperty'
import Messages from '../Components/Messages'
import { useState } from 'react';

function Dashboard() {
    const [activeComponent, setActiveComponent] = useState("Profile");

const renderComponent = () => {
    switch(activeComponent) {
    case "profile":
        return <Profile/>;
    case "MyProperties":
        return <MyProperties/>;
    case "CreateProperty":
        return <CreateProperty/>;
    case "Messages":
        return <Messages/>;
    default:
        return null;
    }
}
return (
    <div className='dashboard-container'>
    <div className='sidebar'>
        <div className='components'>
        <span className={`dashboard-icons ${activeComponent === "Profile" ? "active" : ""}`} onClick={() => setActiveComponent("Profile")}>
            <CgProfile/>
            Profile
        </span>
        <span className={`dashboard-icons ${activeComponent === "MyProperties" ? "active" : ""}`} onClick={() => setActiveComponent("MyProperties")}>
            <BsHouseDoor/>
            My Properties
        </span>
        <span className={`dashboard-icons ${activeComponent === "CreateProperty" ? "active" : ""}`} onClick={() => setActiveComponent("CreateProperty")}>
            <AiOutlinePlusCircle/>
            Create Property
        </span>
        <span className={`dashboard-icons ${activeComponent === "Messages" ? "active" : ""}`} onClick={() => setActiveComponent("Messages")}>
            <BsChatRightDots/>
            Messages
        </span>
        <span className='logout' onClick={() => setActiveComponent(null)}>
            <AiOutlineLogout/>
            Logout
        </span>
        </div>
    </div>
    <div className='content'>
        {renderComponent()}
    </div>
    </div>
)
}

export default Dashboard
