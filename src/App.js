//REACT-BUILT-IN
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { ChatContextProvider } from "./Context/ChatContext";
//COMPONENTS & PAGES
import PropertyInfo from "./Pages/PropertyInfo.js";
import Content from "./screens/Content";
import OwnerTesting from "./Pages/ownerTesting.js";
import Dashboard from "./Pages/Dashboard";
import Auth from "./Pages/Auth";
import ChatRoom from "./Pages/ChatRoom";
import Test from "./Pages/Test";
import Properties from "./screens/properties";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <ChatContextProvider user={user}>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/info/:id" element={<PropertyInfo />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat/:chatId" element={<ChatRoom />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/testing" element={<Test />} />
        <Route path="/owner" element={<OwnerTesting />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
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
    </ChatContextProvider>
  );
}

export default App;
