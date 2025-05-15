'use client'

import { UserTokenModel } from "@/utils/Interface";
import { createContext, useContext, useEffect, useState } from "react";


const userDTO = createContext<UserTokenModel| undefined> (undefined)

export const MyUserProvider = ({ children }: { children: React.ReactNode }) => {
    const [Token, setToken] = useState<string>("");
    const [userId, setUserId] = useState<number>(0);

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        const savedUserId = localStorage.getItem("userId");
        if (savedToken) {
            setToken(savedToken);
        }
        if (savedUserId) {
            setUserId(parseInt(savedUserId));
        }
    },[])

    useEffect(() => {
    
            localStorage.setItem("token", Token);
        
    }, [Token]);

    useEffect(() => {
        
            localStorage.setItem("userId", userId.toString());
        
    }, [userId]);


    return (
        <userDTO.Provider value={{ Token, userId, setToken, setUserId }}>
            {children}
        </userDTO.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(userDTO);
    if (!context) {
        throw new Error("useUserContext must be used within a MyUserProvider");
    }
    return context;
}