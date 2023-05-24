import { useEffect, useState } from "react";
import { baseURL, getRequest } from "../Utils/APIRequests";



function UseFetchRecipientUser(chat, user) {
    const [recipientUser, setRecipientUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!chat) {
            setRecipientUser(null);
            return;
        }
    
        const getUser = async () => {
            const recipientId = chat?.members?.find((id) => id !== user?._id);
            //console.log('pass this user', recipientId)
            if (!recipientId) {
                console.log('no recipient user found');
                setRecipientUser(null);
                return;
            }
            
            const res = await getRequest(`${baseURL}/auth/find/${recipientId}`);
            //console.log('res', res)
            if (res.error) {
            setError(res.error);
            }
    
            setRecipientUser(res);
        };
    
        getUser();
    }, [chat, user]);
    

    
    return { recipientUser };
    
}

export default UseFetchRecipientUser
