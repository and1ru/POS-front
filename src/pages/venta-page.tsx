import { ProductVentaTargetComponent } from "../components/product-target-venta-component";
import { styles } from "../helper/style";

export const VentaPage = () => {
  return (
    <>
        <h1 className={styles.titulos}>VENTA</h1>
        <form action="" className="flex justify-center">
            <input type="text" placeholder="product" className="border p-2 rounded-lg w-80"/>
        </form>
        <section className="mt-10 grid grid-cols-2 gap-5">
            <ProductVentaTargetComponent/>
            <ProductVentaTargetComponent/>
            <ProductVentaTargetComponent/>
            <ProductVentaTargetComponent/>
        </section>
    </>
  );
};
