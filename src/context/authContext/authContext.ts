import { createContext, useContext } from "react";

type RoleType = "root" | "admin" | "owner" | "cashier" | null

interface authI{ 
    role: RoleType, 
    name: string
}

interface AuthContextI{
    authContext: authI ,    
    setAuthContext: React.Dispatch<React.SetStateAction<authI>>
}

export const AuthContext = createContext<AuthContextI | null>(null)

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("el contexto no puede ser usado fuera del privider")
    }
    return context
}