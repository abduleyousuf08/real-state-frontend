import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { ChatContextProvider } from "./Context/ChatContext";

//COMPONENTS & PAGES
import Content from "./screens/Content";
import Dashboard from "./Pages/Dashboard";
import Auth from "./Pages/Auth";
import ChatRoom from "./Pages/ChatRoom";
import Properties from "./screens/properties";
import SubmitProperty from "./screens/SubmitProperty";
import Header from "./Components/Header";
import Info from "./screens/Info";
import ProtectRoute from "./Utils/ProtectRoute";

function App() {
  const { user } = useContext(AuthContext);

  //

  //
  return (
    <ChatContextProvider user={user}>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/info/:id" element={<Info />} />
        <Route
          path="/dashboard"
          element={
            <ProtectRoute>
              <Dashboard />
            </ProtectRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <ProtectRoute>
              <ChatRoom />
            </ProtectRoute>
          }
        />
        <Route
          path="/chat/:chatId"
          element={
            <ProtectRoute>
              <ChatRoom />
            </ProtectRoute>
          }
        />
        <Route path="/auth" element={<Auth />} />

        <Route path="/properties" element={<Properties />} />
        <Route path="/submitProperty" element={<SubmitProperty />} />
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
