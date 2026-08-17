import { useState, type ReactNode } from "react"
import { AuthContext } from "./authContext"

interface Props {
    children: ReactNode
}

type RoleType = "root" | "admin" | "owner" | "cashier" | null

interface AuthContextI{
    role: RoleType
    name:string
}

export const AuthContextProvider = ({children}:Props) => {
    const [authContext, setAuthContext] = useState<AuthContextI>({role:null, name:""})
    return(
        <AuthContext.Provider value={{authContext, setAuthContext}}>
            {children}
        </AuthContext.Provider>
    )
}