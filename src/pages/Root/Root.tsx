import { Outlet, useNavigate } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import { Header } from "../../components/Header/Header";
import { useAuth } from "../../customHooks/useAuth/useAuth";

export const Root = () => {
  const { data, error, loading } = useAuth()
  const navigate = useNavigate()

  if(loading) return <p>loading</p>
  if(!data?.success) navigate("/login", {replace:true})
  if(error) return <p>error</p>
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
