import { useForm, type SubmitHandler } from "react-hook-form";
import { productSchema, type productType } from "../../schemas/product-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { styles } from "../../helper/style";
import { Input } from "../../components/Input/Input";
import { useCreateProduct } from "../../customHooks/useCreateProduct/useCreateProduct";

export const CreateProduct = () => {
  const { create } = useCreateProduct()
  const { handleSubmit, control, formState: { errors } } = useForm<productType>({
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

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className={styles.titulos}>CREATE NEW PRODUCT</h1>
      
      <form className={styles.formulario} onSubmit={handleSubmit(handleForm)}>
        <Input control={control} label="Product Name" name="name" type="text" error={errors.name} />
        <Input control={control} label="Image" name="image" type="file" error={errors.image} />
        
        <button type="submit" className={styles.button}>
          Crear Producto
        </button>
      </form>
    </div>
  );
};