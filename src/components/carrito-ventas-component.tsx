import { CarritoProductComponent } from "./carrito-product-component";

export const CarritoVentasComponent = () => {
  return (
    <aside className="flex flex-col h-[calc(100vh-3rem)] max-h-screen">
      
      {/* Encabezado del carrito */}
      <div className="pb-4 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <span>🛒</span> Carrito de Productos
        </h2>
      </div>

      {/* Lista de productos con scroll independiente si hay muchos */}
      <div className="flex-1 overflow-y-auto py-4 space-y-3 pr-1 custom-scrollbar">
        <CarritoProductComponent />
        <CarritoProductComponent />
        <CarritoProductComponent />
      </div>

      {/* Resumen del total y botón de compra fijados abajo */}
      <div className="pt-4 border-t border-gray-200 bg-white">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Precio Total
          </p>
          <p className="text-2xl font-black text-indigo-600">
            $0.00
          </p>
        </div>
        
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:shadow-indigo-200 transition-all duration-200 active:scale-[0.98]">
          Confirmar Compra
        </button>
      </div>

    </aside>
  );
};