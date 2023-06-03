import { useCallback, useEffect, useContext } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
    baseURL,
    deleteRequest,
    getRequest,
    postRequest,
    putRequest,
} from "../Utils/APIRequests";
import GeneralContext from '../Context/ContextApi';



export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    
    const { data } = useContext(GeneralContext)
    const Navigate = useNavigate();
    const [loggedInUser, setLoggedInUser] = useState(null)
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [registerInfo, setRegisterInfo] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
    });
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    });
    const [changePassword, setChangePassword] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    });
    const [updateProfile, setUpdateProfile] = useState({
        name: "",
        phone: "",
        address: "",
        image: null,
    });
    const [viewedProperties, setViewedProperties] = useState([]);
    const [savedProperties, setSavedProperties] = useState([]);
    const token = localStorage.getItem('token')
    
    useEffect(() => {
        if ( token !== null) {
            //setLoading(true);
            setLoggedInUser(true);
            const storedUser = localStorage.getItem("token");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
            
        }
        
        setLoading(false);
    }, [token]);
    
    

    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info);
    }, []);

    const updateLoginInfo = useCallback((info) => {
        setLoginInfo(info);
    }, []);

    const updateUserProfile = useCallback((info) => {
        setUpdateProfile(info);
    }, []);

    const updatePassword = useCallback((info)=>{
        setChangePassword(info)
    }, [])

    //registering user function
    const registerUser = useCallback(
        async (e) => {
            e.preventDefault();
            setLoading(true);

            try {
            const res = await postRequest(
            `${baseURL}/auth/register`,
            JSON.stringify(registerInfo)
            );

            if (res.error) {
                toast.error(res.message);
            } else {
                toast.success(res.message);
                // Navigate to home page
            }
        }catch (err) {
            toast.error(err.response?.data.message || err.message);
        }
            setLoading(false);
    },
        [registerInfo]
    );

    //Update user profile
    const editProfile = useCallback(
    async (requestBody) => {
        setLoading(true);

        try {
            const res = await postRequest(
                `${baseURL}/auth/edit/${user?._id}`,
                requestBody,
                {
                headers: {
                    "Content-Type": "application/json",
                },
            }
            );

            if (res.error) {
                toast.error(res.message);
            } else {
                const updatedUser = { ...user, ...res.userData };

            // Update the user state with the updated user data from the API response
                setUser(updatedUser);

            // Store the updated user data in local storage
                localStorage.setItem("token", JSON.stringify(updatedUser));
                toast.success(res.message);
            }
        } catch (err) {
            console.log(err);
        }

            setLoading(false);
    },
        [user, setUser]
    );

    //Change password function
    const changePass = useCallback(async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const res = await putRequest(
                `${baseURL}/auth/change/${user?._id}`,
                JSON.stringify(changePassword)
            );
            if (res.error) {
                toast.error(res.message);
            } else {
                toast.success(res.message);
                
            }

        } catch (e) {
            console.log(e)
        }
        setLoading(false)
    }, [changePassword, user]);

    //Login function
    const loginUser = useCallback(
        async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await postRequest(
                `${baseURL}/auth/login`,
                JSON.stringify(loginInfo)
            );
            // Code to authenticate the user
            localStorage.setItem("token", JSON.stringify(res));

            setUser(res);

            if (res.error) {
                toast.error(res.message);
            } else {
                toast.success(res.message);
                // Navigate to dashboard
                Navigate("/dashboard");
            }
        } catch (err) {
            console.log(err);
        }

        setLoading(false);
    },
    [loginInfo, Navigate]
    );

    //Logout function
    const logoutUser = useCallback(() => {
        localStorage.removeItem("token");
        setUser(null);
        Navigate("/");
    }, [setUser, Navigate]);

    
    //Favorite properties function
    
    const addFavouriteProperty = useCallback(async ()=>{
        setLoading(true);
        try{
            
            if (!data?.oneProp || !data?.oneProp._id) {
                console.log('Invalid property data');
                return;
            }


            const payload = {
                userId: user._id,
                propertyId: data?.oneProp._id,
            };
            const res = await postRequest(
                `${baseURL}/auth/savedProperties`, 
                JSON.stringify(payload)
            )
            if(res.savedProperties){
                setSavedProperties(res.savedProperties);
            }else{
                console.log(res.message)
            }
            
            
        }catch(e){
            console.log('Error:', e);
        }
        setLoading(false);
    }, [user, data])

    //Saved search property function
    const addViewedProperty = useCallback(async ()=>{
        setLoading(true);
        try{
            
            if (!data?.oneProp || !data?.oneProp._id) {
                console.log('Invalid property data');
                return;
            }


            const payload = {
                userId: user._id,
                propertyId: data?.oneProp._id,
            };
            const res = await postRequest(
                `${baseURL}/auth/viewedProperties`, 
                JSON.stringify(payload)
            )
            if(res.viewedProperties){
                setViewedProperties(res.viewedProperties);
            }else{
                console.log(res.message)
            }
            
            
        }catch(e){
            console.log('Error:', e);
        }
        setLoading(false);
    }, [user, data])

    


    const clearViewedProperties = useCallback(async () => {
        setLoading(true);
        try {
            const res = await deleteRequest(
                `${baseURL}/auth/viewedProperties`,
                JSON.stringify({ userId: user._id }) 
            );
            if (res.error) {
                console.log(res.message);
            } else {
                toast.success(res.message);
            }
            // Perform a hard reload of the page
            //window.location.reload(true);
            setViewedProperties([])
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    }, [user]);

    const clearSavedProperties = useCallback(async () => {
        setLoading(true);
        try {
            const res = await deleteRequest(
                `${baseURL}/auth/savedProperties`,
                JSON.stringify({ userId: user._id }) 
            );
            if (res.error) {
                console.log(res.message);
            } else {
                toast.success(res.message);
            }
            // Perform a hard reload of the page
            //window.location.reload(true);
            setSavedProperties([])
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    }, [user]);

    return (
        <>
        <AuthContext.Provider
            value={{
                user,
                loading,
                registerInfo,
                updateRegisterInfo,
                registerUser,
                logoutUser,
                loginInfo,
                updateLoginInfo,
                loginUser,
                setUser,
                addViewedProperty,
                editProfile,
                updateProfile,
                updateUserProfile,
                setUpdateProfile,
                viewedProperties,
                savedProperties,
                setSavedProperties,
                changePass,
                updatePassword,
                changePassword,
                addFavouriteProperty,
                clearViewedProperties,
                clearSavedProperties,
                setViewedProperties,
                setLoading,
                loggedInUser
            }}
            >
            {children}
        </AuthContext.Provider>
        </>
    );
};
