import axios from "axios"

export const baseURL = "http://localhost:3000"

export const postRequest = async(url, body)=>{
    try{ 
        const res = await axios(url, {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            data: body
        })
    
        if(!res.data){
            return { error: true, message: "No Data" };
        }

        return res.data;
    }catch(err) {
        
        let message;
        
        if (err.response.data?.message) {
            message = err.response.data.message;
        } else {
            message = err.message
        }
        
        return { error: true, message, status: err.response?.status };
    };
};

export const getRequest = async(url)=>{
    try{ 
        const res = await axios(url, {
            method: 'GET',
            headers:{
                "Content-Type": "application/json"
            },
        })
    
        if(!res.data){
            return { error: true, message: "An error occurred..." };
        }

        return res.data;
    }catch(err) {
        
        let message;
        
        if (err.response.data?.message) {
            message = err.response.data.message;
        } else {
            message = err.message
        }
        
        return { error: true, message, status: err.response?.status };
    };
};

export const deleteRequest = async(url)=>{
    try{ 
        const res = await axios(url, {
            method: 'DELETE',
            headers:{
                "Content-Type": "application/json"
            },
        })
    
        if(!res.data){
            return { error: true, message: "Error..." };
        }

        return res.data;
    }catch(err) {
        
        let message;
        
        if (err.response.data?.message) {
            message = err.response.data.message;
        } else {
            message = err.message
        }
        
        return { error: true, message, status: err.response?.status };
    };
};