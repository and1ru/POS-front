import { useLogOut } from "../../customHooks/useLogOut/useLogOut";
import { NavBarLi } from "../NavBarLi/NavBarLi";

export const LogOut = () => {
    const { logOut } = useLogOut()

    const handleClick = () => {
        logOut()
    }

  return (
    <div className="mt-auto pt-4" onClick={handleClick}>
        <NavBarLi address="/login" title="Logout" />
    </div>
  );
};
