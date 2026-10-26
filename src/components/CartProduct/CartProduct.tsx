import { useCartStore } from "../../context/cartContext/cartStore"

interface Props {
  img:string;
  name:string;
  price:number;
  quantity:number
  id:number
}

export const CartProduct = ({ img, name, price, quantity, id }:Props) => {
  const addProduct = useCartStore((store) => store.addProduct)
  const removeProduct = useCartStore((store) => store.removeProduct)
  const decreseProduct = useCartStore((store) => store.descreceProduct)
  const subTotal = price * quantity

  const handleIncrese = () => {
      addProduct({ img, id, name, price, quantity:1 })
    }

    const handleDecrese = () => {
      decreseProduct(id)
    }

    const handleRemove = () => {
      removeProduct(id)
    }
  
  return (
    <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <img 
        src={img}
        alt="Producto" 
        className="w-16 h-16 object-cover rounded-lg bg-gray-100"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-800 truncate">
          {name}
        </p>
        <p className="text-xs text-gray-500 font-medium mt-0.5">
          Precio: <span className="text-indigo-600 font-semibold">${price}</span>
        </p>
        <p className="text-xs text-gray-500 font-medium mt-0.5">
          sub total: <span className="text-indigo-600 font-semibold">${subTotal}</span>
        </p>
        <button 
          onClick={handleRemove}
          className="text-xs text-red-500 hover:text-red-700 font-medium mt-2 transition-colors duration-150 block">
          Eliminar
        </button>
      </div>
      <div className="flex flex-col items-center gap-1 bg-gray-50 rounded-lg p-1 border border-gray-100">
        <button 
          onClick={handleIncrese}
          className="w-7 h-7 flex items-center justify-center bg-white text-gray-600 hover:text-indigo-600 rounded-md shadow-xs border border-gray-200 text-sm font-bold active:scale-95 transition-all"
        >
          +
        </button>
        <span className="text-xs font-semibold text-gray-700 w-7 text-center">
          {quantity}
        </span>
        <button 
          disabled={quantity <= 1}
          onClick={handleDecrese}
          className="w-7 h-7 flex items-center justify-center bg-white text-gray-600 hover:text-red-500 rounded-md shadow-xs border border-gray-200 text-sm font-bold active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          -
        </button>
      </div>
    </div>
  );
};