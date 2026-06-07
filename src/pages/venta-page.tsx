import { ProductVentaTargetComponent } from "../components/product-target-venta-component";

export const VentaPage = () => {
  return (
    <>
        <h1 className="text-center text-2xl font-bold mb-5">VENTA</h1>
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
