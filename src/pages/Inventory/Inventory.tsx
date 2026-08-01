import { useRef } from "react";
import { InventoryProductCard } from "../../components/InventoryProductCard/InventoryProductCard";
import { UpdateProduct } from "../../components/UpdateProduct/UpdateProduct";
import { InventoryForm } from "../../components/InventoryForm/InventoryForm";
import { styles } from "../../helper/style";

export const Inventory = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <h1 className={styles.titulos}>INVENTARIO</h1>
      <section>
        <InventoryForm />
      </section>
      <section className="p-3 grid gap-10 grid-cols-2 xl:grid-cols-4">
        <InventoryProductCard dialog={dialogRef} />
        <InventoryProductCard dialog={dialogRef} />
        <InventoryProductCard dialog={dialogRef} />
        <InventoryProductCard dialog={dialogRef} />
        <InventoryProductCard dialog={dialogRef} />
        <InventoryProductCard dialog={dialogRef} />
      </section>
      <UpdateProduct dialog={dialogRef} />
    </>
  );
};
