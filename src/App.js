import Test from "./Pages/Test.js";

import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

//components

import Content from "./Components/Content.js";
import PropertyInfo from "./Pages/PropertyInfo.js";
import OwnerTesting from "./Pages/ownerTesting.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/info/:id" element={<PropertyInfo />} />
          <Route path="/testing" element={<Test />} />
          <Route path="/owner" element={<OwnerTesting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
