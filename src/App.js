import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

//components

import Header from "./Components/Header.js";
import Content from "./Components/Content.js";
import PropertyInfo from "./Pages/PropertyInfo.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/info" element={<PropertyInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
