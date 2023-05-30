import "../index.css";
import { useLocation } from "react-router-dom";
import React, { useContext, useState } from "react";
import { BiUserCheck } from "react-icons/bi";
import { Link as RouterLink } from "react-router-dom";
import defaultProfile from "../Assets/Profile.jpg";
import { IoNotifications, IoChatbubblesSharp } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

//images
import guryoSame from "../images/edited-images/guryo-same.png";

//CONTEXT
import { AuthContext } from "../Context/AuthContext";
import GeneralContext from "../Context/ContextApi";

const Header = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const isHomepage = location.pathname === "/";
  const token = localStorage.getItem("token");
  const parsedToken = token ? JSON.parse(token) : null;
  const tokenValue = parsedToken ? parsedToken.token : null;
  const isUserSignedIn = !!tokenValue;
  const [view, setView] = useState(false);
  const [viewTwo, setViewTwo] = useState(false);

  //NEW UPDATE HERE
  const { handleBug } = useContext(GeneralContext);

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
                <li
                  className="cursor-pointer hover:border-b-2 hover:border-amber-400 relative"
                  onMouseEnter={() => setView(true)}
                  onMouseLeave={() => setView(!view)}
                >
                  Properties
                  <br />
                  <div className={view ? " absolute top-10 w-80" : "hidden"}>
                    <div
                      id="alert-1"
                      class="flex p-4 mb-4 text-white rounded-lg bg-cyan-900 "
                      role="alert"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only">Info</span>
                      <div class="ml-3 text-sm font-medium">
                        Search Something {""}
                        <a
                          href="#"
                          class="font-semibold underline hover:no-underline"
                        >
                          {""}
                        </a>
                        inside home page and get access to this page
                      </div>
                      <button
                        type="button"
                        class="ml-auto -mx-1.5 -my-1.5 bg-amber-400 text-white rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 inline-flex h-8 w-8  "
                        data-dismiss-target="#alert-1"
                        aria-label="Close"
                      >
                        <span class="sr-only">Close</span>
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-black"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
                <li
                  className="cursor-pointer hover:border-b-2 hover:border-amber-400 relative"
                  onMouseEnter={() => setViewTwo(true)}
                  onMouseLeave={() => setViewTwo(!viewTwo)}
                >
                  Agents
                  <br />
                  <div className={viewTwo ? " absolute top-10 w-80" : "hidden"}>
                    <div
                      id="alert-1"
                      class="flex p-4 mb-4 text-white rounded-lg bg-cyan-900 "
                      role="alert"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only">Info</span>
                      <div class="ml-3 text-sm font-medium">
                        is under designing {""}
                        <a
                          href="#"
                          class="font-semibold underline hover:no-underline"
                        >
                          {""}
                        </a>
                        explore other pages
                      </div>
                      <button
                        type="button"
                        class="ml-auto -mx-1.5 -my-1.5 bg-amber-400 text-white rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 inline-flex h-8 w-8  "
                        data-dismiss-target="#alert-1"
                        aria-label="Close"
                      >
                        <span class="sr-only">Close</span>
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-black"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>

                <Link to="contact-us-section" smooth={true} duration={500}>
                  <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">
                    Contact Us
                  </li>
                </Link>
                <Link to="about-us-section" smooth={true} duration={500}>
                  <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">
                    About Us
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex items-center gap-5 ml-56 text-white">
              <IoNotifications className="w-7 h-8 cursor-pointer" />
              <RouterLink to={"/chat"}>
                <IoChatbubblesSharp className="w-7 h-8 cursor-pointer" />
              </RouterLink>
              <RouterLink to={"/dashboard"}>
                <img
                  src={user?.image?.url || defaultProfile}
                  W
                  alt="user"
                  className=" w-10 h-10 rounded-full"
                />
              </RouterLink>
            </div>
          </div>
        </div>
      ) : isHomepage && !isUserSignedIn ? (
        // Condition: isHomepage: true and isUserSignedIn: false
        <div className="absolute w-full" style={{ zIndex: 999 }}>
          <div className="flex items-center justify-around mr-20 text-white font-bold">
            <div className="flex gap-10">
              <RouterLink to={"/"}>
                <img
                  src={guryoSame}
                  alt="logo"
                  className="cursor-pointer inline w-32"
                />
              </RouterLink>
              <ul className="flex gap-10 items-center ">
                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">
                  Properties
                </li>
                <li
                  className="cursor-pointer hover:border-b-2 hover:border-amber-400 relative"
                  onMouseEnter={() => setViewTwo(true)}
                  onMouseLeave={() => setViewTwo(!viewTwo)}
                >
                  Agents
                  <br />
                  <div className={viewTwo ? " absolute top-10 w-80" : "hidden"}>
                    <div
                      id="alert-1"
                      class="flex p-4 mb-4 text-white rounded-lg bg-cyan-900 "
                      role="alert"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only">Info</span>
                      <div class="ml-3 text-sm font-medium">
                        is under designing {""}
                        <a
                          href="#"
                          class="font-semibold underline hover:no-underline"
                        >
                          {""}
                        </a>
                        explore other pages
                      </div>
                      <button
                        type="button"
                        class="ml-auto -mx-1.5 -my-1.5 bg-amber-400 text-white rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 inline-flex h-8 w-8  "
                        data-dismiss-target="#alert-1"
                        aria-label="Close"
                      >
                        <span class="sr-only">Close</span>
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-black"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
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
              <RouterLink to={"/auth"}>
                <button
                  style={{ order: 2 }}
                  className="flex items-center gap-2 border rounded-lg h-9 px-2 py-2 bg-white text-black font-medium border-black ml-20 cursor-pointer hover:bg-amber-400 "
                >
                  <BiUserCheck /> Sign in
                </button>
              </RouterLink>
              <RouterLink to={"/submitProperty"}>
                <button className="flex items-center gap-2 border border-#6222c  py-2 px-4 rounded-lg bg-black text-white  cursor-pointer ">
                  <FaLongArrowAltRight size={20} />
                  Submit Property
                </button>
              </RouterLink>
            </div>
          </div>
        </div>
      ) : isUserSignedIn ? (
        // Condition: isHomepage: false and isUserSignedIn: true
        <div className="w-full h-20" style={{ backgroundColor: "#143D59" }}>
          <div className=" flex items-center justify-around mr-20 text-white font-bold">
            <div className="flex gap-10">
              <RouterLink to={"/"}>
                <img
                  src={guryoSame}
                  alt="logo"
                  onClick={handleBug}
                  className="cursor-pointer inline w-32"
                />
              </RouterLink>
              <ul className="flex gap-10 items-center ">
                <Link to={"/"}>
                  <li
                    className="cursor-pointer hover:border-b-2 hover:border-amber-400 relative"
                    onMouseEnter={() => setView(true)}
                    onMouseLeave={() => setView(!view)}
                  >
                    Properties
                    <br />
                    <div
                      className={view ? " absolute top-10 w-80 z-50" : "hidden"}
                    >
                      <div
                        id="alert-1"
                        class="flex p-4 mb-4 text-white rounded-lg bg-cyan-900 "
                        role="alert"
                      >
                        <svg
                          aria-hidden="true"
                          class="flex-shrink-0 w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="sr-only">Info</span>
                        <div class="ml-3 text-sm font-medium">
                          Search Something {""}
                          <a
                            href="#"
                            class="font-semibold underline hover:no-underline"
                          >
                            {""}
                          </a>
                          inside home page and get access to this page
                        </div>
                        <button
                          type="button"
                          class="ml-auto -mx-1.5 -my-1.5 bg-amber-400 text-white rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 inline-flex h-8 w-8  "
                          data-dismiss-target="#alert-1"
                          aria-label="Close"
                        >
                          <span class="sr-only">Close</span>
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-black"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                </Link>
                <li
                  className="cursor-pointer hover:border-b-2 hover:border-amber-400 relative"
                  onMouseEnter={() => setViewTwo(true)}
                  onMouseLeave={() => setViewTwo(!viewTwo)}
                >
                  Agents
                  <br />
                  <div
                    className={
                      viewTwo ? " absolute top-10 w-80 z-50" : "hidden"
                    }
                  >
                    <div
                      id="alert-1"
                      class="flex p-4 mb-4 text-white rounded-lg bg-cyan-900 "
                      role="alert"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only">Info</span>
                      <div class="ml-3 text-sm font-medium">
                        is under designing {""}
                        <a
                          href="#"
                          class="font-semibold underline hover:no-underline"
                        >
                          {""}
                        </a>
                        explore other pages
                      </div>
                      <button
                        type="button"
                        class="ml-auto -mx-1.5 -my-1.5 bg-amber-400 text-white rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 inline-flex h-8 w-8  "
                        data-dismiss-target="#alert-1"
                        aria-label="Close"
                      >
                        <span class="sr-only">Close</span>
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-black"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>

                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">
                  Contact Us
                </li>

                <li className="cursor-pointer hover:border-b-2 hover:border-amber-400">
                  About Us
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-5 ml-56 text-white">
              <IoNotifications className="w-7 h-8 cursor-pointer" />
              <RouterLink to={"/chat"}>
                <IoChatbubblesSharp className="w-7 h-8 cursor-pointer" />
              </RouterLink>
              <RouterLink to={"/dashboard"}>
                <img
                  src={user?.image?.url || defaultProfile}
                  alt="user"
                  className=" w-10 h-10 rounded-full"
                />
              </RouterLink>
            </div>
          </div>
        </div>
      ) : (
        // Condition: isHomepage: false and isUserSignedIn: false
        <div className="w-full h-20" style={{ backgroundColor: "#143D59" }}>
          <div className="flex items-center justify-around mr-20 text-white font-bold">
            <div className="flex gap-10">
              <RouterLink to={"/"}>
                <img
                  src={guryoSame}
                  alt="logo"
                  className="cursor-pointer inline w-32"
                />
              </RouterLink>
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
              <RouterLink to={"/auth"}>
                <button
                  style={{ order: 2 }}
                  className="flex items-center gap-2 border rounded-lg h-9 px-2 py-1 bg-white text-black font-medium border-black ml-20 cursor-pointer hover:bg-amber-400 hover:text-white hover:border-white"
                >
                  <BiUserCheck /> Sign in
                </button>
              </RouterLink>
              <RouterLink to={"/submitProperty"}>
                <button className="flex items-center gap-2  border border-#d6ccc2  py-1 px-2 rounded-lg bg-black  text-white   cursor-pointer  ">
                  <FaLongArrowAltRight size={20} />
                  Submit Property
                </button>
              </RouterLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
