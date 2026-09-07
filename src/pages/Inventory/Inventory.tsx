import { InventoryProductCard } from "../../components/InventoryProductCard/InventoryProductCard";
import { InventoryForm } from "../../components/InventoryForm/InventoryForm";
import { styles } from "../../helper/style";
import { useInventory } from "../../customHooks/useInventory/useInventory";

export const Inventory = () => {
  const { data } = useInventory()
  return (
    <>
      <h1 className={styles.titulos}>INVENTARIO</h1>
      <section>
        <InventoryForm />
      </section>
      <section className="p-3 grid gap-10 grid-cols-2 xl:grid-cols-4">

        { data?.result.map( product => 
          <InventoryProductCard
            id={product.id}
            key={product.id}
            is_in_branch={product.is_in_branch}
            price={product.price}
            stock={product.stock}
            img={product.image_url}
            name={product.name}
            />
          )}
      </section>
    </>
  );
};
