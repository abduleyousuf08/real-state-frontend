import { useEffect } from 'react';
import { useState } from 'react';
import { baseURL, getRequest } from '../Utils/APIRequests';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

const UseSavedProperties = () => {
    const { user, savedProperties, setSavedProperties } = useContext(AuthContext)
    //const [] = useState([]);
    const [propertyDetails, setPropertyDetails] = useState([]);

    useEffect(() => {
        const fetchSavedProperties = async () => {
            try {
                const res = await getRequest(`${baseURL}/auth/find/${user?._id}`);

                const data = res.savedProperties;
                
                setSavedProperties(data)

            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchSavedProperties();
    }, [user, setSavedProperties]);

    useEffect(() => {
        const fetchPropertiesDetails = async () => {
            try {
                const propertyIds = savedProperties.map((property) => property.propertyId);

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
    }, [savedProperties]);
        
        
    const mergedProperties = savedProperties.map((property) => {
        const matchingProperty = propertyDetails.find((p) => p._id === property.propertyId);
        return {
            ...property,
            ...(matchingProperty || {})
        };
    });
    
    return { savedProperties: mergedProperties };
        
};
    



export default UseSavedProperties
