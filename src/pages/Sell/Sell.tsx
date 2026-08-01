import { Cart } from "../../components/Cart/Cart";
import { ProductSell } from "../../components/ProductSell/ProductSell";
import { styles } from "../../helper/style";


export const Sell = () => {
  return (
    // 1. Contenedor Flexbox principal con h-screen opcional para ocupar toda la altura
    <div className="flex min-h-screen bg-gray-50">
      
      {/* 2. Columna Izquierda: El carrito con un ancho fijo (ej. w-80 o w-1/4) */}
      <div className="w-80 h-screen border-r border-gray-200 bg-white p-4">
        <Cart />
      </div>

      {/* 3. Columna Derecha: El contenido principal que toma el resto del espacio (flex-1) */}
      <main className="flex-1 p-6 overflow-y-auto">
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
          <ProductSell />
          <ProductSell />
          <ProductSell />
          <ProductSell />          
          <ProductSell />
          <ProductSell />          
          <ProductSell />
          <ProductSell />          
          <ProductSell />
          <ProductSell />          
          <ProductSell />
          <ProductSell />
        </section>
      </main>

    </div>
  );
};