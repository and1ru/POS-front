import { AdminDashboard } from "../../components/AdminDashboard/AdminDashboard";
import { CashierDashboard } from "../../components/CashierDashboard/CashierDashboard";
import { OwnerDashboard } from "../../components/OwnerDashboard/OwnerDashboard";
import { RootDashboard } from "../../components/RootDashboard/RootDashboard";
import { useAuthContext } from "../../context/authContext/authContext";

export const Dashboard = () => {
  const { authContext: { role } } = useAuthContext()

  switch (role) {
    case "root":
      return <RootDashboard />

    case "admin":
      return <AdminDashboard />

    case "owner":
      return <OwnerDashboard />

    case "cashier":
      return <CashierDashboard />
  }
};