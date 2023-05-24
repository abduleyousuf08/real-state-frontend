import { createContext, useCallback, useEffect, useState } from "react";
import { getRequest, baseURL, postRequest } from "../Utils/APIRequests";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";


export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
  const [userChats, setUserChats] = useState(null);
  const [isUserChatsLoading, setIsUserChatLoading] = useState(false);
  const [potentialChats, setPotentialChats] = useState([]); //Users you don't have chats with yet
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState(null);
  const [isMessagesLoading, setIsMessagesLoading] = useState(false);
  const [newMessage, setNewMessage] = useState(null);
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [notifications, setNotifications] = useState([]);
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

    const handleReceivedMessage = (res) => {
      if (currentChat?._id !== res.chatId) return;

      setMessages((prev) => [...prev, res]);
    };

    const handleReceivedNotification = (res) => {
      const isChatOpen = currentChat?.members.some((id) => id === res.senderId);

      if (isChatOpen) {
        setNotifications((prev) => [{ ...res, isRead: true }, ...prev]);
      } else {
        setNotifications((prev) => [res, ...prev]);
      }
    };

    socket.on("receiveMessage", handleReceivedMessage);
    socket.on("getNotification", handleReceivedNotification);

    return () => {
      socket.off("receiveMessage", handleReceivedMessage);
      socket.off("getNotification", handleReceivedNotification);
    };
  }, [socket, currentChat]);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const res = await getRequest(`${baseURL}/auth/users`);

  //     if (res.error) {
  //       console.log("error fetching users");
  //     }

  //     const pChats = res.filter((u) => {
  //       let isChatCreated = false;

  //       if (!user || !user._id) return false;
  //       if (user._id === u._id) return false;

  //       if (userChats) {
  //         isChatCreated = userChats?.some((chat) => {
  //           return chat.members[0] === u._id || chat.members[1] === u._id;
  //         });
  //       }

  //       return !isChatCreated;
  //     });
  //     setPotentialChats(pChats);
  //   };

  //   getUsers();
  // }, [userChats, user]);

  useEffect(() => {
    const getUserChats = async () => {
      if (user?._id) {
        setIsUserChatLoading(true);

        try {
          const res = await getRequest(`${baseURL}/chat/${user?._id}`);
          setIsUserChatLoading(false);

          const sortedChats = res.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );

          setUserChats(sortedChats);
        } catch (error) {
          console.error("Error fetching user chats:", error);
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
          setIsMessagesLoading(false);

          setMessages(res);
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      }
    };

    getMessages();
  }, [currentChat]);


  const sendTextMessage = useCallback(
    async (textMessage, sender, currentChatId, setTextMessage) => {
      if (!textMessage) return console.log("You must type something");

      try {
        const res = await postRequest(`${baseURL}/message/`, {
          chatId: currentChatId,
          senderId: sender._id,
          text: textMessage,
        });

        setNewMessage(res);
        setMessages((prev) => [...prev, res]);
        setTextMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
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

  // const markThisUserNotificationsAsRead = useCallback(
  //   (thisUserNotification, notifications) => {
  //     const mNotification = notifications.map((el) => {
  //       let notification;

  //       thisUserNotification.forEach((n) => {
  //         if (n.senderId === el.senderId) {
  //           notification = { ...n, isRead: true };
  //         } else {
  //           notification = el;
  //         }
  //       });
  //       return notification;
  //     });
  //     setNotifications(mNotification);
  //   },
  //   []
  // );
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
    
  return (
    <ChatContext.Provider
      value={{
        userChats,
        isUserChatsLoading,
        potentialChats,
        createChat,
        updateCurrentChat,
        messages,
        isMessagesLoading,
        currentChat,
        sendTextMessage,
        onlineUsers,
        notifications,
        markThisUserNotificationsAsRead,
        setCurrentChat
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
