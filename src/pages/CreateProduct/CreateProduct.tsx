import { useForm, type SubmitHandler } from "react-hook-form";
import { productSchema, type productType } from "../../schemas/product-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { styles } from "../../helper/style";
import { Input } from "../../components/Input/Input";

export const CreateProduct = () => {
  const { handleSubmit, control, formState: { errors } } = useForm<productType>({
    defaultValues: {
      name: "",
      price: 0,
      stock: 0
    },
    mode: "onBlur",
    resolver: zodResolver(productSchema)
  });

  const handleForm: SubmitHandler<productType> = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className={styles.titulos}>CREATE NEW PRODUCT</h1>
      
      <form className={styles.formulario} onSubmit={handleSubmit(handleForm)}>
        <Input control={control} label="Product Name" name="name" type="text" error={errors.name} />
        <Input control={control} label="Image" name="image" type="file" error={errors.image} />
        <Input control={control} label="Price" name="price" type="number" error={errors.price} />
        <Input control={control} label="Stock" name="stock" type="number" error={errors.stock} />
        
        <button type="submit" className={styles.button}>
          Crear Producto
        </button>
      </form>
    </div>
  );
};