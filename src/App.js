import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import UserContext  from "./Utils/UserContext";
//components
import Header from "./Components/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Content from "./Components/Content/Content";
import Login from "./Pages/Authentication/Login";
import SignUp from "./Pages/Authentication/SignUp";
import HouseInfo from "./Pages/PropertyOverview/HouseInfo";
import Messages from './Pages/Messages/Messages'
import Search from './Pages/Search/Search'
import ProtectRoute from "./ProtectRoute";



function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(false)

  useEffect(()=>{
    if(localStorage.getItem("token") != null){
      setUser(true)
    }
    setLoading(false)
  },[])

  if(loading) return null
  
  return (
    <div>
      <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/dashboard" element={<ProtectRoute><Dashboard/></ProtectRoute>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/propertyInfo" element={<HouseInfo />} />
            <Route path="/search" element={<Search />} />
            <Route path="/chat/:id" element={<ProtectRoute><Messages/></ProtectRoute>} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </div>
  );
}

export default App;
