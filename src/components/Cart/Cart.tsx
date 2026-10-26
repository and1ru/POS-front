import { Link } from "react-router-dom";
import { CartProduct } from "../CartProduct/CartProduct";
import { useCartStore } from "../../context/cartContext/cartStore";


export const Cart = () => {
  const products = useCartStore((state) => state.cart)
  const totalPrice = products.reduce((total, product) => total + (product.quantity * product.price), 0)

  return (
    <aside className="flex flex-col h-[calc(100vh-3rem)] max-h-screen">
      <div className="pb-4 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <span>🛒</span> Carrito de Productos
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto py-4 space-y-3 pr-1 custom-scrollbar">
        { products.map((product) => (
          <CartProduct 
            img={product.img} 
            name={product.name} 
            price={product.price} 
            quantity={product.quantity} 
            key={product.id} 
            id={product.id}
          />
          ))}
      </div>
      <div className="pt-4 border-t border-gray-200 bg-white">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Precio Total
          </p>
          <p className="text-2xl font-black text-indigo-600">
            ${totalPrice}
          </p>
        </div>
        
        <Link 
          to="/private/confirmSale" 
          replace >
          <button
            disabled={products.length <= 0}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:shadow-indigo-200 transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >Confirmar Compra</button>
        </Link>
      </div>
    </aside>
  );
};