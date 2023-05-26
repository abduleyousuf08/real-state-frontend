import "../index.css";
import { useLocation } from "react-router-dom";
import React, { useContext } from "react";
import { BiUserCheck } from "react-icons/bi";
import { Link } from "react-router-dom";
import defaultProfile from '../Assets/Profile.jpg'
import { IoNotifications, IoChatbubblesSharp } from 'react-icons/io5'
import { FaLongArrowAltRight } from 'react-icons/fa'
//images
import guryoSame from "../images/edited-images/guryo-same.png";
import { AuthContext } from "../Context/AuthContext";

const Header = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext)
  const isHomepage = location.pathname === "/";
  const token = localStorage.getItem("token");
  const parsedToken = token ? JSON.parse(token) : null;
  const tokenValue = parsedToken ? parsedToken.token : null;

  const isUserSignedIn = !!tokenValue
  

  return (
    <div className="w-full">
      {isHomepage && isUserSignedIn ? (
        // Condition: isHomepage: true and isUserSignedIn: true
        <div className="w-full h-20" style={{ backgroundColor: "#143D59" }}>
          <div className=" flex items-center justify-around mr-20 text-white font-bold">
            <div className="flex gap-10">
              <Link to={'/'}><img src={guryoSame} alt="logo" className="cursor-pointer inline w-32" /></Link>
              <ul className="flex gap-10 items-center ">
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">Properties</li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">Agents</li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">Contact Us</li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">About Us</li>
              </ul>
            </div>
            <div className="flex items-center gap-5 ml-56 text-white" >
              <IoNotifications className="w-7 h-8 cursor-pointer"/>
              <Link to={'/chat'}>
                <IoChatbubblesSharp className="w-7 h-8 cursor-pointer"/>
              </Link>
              <Link to={'/dashboard'}>
                <img src={user?.image?.url || defaultProfile} alt="user" className=" w-10 h-10 rounded-full"/>
              </Link>
            </div>
          </div>
        </div> 
      ) : isHomepage && !isUserSignedIn ? (
        // Condition: isHomepage: true and isUserSignedIn: false
        <div className="absolute w-full" style={{ zIndex: 999 }}>
          <div className="flex items-center justify-around mr-20 text-white font-bold">
            <div className="flex gap-10">
              <Link to={'/'}><img src={guryoSame} alt="logo" className="cursor-pointer inline w-32" /></Link>
              <ul className="flex gap-10 items-center ">
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">Properties</li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">Agents</li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">Contact Us</li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">About Us</li>
              </ul>
            </div>
            <div className="flex items-center gap-5">
              <Link to={'/auth'}>
                <button style={{ order: 2 }} className="flex items-center gap-2 border rounded-lg h-9 px-2 py-1 bg-white text-black font-medium border-black ml-20 cursor-pointer hover:bg-amber-400 hover:text-white hover:border-white">
                  <BiUserCheck /> Sign in
                </button>
              </Link>
              <Link to={'/submitProperty'}>
                <button className="flex items-center gap-2 border-solid border-2  py-1 px-2 rounded-lg bg-white text-black font-medium border-black cursor-pointer hover:bg-amber-400 hover:text-white hover:border-white">
                  <FaLongArrowAltRight size={20} />
                  Submit Property
                </button>
              </Link>
            </div>
          </div>
        </div> 
      ) : isUserSignedIn ? (
        // Condition: isHomepage: false and isUserSignedIn: true
        <div className="w-full h-20" style={{ backgroundColor: "#143D59" }}>
          <div className=" flex items-center justify-around mr-20 text-white font-bold">
            <div className="flex gap-10">
              <Link to={'/'}><img src={guryoSame} alt="logo" className="cursor-pointer inline w-32" /></Link>
              <ul className="flex gap-10 items-center ">
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">Properties</li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">Agents</li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">Contact Us</li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">About Us</li>
              </ul>
            </div>
            <div className="flex items-center gap-5 ml-56 text-white" >
              <IoNotifications className="w-7 h-8 cursor-pointer"/>
              <Link to={'/chat'}>
                <IoChatbubblesSharp className="w-7 h-8 cursor-pointer"/>
              </Link>
              <Link to={'/dashboard'}>
                <img src={user?.image?.url || defaultProfile} alt="user" className=" w-10 h-10 rounded-full"/>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        // Condition: isHomepage: false and isUserSignedIn: false
        <div className="w-full h-20" style={{ backgroundColor: "#143D59" }}>
          <div className="flex items-center justify-around mr-20 text-white font-bold">
            <div className="flex gap-10">
              <Link to={'/'}><img src={guryoSame} alt="logo" className="cursor-pointer inline w-32" /></Link>
              <ul className="flex gap-10 items-center ">
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">Properties</li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">Agents</li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">Contact Us</li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">About Us</li>
              </ul>
            </div>
            <div className="flex items-center gap-5">
              <Link to={'/auth'}>
                <button style={{ order: 2 }} className="flex items-center gap-2 border rounded-lg h-9 px-2 py-1 bg-white text-black font-medium border-black ml-20 cursor-pointer hover:bg-amber-400 hover:text-white hover:border-white">
                  <BiUserCheck /> Sign in
                </button>
              </Link>
              <Link to={'/submitProperty'}>
                <button className="flex items-center gap-2 border-solid border-2  py-1 px-2 rounded-lg bg-white text-black font-medium border-black cursor-pointer hover:bg-amber-400 hover:text-white hover:border-white">
                  <FaLongArrowAltRight size={20} />
                  Submit Property
                </button>
              </Link>
            </div>
          </div>
        </div> 
      )}
    </div>

  );

};

export default Header;
