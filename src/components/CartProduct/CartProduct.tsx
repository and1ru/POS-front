import { useState } from "react";

export const CartProduct = () => {
  const [count, setCount] = useState(1);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <img 
        src="https://via.placeholder.com/64" 
        alt="Producto" 
        className="w-16 h-16 object-cover rounded-lg bg-gray-100"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-800 truncate">
          Nombre del Producto
        </p>
        <p className="text-xs text-gray-500 font-medium mt-0.5">
          Precio: <span className="text-indigo-600 font-semibold">$0.00</span>
        </p>
        <button className="text-xs text-red-500 hover:text-red-700 font-medium mt-2 transition-colors duration-150 block">
          Eliminar
        </button>
      </div>
      <div className="flex flex-col items-center gap-1 bg-gray-50 rounded-lg p-1 border border-gray-100">
        <button 
          onClick={handleIncrement}
          className="w-7 h-7 flex items-center justify-center bg-white text-gray-600 hover:text-indigo-600 rounded-md shadow-xs border border-gray-200 text-sm font-bold active:scale-95 transition-all"
        >
          +
        </button>
        <span className="text-xs font-semibold text-gray-700 w-7 text-center">
          {count}
        </span>
        <button 
          onClick={handleDecrement}
          className="w-7 h-7 flex items-center justify-center bg-white text-gray-600 hover:text-red-500 rounded-md shadow-xs border border-gray-200 text-sm font-bold active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={count <= 1}
        >
          -
        </button>
      </div>
    </div>
  );
};