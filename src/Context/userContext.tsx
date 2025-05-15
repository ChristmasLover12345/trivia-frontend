import { UserTokenModel } from "@/utils/Interface";
import { createContext, useContext, useState } from "react";


const userDTO = createContext<UserTokenModel>({
    Token: "",
    userId: 0,  
})

export const MyUserProvider = ({ children }: { children: React.ReactNode }) => {
    const [Token, setToken] = useState<string>("");
    const [userId, setUserId] = useState<number>(0);

    return (
        <userDTO.Provider value={{ Token, userId}}>
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