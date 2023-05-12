import { useEffect, useState } from "react";
import { baseURL, getRequest } from "../Utils/APIRequests";



function UseFetchRecipientUser(chat, user) {
    const [recipientUser, setRecipientUser] = useState(null);
    const [error, setError] = useState(null);

    
    const recipientId = chat?.members.find((id)=> id !== user?._id) //find for each id where the id is not equal to the current user id
    
    useEffect(()=>{
        const getUser = async()=>{

            if(!recipientId) return null 
            
            const res = await getRequest(`${baseURL}/auth/find/${recipientId}`)
        
            if(res.error){
                setError(res)
            }

            setRecipientUser(res)
        }
        getUser()
    },[recipientId])
    
    return { recipientUser }
    
}

export default UseFetchRecipientUser
