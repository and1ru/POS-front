import { useState } from "react";
import { Outlet } from "react-router-dom";

export const RootPage = () => {
    const [navState, setNavState] = useState<boolean>(false)
    const [darkMode, setDarkMode] = useState<boolean>(false)

    function handleNav() {
        setNavState(!navState)    
    }

    function handleDarkMode() {
        
        setDarkMode(!darkMode)
        console.log(darkMode)
    }

  return (
    <>
        <header className="h-15 w-full bg-orange-500">
            <ul className="flex p-4">
                <li><button onClick={handleNav}>mostrar</button></li>
                <li>
                    <div 
                    onClick={handleDarkMode}
                    className="w-20 h-10 border rounded-2xl p-2 absolute">
                        <div className={`h-full w-[50%] rounded-full border relative ${ darkMode ? "" : "translate-x-[100%]"} transition duration-200`}></div>
                    </div>
                </li>
            </ul>
        </header>
        <nav className={`h-screen w-70 bg-gray-800 fixed ${ navState ? "" : "translate-x-[-57vh]"} transition-all duration-300`}>
            <ul className="flex flex-col gap-5">
                <li className="text-white font-medium text-xl hover:bg-gray-900 w-full p-5 duration-200 hover:text-2xl cursor-pointer">dashboard</li>
                <li className="text-white font-medium text-xl hover:bg-gray-900 w-full p-5 duration-200 hover:text-2xl cursor-pointer">productos</li>
                <li className="text-white font-medium text-xl hover:bg-gray-900 w-full p-5 duration-200 hover:text-2xl cursor-pointer">ventas</li>
                <li className="text-white font-medium text-xl hover:bg-gray-900 w-full p-5 duration-200 hover:text-2xl cursor-pointer">estadisticas</li>
                <li className="text-white font-medium text-xl hover:bg-gray-900 w-full p-5 duration-200 hover:text-2xl cursor-pointer">salir</li>
            </ul>
        </nav>
        <main className="p-2">
            <Outlet/>
        </main>
    </>
  );
};
