import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Content from "./Components/Content/Content";
import Login from "./Pages/authontication/Loggin";
import SignUp from "./Pages/authontication/SignUp";
<<<<<<< Updated upstream
import HouseInfo from "./Pages/PropertyOverview/HouseInfo";
=======
import Search from "./Pages/Search/Search";
import Messages from "./Pages/Messages/Messages"
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
          <Route path="/propertyInfo" element={<HouseInfo />} />
=======
          <Route path="/search" element={<Search />} />
          <Route path="/chat" element={<Messages />} />
>>>>>>> Stashed changes
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
