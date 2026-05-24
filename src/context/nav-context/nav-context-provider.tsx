import { useState, type ReactNode } from "react";
import { NavContext } from "./nav-context";

interface Props{
    children: ReactNode
}

export const NavContextProvider = ({children}:Props) => {
    const [navContext, setNavContext] = useState<boolean>(false)
  return (
    <NavContext.Provider value={{navContext, setNavContext}}>
        {children}
    </NavContext.Provider>
  );
};
