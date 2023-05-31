import { ChatContext } from '../Context/ChatContext'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { baseURL, getRequest } from '../Utils/APIRequests'

export const UseFetchLatestMessage = (chat)=> {
    const { newMessage, notifications } = useContext(ChatContext)
    const [latestMessage, setLatestMessage] = useState(null)
    
    useEffect(()=>{
        const getMessages = async()=>{
            const res = await getRequest(`${baseURL}/message/${chat?._id}`)
            
            if(res.error){
                return console.log('Error getting messages')
            }
            const lastMessage = res[res?.length - 1];
            
            setLatestMessage(lastMessage)
        
        };
        getMessages();
    }, [newMessage, notifications, chat])


    return { latestMessage };
}

