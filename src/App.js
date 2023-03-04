import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import { useState } from "react";

//components
import Header from "./Components/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Content from "./Components/Content/Content";
import Login from "./Pages/authontication/Loggin";
import SignUp from "./Pages/authontication/SignUp";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
