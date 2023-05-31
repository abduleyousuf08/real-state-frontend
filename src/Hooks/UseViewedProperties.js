import { useEffect } from 'react';
import { useState } from 'react';
import { baseURL, getRequest } from '../Utils/APIRequests';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

const UseViewedProperties = () => {
    const { user, viewedProperties, setViewedProperties } = useContext(AuthContext)
    const [propertyDetails, setPropertyDetails] = useState([]);

    useEffect(() => {
        const fetchViewedProperties = async () => {
            try {
                const res = await getRequest(`${baseURL}/auth/find/${user?._id}`);

                const data = res.viewedProperties;
                
                setViewedProperties(data)

            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchViewedProperties();
    }, [user]);

    useEffect(() => {
        const fetchPropertiesDetails = async () => {
            try {
                const propertyIds = viewedProperties.map((property) => property.propertyId);

                if (propertyIds.length > 0) {
                    const res = await getRequest(`${baseURL}/propertyInfo/properties`, { propertyIds });
                
                    const properties = res
                    setPropertyDetails(properties);
                }
            } catch (error) {
                console.log('Error:', error);
            }
        };
    
        fetchPropertiesDetails();
    }, [viewedProperties]);
        
        
    const mergedProperties = viewedProperties.map((property) => {
        const matchingProperty = propertyDetails.find((p) => p._id === property.propertyId);
        return {
            ...property,
            ...(matchingProperty || {})
        };
    });
    
    return { viewedProperties: mergedProperties };
        
};
    



export default UseViewedProperties
