import { useForm, type SubmitHandler } from "react-hook-form";
import { productSchema, type productType } from "../../schemas/product-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { styles } from "../../helper/style";
import { Input } from "../../components/Input/Input";
import { useCreateProduct } from "../../customHooks/useCreateProduct/useCreateProduct";
import { SuccessMessage } from "../../components/SuccessMessage/SuccessMessage";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { useEffect, useState } from "react";

export const CreateProduct = () => {
  const { create, success, error, loading } = useCreateProduct()
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)
  const [isErrorOpen, setIsErrorOpen] = useState(false)
  const { handleSubmit, control, formState: { errors }, reset } = useForm<productType>({
    defaultValues: {
      name: "",
    },
    mode: "onBlur",
    resolver: zodResolver(productSchema)
  });

  const handleForm: SubmitHandler<productType> = (body) => {
    const formData = new FormData()
    formData.append("name", body.name)
    formData.append("image", body.image)

    create(formData)
  };

  useEffect(() => {
    if (success) {
      setIsSuccessOpen(true)
      reset()
    }
    if (error) {
      setIsErrorOpen(true)
    }
  }, [success, error])

  return (
    <>
      <SuccessMessage open={isSuccessOpen}>
        se creo con exito el producto
      </SuccessMessage>
      <ErrorMessage open={isErrorOpen}>
        error al intentar crear el producto
      </ErrorMessage>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <h1 className={styles.titulos}>CREATE NEW PRODUCT</h1>

        <form className={styles.formulario} onSubmit={handleSubmit(handleForm)}>
          <Input control={control} label="Product Name" name="name" type="text" error={errors.name} />
          <Input control={control} label="Image" name="image" type="file" error={errors.image} />

          <button 
          type="submit" 
          className={`${styles.button} ${ loading ? "bg-gray-400 cursor-" : ""}`}
          disabled={ loading }
          >
            { loading ? "cargando" : "Crear Producto"}
          </button>
        </form>
      </div>
    </>

  );
};