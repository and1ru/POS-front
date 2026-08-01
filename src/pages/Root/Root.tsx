import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import { Header } from "../../components/Header/Header";

export const Root = () => {
  return (
    <>
        <Header/>
        <NavBar/>
        <main className="h-screen px-6 py-3 bg-gray-100">
            <Outlet/>
        </main>
    </>
  );
};
