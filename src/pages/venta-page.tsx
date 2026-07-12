import { ProductVentaTargetComponent } from "../components/product-target-venta-component";
import { styles } from "../helper/style";

export const VentaPage = () => {
  return (
    <>
        <h1 className={styles.titulos}>VENTA</h1>
<form action="" className="flex justify-center w-full py-4 bg-transparent">
  <div className="relative w-full max-w-md px-4">
    <input 
      type="text" 
      placeholder="Buscar producto..." 
      className="w-full bg-white text-sm text-gray-900 placeholder-gray-400 border border-gray-200 rounded-xl py-2 px-4 shadow-sm transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
    />
  </div>
</form>
        <section className="mt-10 grid gap-5 grid-cols-2 xl:grid-cols-4">
            <ProductVentaTargetComponent/>
            <ProductVentaTargetComponent/>
            <ProductVentaTargetComponent/>
            <ProductVentaTargetComponent/>
                        <ProductVentaTargetComponent/>
            <ProductVentaTargetComponent/>
            <ProductVentaTargetComponent/>
            <ProductVentaTargetComponent/>
                        <ProductVentaTargetComponent/>
            <ProductVentaTargetComponent/>
            <ProductVentaTargetComponent/>
            <ProductVentaTargetComponent/>
        </section>
    </>
  );
};
