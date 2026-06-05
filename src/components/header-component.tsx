import { useState } from "react";
import { useNavContext } from "../context/nav-context/nav-context";

export const HeaderComponent = () => {
  const { setNavContext} = useNavContext()
  const [darkMode, setDarkMode] = useState<boolean>(false);

  function handleNav() {
    setNavContext(true);
  }

  function handleDarkMode() {
    const newDarkMode = !darkMode;

    document.documentElement.classList.toggle("dark", newDarkMode);

    setDarkMode(newDarkMode);
  }

  return (
    <header className="h-15 w-full bg-orange-500 dark:bg-blue-400">
      <ul className="flex p-4 gap-5 content-center">
        <li>
          <button 
          className="bg-gray-800 p-2 rounded-lg text-white"
          onClick={handleNav}>mostrar</button>
        </li>
        <li>
          <div
            onClick={handleDarkMode}
            className="w-20 h-10 border rounded-2xl p-2 absolute"
          >
            <div
              className={`h-full w-[50%] rounded-full border relative ${darkMode ? "translate-x-full moon" : "sun"} transition duration-200`}
            >
            </div>
          </div>
        </li>
      </ul>
    </header>
  );
};
