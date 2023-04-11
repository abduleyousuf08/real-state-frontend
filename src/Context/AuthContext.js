import { useCallback, useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseURL, postRequest } from "../Utils/APIRequests";


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

    
    const logoutUser = useCallback(()=>{
        localStorage.removeItem('token')
        setUser(null)
        Navigate("/")
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
                    setUser

                }}
            >
                {children}
            </AuthContext.Provider>
        </>
    )
}