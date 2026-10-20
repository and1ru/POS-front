import { useLogOut } from "../../customHooks/useLogOut/useLogOut";
import { NavBarLi } from "../NavBarLi/NavBarLi";

export const LogOut = () => {
    const { logOut } = useLogOut()

    const handleClick = () => {
        logOut()
    }

  return (
    <div className="text-center content-center mt-auto bg-red-500 rounded-lg hover:bg-red-600" onClick={handleClick}>
        <NavBarLi address="/login" title="Logout" />
    </div>
  );
};
