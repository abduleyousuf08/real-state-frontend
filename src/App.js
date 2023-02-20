import "./App.css";
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Dashboard from "./Pages/Dashboard";
=======

import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
>>>>>>> 102055c7fc1f695a8852d088de9c87255e6f8b2e

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Content/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
