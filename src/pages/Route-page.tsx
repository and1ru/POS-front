import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../components/header-component";
import { NavComponent } from "../components/nav-component";

export const RootPage = () => {
  return (
    <>
        <HeaderComponent/>
        <NavComponent/>
        <main className="h-screen p-2 bg-gray-100">
            <Outlet/>
        </main>
    </>
  );
};
