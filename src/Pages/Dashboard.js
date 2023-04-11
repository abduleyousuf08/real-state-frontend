import React from 'react'
import profile from '../Assets/Profile.jpg'
import { FaUserAlt, FaSearchLocation } from "react-icons/fa";
import { IoNotificationsSharp, IoCreate } from "react-icons/io5";
import { RiLogoutCircleRLine, RiHomeHeartFill } from "react-icons/ri";
import { TfiKey } from 'react-icons/tfi'
import { MdMapsHomeWork } from 'react-icons/md'
import { AiFillSchedule } from 'react-icons/ai'


import Profile from "../Components/User/Profile";
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useState } from 'react';
import Password from '../Components/User/Password';
import Preferences from '../Components/User/Preferences';
import CreateProperty from '../Components/CreateProperty';


function Dashboard() {
    const [activeComponent, setActiveComponent] = useState("Profile");
    const { user, setUser } = useContext (AuthContext)

    console.log(user) 
    function handleOnClick(){
        setUser(false)
        localStorage.removeItem("token")
    }

    const renderComponent = () => {
        switch(activeComponent) {
            case "Profile":
                return <Profile/>;
            case "Password":
                return <Password/>;
            case "Notifications":
                return <Preferences/>;
            case "Favorites":
                return;
            case "savedSearches":
                return;
            default:
                return null;
        }
    }

    const renderAgentComponent = () => {
        switch(activeComponent) {
            case "Profile":
                return <Profile/>;
            case "Password":
                return <Password/>;
            case "Listings":
                return ;
            case "CreateProperty":
                return <CreateProperty/>;
            case "Schedule":
                return ;
            case "Analytics":
                return; 
            default:
                return null;
        }
    }

    return (
        <main className='h-screen box-border'>
            <div className='h-full flex flex-row'>
                <aside className='bg-slate-100 border-2 flex flex-col w-64 h-full'>
                    <div className='flex flex-col  items-center pl-10 mt-5'>
                        <img src={profile} alt='profile' className='w-20 h-20 rounded-full object-cover'/>
                        <span className='font-bold'>{user?.name}</span>
                        <span className='text-sm text-gray-400'>{user?.agent === true ? 'Agent' : 'Client'}</span>
                    </div>
                    <div className='mt-6  ml-16'>
                        <span className={`flex items-center p-2 cursor-pointer gap-2   ${activeComponent === "Profile" ? 'font-bold text-amber-500' : "text-gray-500"}`} onClick={() => setActiveComponent("Profile")}>
                            <FaUserAlt className='fill-current'/> Edit Profile
                        </span>
                        <span className={`flex items-center p-2 cursor-pointer gap-2 ${activeComponent === "Password" ? "font-bold text-amber-500" : "text-gray-500"}`} onClick={() => setActiveComponent("Password")}> 
                            <TfiKey className='fill-current'style={{ strokeWidth: '1px' }}/>Password
                        </span>
                        {!user?.agent ? 
                        (
                            <>
                                <span className={`flex items-center p-2 cursor-pointer gap-2 ${activeComponent === "Notifications" ? "font-bold text-amber-500" : "text-gray-500"}`} onClick={() => setActiveComponent("Notifications")}> 
                                    <IoNotificationsSharp className='fill-current'/>Notifications
                                </span>
                                <span className={`flex items-center p-2 cursor-pointer gap-2 ${activeComponent === "Favorites" ? "font-bold text-amber-500" : "text-gray-500"}`} onClick={() => setActiveComponent("Favorites")}> 
                                    <RiHomeHeartFill className='fill-current'/>Favorites
                                </span>
                                <span className={`flex items-center p-2 cursor-pointer gap-2 ${activeComponent === "savedSearches" ? "font-bold text-amber-500" : "text-gray-500"}`} onClick={() => setActiveComponent("savedSearches")}> 
                                    <FaSearchLocation className='fill-current'/>Saved Searches
                                </span>
                            </>
                        ) : (
                            <>
                                <span className={`flex items-center p-2 cursor-pointer gap-2 ${activeComponent === "Listings" ? "font-bold text-amber-500" : "text-gray-500"}`} onClick={() => setActiveComponent("Listings")}> 
                                    <MdMapsHomeWork className='fill-current'/>Listings
                                </span>
                                <span className={`flex items-center p-2 cursor-pointer gap-2 ${activeComponent === "CreateProperty" ? "font-bold text-amber-500" : "text-gray-500"}`} onClick={() => setActiveComponent("CreateProperty")}> 
                                    <IoCreate className='fill-current'/>Create Property
                                </span>
                                <span className={`flex items-center p-2 cursor-pointer gap-2 ${activeComponent === "Schedule" ? "font-bold text-amber-500" : "text-gray-500"}`} onClick={() => setActiveComponent("Schedule")}> 
                                    <AiFillSchedule className='fill-current'/>Schedule 
                                </span>
                            </>
                        )}
                        <span className='flex items-center mt-10 p-2 cursor-pointer gap-2 text-red-600 font-semibold'  onClick={handleOnClick}> 
                                <RiLogoutCircleRLine className='fill-current'/>Logout
                        </span>
                    </div>
                </aside>
                <div className='flex-1'>{user?.agent ? renderAgentComponent () : renderComponent()}</div>
            </div>
            
        </main>
    )
}

export default Dashboard
