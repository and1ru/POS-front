import { UpdateProduct } from "../UpdateProduct/UpdateProduct";

interface Props {
  img: string
  name: string
  stock: number
  is_in_branch: number
  id:number
  onSubmit: () => void
  boughtPriceProduct: number
  minStock: number
  sellPriceProduct: number
  branch_product_id: number
}

export const InventoryProductCardAdmin = ({ img, name, stock, is_in_branch, id, onSubmit, boughtPriceProduct, minStock, sellPriceProduct, branch_product_id }: Props) => {

  return (
    <>
      <div className={`border border-gray-100 rounded-2xl shadow-sm p-4 flex flex-col justify-between max-w-xs transition-shadow duration-200 hover:shadow-md ${is_in_branch === 0 ? "opacity-50" : ""}`}>
      <img
        src={img}
        alt="Producto"
        className="w-full h-32 rounded-xl mb-4 object-contain"
      />
      <div className="flex flex-col gap-1 mb-4">
        <p className="font-bold text-gray-800 text-lg capitalize">{name}</p>

        <div className="flex justify-between items-center mt-1">
          {!sellPriceProduct ? null : <p className="text-xl font-extrabold text-indigo-600">{sellPriceProduct}</p>}

          {!stock ? null : 
          <p className="text-xs font-medium text-gray-400">Stock: <span className="text-gray-600 font-semibold">{stock} u.</span></p>}
        </div>
        <UpdateProduct
          is_in_branch={ is_in_branch }
          id={id}
          onSubmit={onSubmit}
          boughtPriceProduct={boughtPriceProduct}
          minStock={minStock}
          sellPriceProduct={sellPriceProduct}
          stock={stock}
          key={id}
          branch_product_id={branch_product_id}
        />
      </div>
    </div>
    </>
  );
};