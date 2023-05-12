import { useState, useEffect, useCallback } from 'react';
import { baseURL, getRequest } from '../Utils/APIRequests';

// Custom hook to fetch property details by ID
export const usePropertyDetails = (propertyId) => {
    const [propertyDetails, setPropertyDetails] = useState(null);

    const fetchPropertyDetails = useCallback(async () => {
        try {
            const res = await getRequest(`${baseURL}propertyInfo/oneHouse/${propertyId}`);
            console.log(res)
            const property = res.property;
            setPropertyDetails(property);
        } catch (e) {
            console.log(e);
        }
    }, [propertyId]);

    useEffect(() => {
        fetchPropertyDetails();
    }, [fetchPropertyDetails]);

    return propertyDetails;
};
