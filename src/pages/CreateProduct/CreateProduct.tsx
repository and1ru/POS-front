import { useForm, type SubmitHandler } from "react-hook-form";
import { createProductSchema, type createProductType } from "../../schemas/product-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { styles } from "../../helper/style";
import { Input } from "../../components/Input/Input";
import { useCreateProduct } from "../../customHooks/useCreateProduct/useCreateProduct";
import { SuccessMessage } from "../../components/SuccessMessage/SuccessMessage";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { useEffect } from "react";

export const CreateProduct = () => {
  const { create, success, error, loading } = useCreateProduct()
  const { handleSubmit, control, formState: { errors }, reset } = useForm<createProductType>({
    defaultValues: {
      name: "",
    },
    mode: "onBlur",
    resolver: zodResolver(createProductSchema)
  });

  const handleForm: SubmitHandler<createProductType> = (body) => {
    const formData = new FormData()
    formData.append("name", body.name)
    formData.append("image", body.image)

    create(formData)
  };

  useEffect(() => {
    if (success) {
      reset()
    }
  }, [success])

  return (
    <>
      {success &&
        <SuccessMessage successfully={true}>
          Product was created successfully
        </SuccessMessage>
      }
      {error &&
        <ErrorMessage open={true}>
          ¡ops! Somethign went wrong trying to create product
        </ErrorMessage>}
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <h2 className={styles.titulos}>CREATE NEW PRODUCT</h2>

        <form className={styles.formulario} onSubmit={handleSubmit(handleForm)}>
          <Input control={control} label="Product Name" name="name" type="text" error={errors.name} />
          <Input control={control} label="Image" name="image" type="file" error={errors.image} />

          <button
            type="submit"
            className={`${styles.button} ${loading && "bg-gray-400 cursor-not-allowed"}`}
            disabled={loading}
          >
            {loading ? "loading..." : "Create"}
          </button>
        </form>
      </div>
    </>

  );
};