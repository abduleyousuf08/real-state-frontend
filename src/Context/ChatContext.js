import { createContext, useCallback, useEffect, useState } from "react";
import { getRequest, baseURL, postRequest } from "../Utils/APIRequests";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";



export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
  const [userChats, setUserChats] = useState(null);
  const [isUserChatsLoading, setIsUserChatLoading] = useState(false);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isMessagesLoading, setIsMessagesLoading] = useState(false);
  const [newMessage, setNewMessage] = useState(null);
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [allUsers, setAllUsers] = useState([])
  const Navigate = useNavigate();
  
  

  //initial socket
  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [user]);

  // Add user to online users and receive online users list
  useEffect(() => {
    if (socket === null) return;

    socket.emit("addNewUser", user?._id);
    socket.on("getOnlineUsers", (res) => {
      setOnlineUsers(res);
    });

    return () => {
      socket.off("getOnlineUsers");
    };
  }, [socket, user]);

  //send Message
  useEffect(() => {
    if (socket === null) return;

    const recipientId = currentChat?.members.find((id) => id !== user?._id);

    socket.emit("sendMessage", { ...newMessage, recipientId });
  }, [newMessage, socket, currentChat, user]);

  // Receive message and notification
  useEffect(() => {
    if (socket === null) return;

    socket.on("receiveMessage", (res) => {
      if (currentChat?._id !== res.chatId) return;

      setMessages((prev) => [...prev, res]);
    });

    socket.on("getNotification", (res) => {
      const isChatOpen = currentChat?.members.some((id) => id === res.senderId);
      
      if (isChatOpen) {
        // Set the notification count to 0 for the sender's chat
        if (currentChat?.members.includes(res.senderId)) {
          setNotifications((prev) => {
            const updatedNotifications = prev.map((notification) => {
              if (notification.senderId === res.senderId) {
                return { ...notification, isRead: true };
              }
              return notification;
            });
            return updatedNotifications;
          });
        }
      } else {
        setNotifications((prev) => [res, ...prev]);
        
      }
    });

    return () => {
      socket.off("receiveMessage");
      socket.off("getNotification");
    };
  }, [socket, currentChat, notifications]);



  useEffect(() => {
    const getUsers = async () => {
      try {const res = await getRequest(`${baseURL}/auth/users`);

        if (res.error) {
          console.log("error fetching users");
        }

        setAllUsers(res)
      }catch(e){
        console.log(e)
      }
    };

    getUsers();
  }, [userChats, user]);

  useEffect(() => {
    const getUserChats = async () => {
      if (user?._id) {
        setIsUserChatLoading(true);

        try {
          const res = await getRequest(`${baseURL}/chat/${user?._id}`);
          
          setUserChats(res);
          setIsUserChatLoading(false);
        } catch (error) {
          console.error("Error fetching user chats:", error);
          setIsUserChatLoading(false);
        }
      }
    };

    getUserChats();
  }, [user]);

  useEffect(() => {
    const getMessages = async () => {
      if (currentChat?._id) {
        setIsMessagesLoading(true);

        try {
          const res = await getRequest(`${baseURL}/message/${currentChat?._id}`);
          setMessages(res);
          
          setIsMessagesLoading(false);
        } catch (error) {
          console.error("Error fetching messages:", error);
          setIsMessagesLoading(false);
        }
      }
    };

    getMessages();
  }, [currentChat]);

  


  const sendTextMessage = useCallback(
    async (textMessage, sender, currentChatId, setTextMessage) => {
      if (!textMessage) return console.log("you must type something");

      const res = await postRequest(
        `${baseURL}/message/`,
        JSON.stringify({
          chatId: currentChatId,
          senderId: sender._id,
          text: textMessage,
        })
      );

      if (res.error) {
        console.log(res);
      }
      setNewMessage(res);

      setMessages((prev) => [...prev, res]);

      setTextMessage("");
    },
    []
  );
  
  const updateCurrentChat = useCallback((chat) => {
    setCurrentChat(chat);
    
  }, []);
  

  const createChat = useCallback(
      async (senderId, receiverId) => {
        try {
          // Check if the chat already exists
          const existingChat = userChats.find(chat =>
            chat.members.includes(senderId) && chat.members.includes(receiverId)
          );

          if (existingChat) {
            setCurrentChat(existingChat);
            Navigate(`/chat/${existingChat._id}`);
            return;
          }

          // If the chat doesn't exist, create one
          const res = await postRequest(`${baseURL}/chat`, {
            senderId,
            receiverId,
          });
          
          setUserChats(prevChats => [...prevChats, res]);
          setCurrentChat(res);
          Navigate(`/chat/${res._id}`);
        } catch (error) {
          console.error("Error creating chat:", error);
        }
      },
      [Navigate, userChats]
    );


  const markThisUserNotificationsAsRead = useCallback(
    (thisUserNotification, notifications) => {
      const markedNotifications = notifications.map((el) => {
        const isMatched = thisUserNotification.some(
          (n) => n.senderId === el.senderId
        );

        return isMatched ? { ...el, isRead: true } : el;
      });
      setNotifications(markedNotifications);
    },
    []
  );
    
  const clearNotifications = useCallback((senderId) => {
    setNotifications((prevNotifications) => {
      const updatedNotifications = prevNotifications.filter(
        (notification) => notification.senderId !== senderId
      );
      return updatedNotifications;
    });
  }, []);
    
  
  

  return (
    <ChatContext.Provider
      value={{
        userChats,
        isUserChatsLoading,
        createChat,
        updateCurrentChat,
        messages,
        isMessagesLoading,
        currentChat,
        sendTextMessage,
        onlineUsers,
        notifications,
        markThisUserNotificationsAsRead,
        setCurrentChat,
        allUsers,
        clearNotifications
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
