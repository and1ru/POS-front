import { useAuthContext } from "../../context/authContext/authContext";
import { AdminNav } from "../AdminAside/AdminAside";
import { CashierNav } from "../CashierAside/CashierAside";
import { OwnerNav } from "../OwnerAside/OwnerAside";
import { RootNav } from "../RootAside/RootAside";

export const NavBar = () => {
  const { authContext } = useAuthContext()
  console.log(authContext.role)
  switch (authContext.role) {
    case "owner":
      return <OwnerNav />

    case "admin":
      return <AdminNav />
  
    case "root":
      return <RootNav />

    case "cashier":
      return <CashierNav />
    default:
      break;
  }
  return (
    <>
      <p>ooopppsss un error</p>
    </>
  );
};