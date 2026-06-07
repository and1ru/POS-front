import { useForm, type SubmitHandler } from "react-hook-form";
import { productSchema, type productType } from "../schemas/product-schema";
import { InputComponent } from "../components/Input-component";
import { zodResolver } from "@hookform/resolvers/zod";

export const CreateProductPage = () => {
  const { handleSubmit, control, formState: { errors }} = useForm<productType>({
    defaultValues:{
      name: "",
      price: 0,
      stock: 0
    },
    mode: "onBlur",
    resolver: zodResolver(productSchema)
  })

  const handleForm:SubmitHandler<productType> = (data) => {
    console.log(data)
  }

  return (
    <>
    <h1 className="text-center text-2xl font-bold">Create new Product</h1>
    <form 
    className="flex flex-col gap-5"
    onSubmit={handleSubmit(handleForm)}>
      <InputComponent control={control} label="Product Name" name="name" type="text" error={errors.name} />
      <InputComponent control={control} label="Image" name="image" type="file" error={errors.image} />
      <InputComponent control={control} label="Price" name="price" type="number" error={errors.price} />
      <InputComponent control={control} label="Stock" name="stock" type="number" error={errors.stock} />
      <button className="bg-gray-800 p-2 rounded-lg text-white">Enviar</button>
    </form>    
    </>
  );
};
