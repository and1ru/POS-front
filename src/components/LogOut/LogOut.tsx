import { useNavigate } from "react-router-dom";
import { useLogOut } from "../../customHooks/useLogOut/useLogOut";

export const LogOut = () => {
    const { logOut } = useLogOut()
    const navegar = useNavigate()
    
    const handleClick = () => {
      logOut()
      navegar("/login", {replace:true})
    }

  return (
    <div className="text-center content-center mt-auto bg-red-500 rounded-lg hover:bg-red-600 text-xl w-full p-5 duration-200 cursor-pointer hover:text-2xl font-medium" onClick={handleClick}>
        LogOut
    </div>
  );
};
