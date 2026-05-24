import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../components/header-component";
import { NavComponent } from "../components/nav-component";

export const RootPage = () => {
  return (
    <>
        <HeaderComponent/>
        <NavComponent/>
        <main className="p-2">
            <Outlet/>
        </main>
    </>
  );
};
