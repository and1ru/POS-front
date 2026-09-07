import { styles } from "../../helper/style";

interface Props {
  name:string;
  price:number;
  stock:number
  img:string
}

export const ProductSell = ({ name, price, stock,img }:Props) => {
  
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4 flex flex-col justify-between max-w-xs transition-shadow duration-200 hover:shadow-md">
      <img 
        src={img} 
        alt="Producto" 
        className="w-full h-32 object-cover rounded-xl mb-4" 
      />
      
      {/* Información */}
      <div className="flex flex-col gap-1 mb-4">
        <p className="font-bold text-gray-800 text-lg capitalize">{name}</p>
        
        <div className="flex justify-between items-center mt-1">
          <p className="text-xl font-extrabold text-indigo-600">{price}</p>
          <p className="text-xs font-medium text-gray-400">
            Stock: <span className="text-gray-600 font-semibold">{stock} u.</span>
          </p>
        </div>
      </div>
      
      {/* Botón */}
      <button className={`${styles.button}`}>
        Agregar
      </button>
    </div>
  );
};