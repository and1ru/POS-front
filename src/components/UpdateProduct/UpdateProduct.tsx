import { useForm, type SubmitHandler } from "react-hook-form";
import { styles } from "../../helper/style";
import { Input } from "../Input/Input";
import { uploadProduct, type uploadProductType } from "../../schemas/uploadProduct";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateBranchProduct } from "../../customHooks/useCreateBranchProduct/useCreateBranchProduct";

interface Props {
  dialog: React.RefObject<HTMLDialogElement | null>
  id: number
  is_in_branch: number
}

export const UpdateProduct = ({ dialog, id, is_in_branch}: Props) => {
  const { create } = useCreateBranchProduct()
  const { control, handleSubmit } = useForm<uploadProductType>({
    defaultValues:{
      price:1,
      stock:1
    },
    resolver:zodResolver(uploadProduct)
  })

  function closeDialog() {
    dialog.current?.close()
  }

  function openDialog() {
    dialog.current?.showModal();
  }

  const handleForm:SubmitHandler<uploadProductType> = (data) => {
    const body = {...data, productId:id}
    if(is_in_branch===0){
      create(body)
    }
  }

  return (
    <>
      <button className={`${styles.button}`} onClick={openDialog}>{ is_in_branch === 0 ? "crear": "editar"}</button>

      <dialog
        ref={dialog}
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-xs animate-in fade-in zoom-in-95 duration-200 mx-auto my-auto"
      >
        {/* Título */}
        <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
          Editar Producto
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleForm)}>
          <Input label="price" control={control} name="price" type="number" />
          <Input label="stock" control={control} name="stock" type="number" />

          {/* Botones de acción */}
          <div className="flex gap-3 mt-4">
            <button
              type="button"
              onClick={closeDialog}
              className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors duration-150"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-indigo-100 transition-all duration-200 active:scale-[0.98]"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </dialog>
    </>

  );
};