import React, { useState, useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

//components

import Header from "./Components/Header.js";
import Content from "./Components/Content.js";

function App() {
  //

  const rentPropertyTypes = [
    {
      houseType: "villa",
      image:
        "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "waa guri villa ah oo ku yaal meel adagan",
    },

    {
      houseType: "apartment",
      image:
        "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "waa guri villa ah oo ku yaal meel adagan",
    },
    {
      houseType: "small",
      image:
        "https://images.pexels.com/photos/783682/pexels-photo-783682.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "waa guri villa ah oo ku yaal meel adagan",
    },
  ];

  //saleCard
  const salePropertyTypes = [
    {
      houseType: "apartment",
      image:
        "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "waa guri villa ah oo ku yaal meel adagan",
    },

    {
      houseType: "building",
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "waa guri villa ah oo ku yaal meel adagan",
    },
    {
      houseType: "medium",
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "waa guri villa ah oo ku yaal meel adagan",
    },
  ];

  /////

  const dropDown = [
    {
      id: "a",
      label: "Best Interest rates On The Market",
      desc: "the value we provide to you is more than anything else ",
    },
    {
      id: "b",
      label: "Prevent Unstable Prices",
      desc: "the value we provide to you is more than anything nothing",
    },
    {
      id: "c",
      label: "Best Price On The Market ",
      desc: "the value we provide to you is more than anything oky",
    },
    {
      id: "d",
      label: "Security Of Your Data",
      desc: "the value we provide to you is more than anything alright",
    },
  ];

  const types = [
    {
      id: "a",
      label: " 🏠 LATEST PROPERTY FOR RENT",
      desc: " :  choose your property based on your needs",
    },
    {
      id: "b",
      label: " 🏠 LATEST PROPERTY FOR SALE",
      desc: " : choose your property based on your needs",
    },
  ];

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Content
                rentPropertyTypes={rentPropertyTypes}
                salePropertyTypes={salePropertyTypes}
                types={types}
                dropDown={dropDown}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
