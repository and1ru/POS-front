import { Cart } from "../../components/Cart/Cart";
import { InventoryCashier } from "../../components/InventoryCashier/InventoryCashier";

export const Sell = () => {
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-80 h-screen border-r border-gray-200 bg-white p-4">
        <Cart />
      </div>
      <main className="flex-1 p-6 overflow-y-auto">
        <InventoryCashier />
      </main>
    </div>
  );
};