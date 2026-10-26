import { InventoryAdmin } from "../../components/InventoryAdmin/InventoryAdmin";
import { InventoryOwner } from "../../components/InventoryOwner/InventoryOwner";
import { useAuthContext } from "../../context/authContext/authContext";

export const Inventory = () => {
  const { authContext:{ role } } = useAuthContext()

  switch (role) {
    case "owner":
      return <InventoryOwner />

    case "admin":
      return <InventoryAdmin />

    default:
      break;
  }

  return (
    <>
    </>
  );
};