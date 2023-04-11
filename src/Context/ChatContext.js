import { createContext, useCallback, useEffect, useState } from "react";
import { getRequest, baseURL, postRequest } from "../Utils/APIRequests";
import { io } from 'socket.io-client';

export const ChatContext = createContext();

export const ChatContextProvider = ({children, user})=>{
    const [userChats, setUserChats] = useState(null);
    const [isUserChatsLoading, setIsUserChatLoading] = useState(false);
    const [potentialChats, setPotentialChats] = useState([]) //Users you don't have chats with yet
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState(null)
    const [isMessagesLoading, setIsMessagesLoading] = useState(false)
    const [newMessage, setNewMessage] = useState(null)
    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const [notifications, setNotifications] = useState([])

    console.log('notifications', notifications)

    //initial socket
    useEffect(()=>{
        const newSocket = io('http://localhost:3000')
        setSocket(newSocket)

        return ()=>{
            newSocket.disconnect()
        }
    },[user])

    // add online users
    useEffect(()=>{
        if(socket === null) return
        socket.emit('addNewUser', user?._id)
        socket.on('getOnlineUsers', (res)=>{
            setOnlineUsers(res)
        });

        return ()=>{
            socket.off('getOnlineUsers')
        }
    }, [socket])
    
    //send Message
    useEffect(()=>{
        if(socket === null) return

        const recipientId = currentChat?.members.find((id)=> id !== user?._id)

        socket.emit('sendMessage', {...newMessage, recipientId});
        
    }, [newMessage])

    //recieve Message and Notification
    useEffect(()=>{
        if(socket === null) return

        socket.on('receiveMessage', res =>{
            if(currentChat?._id !== res.chatId) return

            setMessages((prev)=> [...prev, res]);
        });

        socket.on('getNotification', (res)=>{
            const isChatOpen = currentChat?.members.some(id => id === res.senderId)

            if(isChatOpen){
                setNotifications(prev => [{...res, isRead:true}, ...prev])
            }else{
                setNotifications(prev => [res, ...prev])
            }

        });
        
        return ()=>{
            socket.off('receiveMessage')
            socket.off('getNotification')
        };
    }, [socket, currentChat])

    useEffect(()=>{
        const getUsers = async()=>{
            const res= await getRequest(`${baseURL}/auth/users`);

            if(res.error){
                console.log('error fetching users')
            }

            const pChats = res.filter((u)=>{ 
                let isChatCreated = false;

                if (!user || !user._id) return false;
                if(user._id === u._id) return false;

                if(userChats){
                    isChatCreated = userChats?.some((chat)=>{
                        return chat.members[0] === u._id || chat.members[1] === u._id;
                    })
                }

                return !isChatCreated
            });
            setPotentialChats(pChats)
        }

        getUsers()
    }, [userChats, user]);

    useEffect(()=>{
        const getUserChats = async()=>{
            if(user?._id){
                setIsUserChatLoading(true)
                
                const res= await getRequest(`${baseURL}/chat/${user?._id}`)
                setIsUserChatLoading(false)
                
                if(res.error){
                    console.log(res)
                }
                setUserChats(res)
            }
        }

        getUserChats()
    },[user])

    useEffect(()=>{
        const getMessages = async()=>{
            
            setIsMessagesLoading(true)
            
            const res= await getRequest(`${baseURL}/message/${currentChat?._id}`)
            setIsMessagesLoading(false)
            
            if(res.error){
                console.log(res)
            }
            setMessages(res)

        }

        getMessages()
    },[currentChat])

    const sendTextMessage = useCallback(async(textMessage, sender, currentChatId, setTextMessage)=>{
        
        if(!textMessage) return console.log('you must type something')

        const res = await postRequest(`${baseURL}/message/`, JSON.stringify({
            chatId: currentChatId,
            senderId: sender._id,
            text: textMessage
        }))

        if(res.error){
            console.log(res)
        }
        setNewMessage(res)

        setMessages((prev)=>[...prev, res])

        setTextMessage('')
    }, [])

    const updateCurrentChat = useCallback((chat)=>{
        setCurrentChat(chat);
    }, []);

    const createChat = useCallback(async(senderId, receiverId) => {
        const res= await postRequest(`${baseURL}/chat`, 
            JSON.stringify({
                senderId,
                receiverId
            })
        );

        if(res.error){
            return console.log('Error creating chat, res')
        }

        setUserChats((prev)=>[...prev, res])
    }, [])

    const markThisUserNotificationsAsRead = useCallback((thisUserNotification, notifications)=>{
        const mNotification = notifications.map(el => {
            let notification;

            thisUserNotification.forEach(n=>{
                if(n.senderId === el.senderId){
                    notification = {...n, isRead:true}
                }else{
                    notification = el
                }
            })
            return notification
        })
        setNotifications(mNotification)
    }, [])

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
                markThisUserNotificationsAsRead
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};