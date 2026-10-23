import { useRef } from "react";
import { UpdateProductOwner } from "../UpdateProductOwner/UpdateProductOwner";

interface Props {
  img: string
  name: string
  id: number
  onSubmit: () => void
}

export const InventoryProductCardOwner = ({ img, name, id, onSubmit }: Props) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <div className={`border border-gray-100 rounded-2xl shadow-sm p-4 flex flex-col justify-between max-w-xs transition-shadow duration-200 hover:shadow-md`}>
        <img
          src={img}
          alt="Producto"
          className="h-40 rounded-xl mb-4 object-contain"
        />
        <div className="flex flex-col gap-1 mb-4">
          <p className="font-bold text-gray-800 text-lg capitalize">{name}</p>
        </div>
        <UpdateProductOwner
          dialog={dialogRef}
          id={id}
          onSubmit={onSubmit}
        />
      </div>
    </>

  );
};