import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import Header from "./Components/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Content from "./Components/Content/Content";
import Login from "./Pages/authontication/Loggin";
import SignUp from "./Pages/authontication/SignUp";
import HouseInfo from "./Pages/PropertyOverview/HouseInfo";
import Messages from './Pages/Messages/Messages'
import Search from './Pages/Search/Search'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/propertyInfo" element={<HouseInfo />} />
          <Route path="/search" element={<Search />} />
          <Route path="/chat" element={<Messages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
