import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatBox from "./ChatBox";
import Conversations from "./Conversations";
import "./Message.css";
import UserContext from "../../Utils/UserContext";

import "./Message.css";

function Message() {
  const [chats, setChats] = useState([]);
  const token = localStorage.getItem("token");
  const { user } = useContext(UserContext);
  console.log(user);

  // useEffect(() => {
  //   axios(`http://localhost:3000/users/6411a72ef1095414216fee62`, {
  //     headers: {
  //       Authorization: token,
  //     },
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // });

  // useEffect(() => {
  //   async function fetchUserChats() {
  //     try {
  //       const response = await axios(`http://localhost:3000/chat/${userId}`, {
  //         headers: {
  //           Authorization: token,
  //         },
  //       });
  //       console.log(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   fetchUserChats();
  // }, []);

  return (
    <div className="Chat">
      {/* Left Side */}
      <div className="Left-side-chat">
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            <Conversations />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="Right-side-chat">
        <ChatBox />
      </div>
    </div>
  );
}

export default Message;
