import { useRef } from "react";
import { UpdateProduct } from "../UpdateProduct/UpdateProduct";

interface Props {
  img: string
  name: string
  price: number,
  stock: number
  is_in_branch: number
  id:number
}

export const InventoryProductCard = ({ img, name, price, stock, is_in_branch, id }: Props) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <div className={`border border-gray-100 rounded-2xl shadow-sm p-4 flex flex-col justify-between max-w-xs transition-shadow duration-200 hover:shadow-md ${is_in_branch === 0 ? "opacity-50" : ""}`}>
      <img
        src={img}
        alt="Producto"
        className="w-full h-32 rounded-xl mb-4"
      />
      <div className="flex flex-col gap-1 mb-4">
        <p className="font-bold text-gray-800 text-lg capitalize">{name}</p>

        <div className="flex justify-between items-center mt-1">
          {!price ? null : <p className="text-xl font-extrabold text-indigo-600">{price}</p>}

          {!stock ? null : 
          <p className="text-xs font-medium text-gray-400">Stock: <span className="text-gray-600 font-semibold">{stock} u.</span></p>}
        </div>
      </div>
      <UpdateProduct dialog={dialogRef} id={id} is_in_branch={is_in_branch}/>
    </div>
    </>

  );
};

