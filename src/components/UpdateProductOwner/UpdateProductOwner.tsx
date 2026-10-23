import { useForm, type SubmitHandler } from "react-hook-form";
import { styles } from "../../helper/style";
import { Input } from "../Input/Input";
import { uploadProduct, type uploadProductType } from "../../schemas/uploadProduct";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateProduct } from "../../customHooks/useUpdateProduct/useUpdateProduct";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { SuccessMessage } from "../SuccessMessage/SuccessMessage";
import { useEffect } from "react";

interface Props {
  dialog: React.RefObject<HTMLDialogElement | null>
  id: number
  onSubmit: () => void
}

export const UpdateProductOwner = ({ dialog, id, onSubmit}: Props) => {
  const { update, error, loading, success } = useUpdateProduct()
  const { control, handleSubmit, reset } = useForm<uploadProductType>({
    defaultValues:{
        name: "",
        image: undefined
    },
    resolver:zodResolver(uploadProduct)
  })

  function closeDialog() {
    dialog.current?.close()
    reset()
  }

  function openDialog() {
    dialog.current?.showModal();
  }

  const handleForm:SubmitHandler<uploadProductType> = (data) => {
    const formData = new FormData()
    formData.append("image", data.image || "")
    formData.append("name", data.name)
    formData.append("id", id.toString())
    update(formData)
  }

  useEffect(()=> {
    if(success){
      onSubmit()
      reset()
      dialog.current?.close()
    }
  },[success])

  return (
    <>
    { error && 
      <ErrorMessage open={true}>¡ops! Something went wrong trying to update the product</ErrorMessage>
    }

    { success &&
      <SuccessMessage successfully={true}>Product was updated successfully</SuccessMessage>
    }
      <button className={`${styles.button}`} onClick={openDialog}>update</button>
      <dialog
        ref={dialog}
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-xs animate-in fade-in zoom-in-95 duration-200 mx-auto my-auto"
      >
        {/* Título */}
        <h3 className="text-xl font-bold text-gray-800 text-center mb-6">
          Editar Producto
        </h3>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleForm)}>
          <Input label="Image" control={control} name="image" type="file" />
          <Input label="Product Name" control={control} name="name" type="string" />

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
              disabled={loading}
              type="submit"
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-indigo-100 transition-all duration-200 active:scale-[0.98] ${ loading && "cursor-not-allowed"}`}
            >
              Save
            </button>
          </div>
        </form>
      </dialog>
    </>

  );
};