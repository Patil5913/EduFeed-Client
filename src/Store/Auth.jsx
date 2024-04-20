import React, { useContext, useEffect, useState } from 'react'
import {createContext} from 'react'


export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [user,setUser]=useState()
    const storeTokenInLs=(serverToken)=>{
        return localStorage.setItem("token",serverToken)
    }
 
    const userAuthentication = async()=>{
        try {
            const response = await fetch("https://edufeed-backend.vercel.app/api/login",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            })
            if (response.ok){
                const data = await response.json ();
            }
        } catch (error) {
            console.error("error fetching user data")
            setUser(data)
        }
    };
    useEffect(()=>{
        userAuthentication();
    },[])

    return <AuthContext.Provider value={{storeTokenInLs}}>
    {children}
    </ AuthContext.Provider >
}
export const useAuth = ()=>{

    return useContext(AuthContext)
}