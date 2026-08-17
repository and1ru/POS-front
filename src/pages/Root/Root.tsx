import { Navigate, Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import { Header } from "../../components/Header/Header";
import { useAuth } from "../../customHooks/useAuth/useAuth";
import { useAuthContext } from "../../context/authContext/authContext";
import { useEffect } from "react";

export const Root = () => {
  const { data, error, loading } = useAuth()
  const { setAuthContext } = useAuthContext()

  const execute = () => {
    if(!data) return
    setAuthContext({role:data.role, name:data.name})
  }

  useEffect(()=> {
    execute()
  },[data])

  if(loading) return <p>loading</p>
  if(data?.success === false || error) {
    return <Navigate to="/login" replace/>
  }

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
