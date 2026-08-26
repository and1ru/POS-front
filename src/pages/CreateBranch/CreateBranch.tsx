import { useForm, type SubmitHandler } from "react-hook-form";
import { styles } from "../../helper/style";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input/Input";
import { branchSchema, type branchType } from "../../schemas/branch-schema";
import { useCreateBranch } from "../../customHooks/useCreateBranch/useCreateBranch";
import { MessageSuccess } from "../../components/MessageSuccess/MessageSuccess";
import { MessageError } from "../../components/MessageError/MessageError";
import { useEffect } from "react";

export const CreateBranch = () => {
  const { create, data, error, resetRequest } = useCreateBranch()
  const { handleSubmit, control, formState: { errors }, reset } = useForm<branchType>({
    defaultValues: {
      address: "",
      name: "",
      city: ""
    },
    mode: "onBlur",
    resolver: zodResolver(branchSchema)
  });

  const handleForm: SubmitHandler<branchType> = (body) => {
    console.log(data?.success)
    create(body)
    reset()
  };

  useEffect(()=> {
    if(!data) return

    const time = setTimeout(() => {
      resetRequest()
    },2000)

    return () => clearTimeout(time)
  },[data])

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      { data?.success && <MessageSuccess>se creo la branch</MessageSuccess> }
      { error && <MessageError>no se pudo crear la branch</MessageError>}
      <h1 className={styles.titulos}>CREATE NEW BRANCH</h1>

      <form className={styles.formulario} onSubmit={handleSubmit(handleForm)}>
        <Input control={control} label="Name Name" name="name" type="text" error={errors.name} />
        <Input control={control} label="City" name="city" type="text" error={errors.city} />
        <Input control={control} label="Address" name="address" type="text" error={errors.address} />

        <button className={styles.button}>
          Create Branch
        </button>
      </form>
    </div>
  );
}