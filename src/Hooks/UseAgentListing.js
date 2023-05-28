import { useState, useEffect } from 'react';
import { baseURL, getRequest } from '../Utils/APIRequests';

const AgentListingPage = () => {
    const [agentListings, setAgentListings] = useState([]);
    const token = localStorage.getItem("token");
    const parsedToken = JSON.parse(token);
    const tokenValue = parsedToken.token;
    
    useEffect(() => {
        const fetchAgentListings = async () => {
            try {
                const res = await getRequest(`${baseURL}/propertyInfo/listings`, null, tokenValue);
                console.log(res)
                setAgentListings(res);
            } catch (error) {
                console.log(error);
            }
        };

        fetchAgentListings();
    }, [tokenValue]);
    
    return { agentListings }
}

export default AgentListingPage