import "../index.css";
import { useLocation } from "react-router-dom";
import React, { useContext } from "react";
import { BiUserCheck } from "react-icons/bi";
import { Link } from "react-router-dom";
import defaultProfile from "../Assets/Profile.jpg";
import { IoNotifications, IoChatbubblesSharp } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
//images
import guryoSame from "../images/edited-images/guryo-same.png";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";




const Header = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const isHomepage = location.pathname === "/";
  const { notifications } = useContext(ChatContext)
  const token = localStorage.getItem("token");
  const parsedToken = token ? JSON.parse(token) : null;
  const tokenValue = parsedToken ? parsedToken.token : null;
  const isUserSignedIn = !!tokenValue
  
  const handleOnclick=()=>{
    window.location.reload(true);
  }


  return (
    <div className="w-full">
      {isHomepage && isUserSignedIn ? (
        // Condition: isHomepage: true and isUserSignedIn: true
        <div className="w-full h-20" style={{ backgroundColor: "#143D59" }}>
          <div className=" flex items-center justify-around mr-20 text-white font-bold">
            <div className="flex gap-10">
              <Link to={"/"}>
                <img
                  src={guryoSame}
                  alt="logo"
                  className="cursor-pointer inline w-32"
                />
              </Link>
              <ul className="flex gap-10 items-center ">
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">
                  Properties
                </li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">
                  Agents
                </li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">
                  Contact Us
                </li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">
                  About Us
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-5 ml-56 text-white" >
              <IoNotifications className="w-7 h-8 cursor-pointer"/>
              <Link to={'/chat'}>
              {notifications?.length === 0 ? <IoChatbubblesSharp className="w-7 h-8 cursor-pointer" /> : (
                <div className="relative">
                  <IoChatbubblesSharp className="w-7 h-8 cursor-pointer"/>
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold bg-red-500 rounded-full text-white">
                    {notifications?.length}
                  </span>
                </div>
              )}
              </Link>
              <Link to={"/dashboard"}>
                <img
                  src={user?.image?.url || defaultProfile}
                  alt="user"
                  className=" w-10 h-10 rounded-full"
                />
              </Link>
            </div>
          </div>
        </div>
      ) : isHomepage && !isUserSignedIn ? (
        // Condition: isHomepage: true and isUserSignedIn: false
        <div className="absolute w-full" style={{ zIndex: 999 }}>
          <div className="flex items-center justify-around mr-20 text-white font-bold">
            <div className="flex gap-10">
              <Link to={"/"}>
                <img
                  src={guryoSame}
                  alt="logo"
                  className="cursor-pointer inline w-32"
                />
              </Link>
              <ul className="flex gap-10 items-center ">
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">
                  Properties
                </li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">
                  Agents
                </li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">
                  Contact Us
                </li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">
                  About Us
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-5">
              <Link to={"/auth"}>
                <button
                  style={{ order: 2 }}
                  className="flex items-center gap-2 border rounded-lg h-9 px-2 py-2 bg-white text-black font-medium border-black ml-20 cursor-pointer hover:bg-amber-400 "
                >
                  <BiUserCheck /> Sign in
                </button>
              </Link>
              <Link to={"/submitProperty"}>
                <button className="flex items-center gap-2 border border-#6222c  py-2 px-4 rounded-lg bg-black text-white  cursor-pointer ">
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
              <Link to={"/"}>
                <img
                  src={guryoSame}
                  alt="logo"
                  className="cursor-pointer inline w-32"
                />
              </Link>
              <ul className="flex gap-10 items-center ">
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">
                  Properties
                </li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">
                  Agents
                </li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">
                  Contact Us
                </li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">
                  About Us
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-5 ml-56 text-white" >
              <IoNotifications className="w-7 h-8 cursor-pointer"/>
              <Link to={'/chat'}>
              {notifications?.length === 0 ? <IoChatbubblesSharp className="w-7 h-8 cursor-pointer" />  : (
                <div className="relative">
                  <IoChatbubblesSharp className="w-7 h-8 cursor-pointer" ></IoChatbubblesSharp>
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold bg-red-500 rounded-full text-white">
                    {notifications?.length}
                  </span>
                </div>
              )}
              </Link>
              <Link to={"/dashboard"}>
                <img
                  src={user?.image?.url || defaultProfile}
                  alt="user"
                  className=" w-10 h-10 rounded-full"
                />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        // Condition: isHomepage: false and isUserSignedIn: false
        <div className="w-full h-20" style={{ backgroundColor: "#143D59" }}>
          <div className="flex items-center justify-around mr-20 text-white font-bold">
            <div className="flex gap-10">
              <Link to={"/"}>
                <img
                  src={guryoSame}
                  alt="logo"
                  className="cursor-pointer inline w-32"
                />
              </Link>
              <ul className="flex gap-10 items-center ">
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">
                  Properties
                </li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">
                  Agents
                </li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">
                  Contact Us
                </li>
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">
                  About Us
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-5">
              <Link to={"/auth"}>
                <button
                  style={{ order: 2 }}
                  className="flex items-center gap-2 border rounded-lg h-9 px-2 py-1 bg-white text-black font-medium border-black ml-20 cursor-pointer hover:bg-amber-400 hover:text-white hover:border-white"
                >
                  <BiUserCheck /> Sign in
                </button>
              </Link>
              <Link to={"/submitProperty"}>
                <button className="flex items-center gap-2  border border-#d6ccc2  py-1 px-2 rounded-lg bg-black  text-white   cursor-pointer  ">
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
