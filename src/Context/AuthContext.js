import { useCallback, useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseURL, deleteRequest, postRequest, putRequest } from "../Utils/APIRequests";


export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const Navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [isRegisterLoading, setIsRegisterLoading] = useState(false)
    const [registerInfo, setRegisterInfo] = useState({
        name: '',
        email: '',
        password: '',
        phone: ''
    })
    const [isLoginLoading, setIsLoginLoading] = useState(false)
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: '',
    })
    const [changePassword, setChangePassword] = useState({
        oldPassword: '',
        newPassword: ''
    })
    const [updateProfile, setUpdateProfile] = useState({
        name: '',
        phone: '',
        address: '',
        image: null,
    })

    useEffect(() => {
        if (user === null) {
            setLoading(true);
            const storedUser = localStorage.getItem('token');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
            setLoading(false);
        } else {
            const storedUser = localStorage.getItem('token');
            if (storedUser) {
                const parsedStoredUser = JSON.parse(storedUser);
                if (JSON.stringify(user) !== JSON.stringify(parsedStoredUser)) {
                    setUser(parsedStoredUser);
                }
            }
        }
    }, [user]);
    


    const updateRegisterInfo = useCallback((info)=>{
        setRegisterInfo(info)
    }, [])

    const updateLoginInfo = useCallback((info)=>{
        setLoginInfo(info)
    }, [])

    const updateUserProfile = useCallback((info)=>{
        setUpdateProfile(info)
    }, [])

    //registering user function
    const registerUser = useCallback(async(e)=>{
        e.preventDefault()
        setIsRegisterLoading(true)

        try{
            const res = await postRequest(
                `${baseURL}/auth/register`, 
                JSON.stringify(registerInfo)
            )

            if(res.error){
                toast.error(res.message)
            }else{
                toast.success(res.message)
                // Navigate to home page

            }
            

        }catch(err){
            toast.error(err.response?.data.message || err.message);
        };
        setIsRegisterLoading(false)
        

    }, [registerInfo])

    //Update user profile 
    const editProfile = useCallback(async(requestBody) => {
        setLoading(true);
        
        try {
            const res = await postRequest(
            `${baseURL}/auth/edit/${user?._id}`,
                requestBody,
                {
                    headers: {
                    'Content-Type': 'application/json', 
                    }
                }
            );
            
            if (res.error) {
                toast.error(res.message);
            } else {
                const updatedUser = { ...user, ...res.userData };
                
                // Update the user state with the updated user data from the API response
                setUser(updatedUser);

                // Store the updated user data in local storage
                localStorage.setItem('token', JSON.stringify(updatedUser));
                toast.success(res.message);
            }
        }catch (err) {
                console.log(err);
        }
        
        setLoading(false);
    }, [user, setUser]);

    //Change password function
    const changePass = useCallback(async (e)=>{
        e.preventDefault()

        try{
            const res = await postRequest(
                `${baseURL}/auth/change/${user?.id}`,
                JSON.stringify(setChangePassword)
            )

            console.log(res)
        }catch(e){

        }
    },[])

    //Login function
    const loginUser = useCallback(async(e)=>{
        e.preventDefault()
        setIsLoginLoading(true)

        try{
            const res = await postRequest(
                `${baseURL}/auth/login`, 
                JSON.stringify(loginInfo)
            )
            // Code to authenticate the user
            localStorage.setItem("token", JSON.stringify(res))

            // // Code to update the user information
            // const updatedUser = { ...res, lastLoginTime: new Date() };
            // localStorage.setItem('token', JSON.stringify(updatedUser));
            setUser(res)
            
            if(res.error){
                toast.error(res.message)
            }else{
                toast.success(res.message)
                // Navigate to home page
                Navigate("/")
                

            }
        }catch(err){
            console.log(err)
        }
        
        setIsLoginLoading(false)
    }, [loginInfo, Navigate])

    //Logout function
    const logoutUser = useCallback(()=>{
        localStorage.removeItem('token')
        setUser(null)
        Navigate("/auth")
    
        
    }, [setUser, Navigate])

    //Saved search property function
    const addViewedProperty = useCallback(async ()=>{
        try{
            const res = await postRequest(
            `${baseURL}/auth/viewedProperties`, 
            // JSON.stringify({ userId: user.id, propertyId: property.id })
            )
            console.log(res.message);
        }catch(e){
            console.log(e);
        }
    }, [])

    const deleteViewedProperty = useCallback(async (userId, propertyId)=>{
        const res = await deleteRequest(
            `${baseURL}/auth/viewedProperties`, 
            JSON.stringify({ userId, propertyId })
        )
        if (res.error) {
            //toast.error(res.message)
            console.log(res.message);
        } else {
            //toast.success(res.message)
            console.log(res.message); // "Successfully deleted"
        }
    }, [])



    return (
        <>
            <AuthContext.Provider
                value={{
                    user,
                    registerInfo,
                    updateRegisterInfo,
                    registerUser,
                    isRegisterLoading,
                    logoutUser,
                    loginInfo, 
                    updateLoginInfo,
                    loginUser,
                    setUser,
                    addViewedProperty,
                    deleteViewedProperty,
                    editProfile,
                    updateProfile,
                    updateUserProfile,
                    setUpdateProfile

                }}
            >
                {children}
            </AuthContext.Provider>
        </>
    )
}