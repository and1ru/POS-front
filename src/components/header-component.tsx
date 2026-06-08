import { useState } from "react";
import { useNavContext } from "../context/nav-context/nav-context";
import { styles } from "../helper/style";

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
    <header className="w-full">
      <ul className="flex p-4 gap-5 content-center">
        <li>
          <button 
          className={styles.button}
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
