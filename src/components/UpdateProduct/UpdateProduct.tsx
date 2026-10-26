import { useForm, type SubmitHandler } from "react-hook-form";
import { styles } from "../../helper/style";
import { Input } from "../Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateBranchProduct } from "../../customHooks/useCreateBranchProduct/useCreateBranchProduct";
import { useEffect, useRef } from "react";
import { createBranchProductSchema, type createBranchProductType } from "../../schemas/createBranchProduct";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { SuccessMessage } from "../SuccessMessage/SuccessMessage";
import { useUpdateBranchProduct } from "../../customHooks/useUpdateBranchProduct/useUpdateBranchProduct";

interface Props {
  id: number
  is_in_branch: number
  onSubmit: () => void
  stock: number
  minStock: number
  boughtPriceProduct: number
  sellPriceProduct: number,
  branch_product_id: number
}

export const UpdateProduct = ({ id, is_in_branch, onSubmit, stock, minStock, boughtPriceProduct, sellPriceProduct, branch_product_id }: Props) => {
  const dialog = useRef<HTMLDialogElement | null>(null);
  const { create, success:createSuccess, error:createError } = useCreateBranchProduct()
  const { update, success:updateSuccess, error:updateError } = useUpdateBranchProduct()
  const { control, handleSubmit, formState: {errors} } = useForm<createBranchProductType>({
    defaultValues:{
      currentStock: stock,
      minStock,
      boughtPriceProduct,
      sellPriceProduct
    },
    resolver:zodResolver(createBranchProductSchema)
  })

  function closeDialog() {
    dialog.current?.close()
  }

  function openDialog() {
    dialog.current?.showModal();
  }

  const handleForm:SubmitHandler<createBranchProductType> = (data) => {
    if(is_in_branch===0){
    const body = {...data, productId:id}
      create(body)
    } else {
    const body = {...data, productId:branch_product_id}
      update(body)
    }
  }

  useEffect(()=> {
    if(createSuccess){
      onSubmit()
      closeDialog()
    }

    if(updateSuccess){
      onSubmit()
      closeDialog()
    }
  },[createSuccess, updateSuccess])

  return (
    <>
    { createError || updateError && <ErrorMessage open={true}>¡ops! Somethign went wrong trying to {is_in_branch === 0 ? "create" : "edit"} the branch product</ErrorMessage> }

    { createSuccess || updateSuccess && <SuccessMessage successfully={true}>Branch product was {is_in_branch === 0 ? "created" : "edited"} successfully</SuccessMessage>}
      <button className={`${styles.button}`} onClick={openDialog}>{ is_in_branch === 0 ? "create": "edit"}</button>

      <dialog
        ref={dialog}
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-xs animate-in fade-in zoom-in-95 duration-200 mx-auto my-auto"
      >
        {/* Título */}
        <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
          { is_in_branch === 0 ? "Create Product" : "Edit Product"}
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleForm)}>
          <Input control={control} type="number" error={errors.boughtPriceProduct} label="Bought Price Product" name="boughtPriceProduct" />

          <Input control={control} type="number" error={errors.sellPriceProduct} label="Sell Price Product" name="sellPriceProduct" />

          <Input control={control} type="number" error={errors.minStock} label="Min Stock" name="minStock" />

          <Input control={control} type="number" error={errors.currentStock} label="Current Stock" name="currentStock" />

          {/* Botones de acción */}
          <div className="flex gap-3 mt-4">
            <button
              type="button"
              onClick={closeDialog}
              className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors duration-150"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-indigo-100 transition-all duration-200 active:scale-[0.98]"
            >
              Save
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};