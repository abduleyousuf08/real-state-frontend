import React, { useState, useRef, useEffect } from "react";
import imgg from "../Assets/imgg.png";
import imgg2 from "../Assets/imgg2.png";
import { useContext } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosLock } from "react-icons/io";
import { AuthContext } from "../Context/AuthContext";

//Ability to learn new things

function Auth() {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    loginInfo,
    updateLoginInfo,
    loginUser,
  } = useContext(AuthContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const textSliderRef = useRef(null);

  const moveSlider = (index) => {
    setActiveIndex(index);
    textSliderRef.current.style.transform = `translateY(${
      -(index - 0) * 2.2
    }rem)`;
  };

  //make a slider move constantly without clicking
  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (activeIndex + 1) % 2;
      moveSlider(nextIndex);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [activeIndex]);

  function handleToggle(e) {
    e.preventDefault();
    setIsSignUpMode(!isSignUpMode);
  }

  return (
    <main
      className={`w-full h-screen overflow-hidden p-8 flex items-center justify-center  ${
        isSignUpMode ? "opacity-100 pointer-events-all" : ""
      }`}
    >
      <div className="relative w-2/3 max-w-5xl h-full shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-2xl bg-white">
        <div className="absolute w-3/4 h-3/4 top-20 left-16 transform translate-x-(-1/2) translate-y-(-1/2)">
          <div
            className="absolute h-full w-1/2 top-10 left-0 grid grid-cols-1 grid-rows-1 transition duration-800 ease-in-out"
            style={{ left: isSignUpMode ? "66%" : "0%", transition: "0.6s" }}
          >
            {/* LOG IN */}
            <form
              autoComplete="off"
              className={`max-w-xs w-full mx-4 h-full flex flex-col transition-opacity duration-200 delay-400 opacity-0 pointer-events-none 
                            ${isSignUpMode ? "hidden" : ""}`}
              style={{
                opacity: isSignUpMode ? "0" : "1",
                pointerEvents: isSignUpMode ? "none" : "all",
              }}
              onSubmit={loginUser}
            >
              <div>
                <h2 className="text-3xl font-bold text-black m-auto">
                  Welcome Back
                </h2>
                <h6 className="text-sm font-normal text-gray-400 inline">
                  Not registered yet?
                </h6>
                <a
                  href="/"
                  className="no-underline text-xs transition ease-out duration-700 ml-2 font-bold text-cyan-900 hover:text-amber-400"
                  onClick={handleToggle}
                >
                  Sign up
                </a>
              </div>

              <div className="mt-10">
                <div className="relative h-9 mb-7">
                  <BsFillPersonFill className="absolute text-gray-500 top-2.5" />
                  <input
                    type="email"
                    className="absolute w-full h-full bg-transparent outline-none border-b-2 border-gray-200 pl-6 text-md"
                    autoComplete="off"
                    placeholder="Email"
                    required
                    onChange={(e) =>
                      updateLoginInfo({ ...loginInfo, email: e.target.value })
                    }
                  />
                </div>

                <div className="relative h-9 mb-7">
                  <IoIosLock className="absolute text-gray-500 top-2.5 left-" />
                  <input
                    type="password"
                    className="absolute w-full h-full bg-transparent outline-none border-b-2 border-gray-200 pl-6 text-md"
                    autoComplete="off"
                    placeholder="Password"
                    required
                    onChange={(e) =>
                      updateLoginInfo({
                        ...loginInfo,
                        password: e.target.value,
                      })
                    }
                  />
                </div>

                <input
                  type="submit"
                  value="Sign In"
                  className="inline-block w-full h-11 bg-amber-500 text-white font-bold border-none cursor-pointer rounded-2xl text-md mb-8 hover:bg-amber-600"
                />

                <p className="text-gray-400 text-xs">
                  Having Problem Signing in?
                  <a
                    href="/"
                    className="ml-2 text-cyan-900 hover:text-amber-400 font-bold"
                  >
                    Forget Password
                  </a>
                </p>
              </div>
            </form>

            {/* SIGN UP */}
            <form
              autoComplete="off"
              className={`max-w-xs w-full mx-4 h-full flex flex-col transition-opacity duration-200 delay-400 opacity-100 pointer-events-all 
                                ${isSignUpMode ? "" : "hidden"}`}
              style={{
                opacity: isSignUpMode ? "1" : "0",
                pointerEvents: isSignUpMode ? "all" : "none",
              }}
              onSubmit={registerUser}
            >
              <div className="mb-3">
                <h2 className="text-3xl font-bold text-black mb-2 -mt-12">
                  Get Started
                </h2>
                <h6 className="text-sm font-normal text-gray-400 inline">
                  Already have an account?
                </h6>
                <a
                  href="/"
                  className="no-underline text-xs transition duration-300 ml-2 font-bold text-cyan-900 hover:text-amber-400"
                  onClick={handleToggle}
                >
                  Sign in
                </a>
              </div>

              <div>
                <div className="relative h-9 mb-7">
                  <input
                    type="text"
                    className="absolute w-full h-full bg-transparent outline-none border-b-2 border-gray-200 p-0 text-md"
                    autoComplete="off"
                    placeholder="Full Name"
                    required
                    onChange={(e) =>
                      updateRegisterInfo({
                        ...registerInfo,
                        name: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="relative h-9 mb-7">
                  <input
                    type="email"
                    className="absolute w-full h-full bg-transparent outline-none border-b-2 border-gray-200 p-0 text-md"
                    autoComplete="off"
                    placeholder="Email"
                    required
                    onChange={(e) =>
                      updateRegisterInfo({
                        ...registerInfo,
                        email: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="relative h-9 mb-7">
                  <input
                    type="number"
                    className="absolute w-full h-full bg-transparent outline-none border-b-2 border-gray-200 p-0 text-md"
                    autoComplete="off"
                    placeholder="Phone"
                    required
                    onChange={(e) =>
                      updateRegisterInfo({
                        ...registerInfo,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="relative h-9 mb-4">
                  <input
                    type="password"
                    className="absolute w-full h-full bg-transparent outline-none border-b-2 border-gray-200 p-0 text-md"
                    autoComplete="off"
                    placeholder="Password"
                    required
                    onChange={(e) =>
                      updateRegisterInfo({
                        ...registerInfo,
                        password: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="flex gap-3 mb-4">
                  <label htmlFor="isAgent" className="text-gray-500">
                    Are you an agent?
                  </label>
                  <input
                    type="checkbox"
                    id="isAgent"
                    checked={registerInfo.is_agent}
                    onChange={(e) =>
                      updateRegisterInfo({
                        ...registerInfo,
                        is_agent: e.target.checked,
                      })
                    }
                  />
                </div>

                <input
                  type="submit"
                  value="Sign Up"
                  className="inline-block w-full h-11 bg-amber-500 font-bold text-white border-none cursor-pointer rounded-2xl text-md mb-5 hover:bg-amber-600"
                />

                <p className="text-gray-400 text-xs mb-3 text-center">
                  By signing up, I agree to the
                  <a
                    href="/"
                    className="text-gray-400 transition duration-300 font-bold hover:text-amber-400"
                  >
                    {" "}
                    Terms of Services
                  </a>{" "}
                  and
                  <a
                    href="/"
                    className="text-gray-400 transition duration-300 font-bold hover:text-amber-400"
                  >
                    {" "}
                    Privacy Policy
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div
            className=" absolute h-full w-3/5 left-96 bg-slate-300 rounded-2xl grid grid-rows-1 pb-8 overflow-hidden transition ease-in-out duration-800"
            style={{ left: isSignUpMode ? "0%" : "55%", transition: "0.6s" }}
          >
            <div className="grid grid-cols-1 grid-rows-1">
              <img
                src={imgg}
                alt=""
                className={`w-full col-span-1 row-span-1 opacity-0  transition-transform duration-500 -translate-y-14 ${
                  activeIndex === 0 ? "opacity-100 transform-none" : ""
                }`}
              />
              <img
                src={imgg2}
                alt=""
                className={`w-full mb-24 col-span-1 row-span-1 opacity-0 transition-transform duration-500 transform scale-x-50 scale-y-50 ${
                  activeIndex === 1 ? "opacity-100 transform-none" : ""
                }`}
              />
            </div>

            <div className="absolute flex items-center justify-center mt-80 flex-col">
              <div className="max-h-9 overflow-hidden mb-5 ml-9">
                <div
                  ref={textSliderRef}
                  className="flex flex-col items-center transition duration-500 transform translate-y-0"
                >
                  <h2 className="leading-9 font-bold text-xl text-black">
                    Find your dream home with us
                  </h2>
                  <h2 className="leading-9 font-bold text-xl text-black">
                    Your key to the perfect property
                  </h2>
                </div>
              </div>

              <div className=" flex items-center justify-center">
                <span
                  className={`block w-2 h-2 bg-gray-400 mx-1 rounded-full cursor-pointer transition duration-300 
                                    ${
                                      activeIndex === 0
                                        ? "w-5 h-2 bg-gray-900 rounded-lg"
                                        : ""
                                    }`}
                  data-value="1"
                  onClick={() => moveSlider(0)}
                ></span>
                <span
                  className={`block w-2 h-2 bg-gray-400 mx-1 rounded-full cursor-pointer transition duration-300 ${
                    activeIndex === 1 ? "w-5 h-2 bg-gray-900 rounded-lg" : ""
                  }`}
                  data-value="2"
                  onClick={() => moveSlider(1)}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Auth;
