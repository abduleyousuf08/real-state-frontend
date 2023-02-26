import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import { useState } from "react";

import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
