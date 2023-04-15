import {  Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from "./Pages/Dashboard";
import Auth from "./Pages/Auth";
import ChatRoom from "./Pages/ChatRoom";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { ChatContextProvider } from "./Context/ChatContext";

import Header from "./Components/Header";
import Content from "./Components/Content";

function App() {
  const { user } = useContext(AuthContext)
  
  return (
    <ChatContextProvider user={user}>
      <Routes>
        <Route path="/" element={<Content/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/chat" element={<ChatRoom/>} />
        <Route path="/auth" element={<Auth/>} />
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
