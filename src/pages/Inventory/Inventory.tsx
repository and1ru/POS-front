import { styles } from "../../helper/style";
import { useInventory } from "../../customHooks/useInventory/useInventory";
import { useState } from "react";
import { InventoryProductCardOwner } from "../../components/InventoryProductCardOwner/InventoryProductCardOwner";

export const Inventory = () => {
  const { data } = useInventory()
  const [ _productName, setProductName ] = useState<string>("")

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setProductName(value)
  }

  return (
    <>
      <h2 className={styles.titulos}>INVENTORY</h2>
      <section className="w-100 mx-auto">
        <form>
          <input 
            onChange={handleInput} 
            type="text" 
            placeholder="product name"
            className="w-full bg-gray-50 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 rounded-xl py-2 px-4 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white"
            />
        </form>
      </section>
      <section className="p-3 grid gap-10 grid-cols-2 xl:grid-cols-4">

        { data?.result.map( product => 
          <InventoryProductCardOwner
            id={product.id}
            key={product.id}
            img={product.image_url}
            name={product.name}
            />
          )}
      </section>
    </>
  );
};