import { createContext, useContext } from "react";

interface NavContextI{
    navContext: boolean
    setNavContext: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavContext = createContext<NavContextI>({
    navContext: false,
    setNavContext: () => {}
})

export const useNavContext = () => {
    const context = useContext(NavContext)
    if(!context){
        throw new Error("el contexto no puede ser usado fuera del privider")
    }
    return context
}