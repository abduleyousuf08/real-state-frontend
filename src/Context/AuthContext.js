import { useCallback, useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseURL, deleteRequest, postRequest } from "../Utils/APIRequests";


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

    useEffect(()=>{
        if(user === null){
            setLoading(true)
            const storedUser = localStorage.getItem('token')
            setUser(JSON.parse(storedUser))
            setLoading(false)
        }
    }, [user])


    const updateRegisterInfo = useCallback((info)=>{
        setRegisterInfo(info)
    }, [])

    const updateLoginInfo = useCallback((info)=>{
        setLoginInfo(info)
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

    //Login function
    const loginUser = useCallback(async(e)=>{
        e.preventDefault()
        setIsLoginLoading(true)

        try{
            const res = await postRequest(
                `${baseURL}/auth/login`, 
                JSON.stringify(loginInfo)
            )
            
            localStorage.setItem("token", JSON.stringify(res))
            setUser(res)
            
            if(res.error){
                toast.error(res.message)
            }else{
                toast.success(res.message)
                // Navigate to home page
                Navigate("/")
                

            }
        }catch(e){

        }
        
        setIsLoginLoading(false)
    }, [loginInfo, Navigate])

    //Logout function
    const logoutUser = useCallback(()=>{
        localStorage.removeItem('token')
        setUser(null)
        Navigate("/auth")
    }, [])

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
                    deleteViewedProperty

                }}
            >
                {children}
            </AuthContext.Provider>
        </>
    )
}