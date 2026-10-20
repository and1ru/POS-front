import { useForm, type SubmitHandler } from "react-hook-form";
import { styles } from "../../helper/style";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input/Input";
import { createBranchSchema, type createBranchType } from "../../schemas/branch-schema";
import { useCreateBranch } from "../../customHooks/useCreateBranch/useCreateBranch";
import { useEffect } from "react";
import { SuccessMessage } from "../../components/SuccessMessage/SuccessMessage";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

export const CreateBranch = () => {
  const { create, error, success, loading } = useCreateBranch()
  const { handleSubmit, control, formState: { errors }, reset } = useForm<createBranchType>({
    defaultValues: {
      address: "",
      name: "",
      city: ""
    },
    mode: "onBlur",
    resolver: zodResolver(createBranchSchema)
  });

  const handleForm: SubmitHandler<createBranchType> = (body) => {
    create(body)
  };

  useEffect(()=> {
    if(success){
      reset()
    }
  },[success])

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      { success && <SuccessMessage successfully={true}>Branch was created successfully</SuccessMessage> }
      { error && 
        <ErrorMessage open={true}>¡ops! Something went wrong trying to create the branch</ErrorMessage>
      }

      <h2 className={styles.titulos}>CREATE NEW BRANCH</h2>
      <form className={styles.formulario} onSubmit={handleSubmit(handleForm)}>
        <Input control={control} label="Branch Name" name="name" type="text" error={errors.name} />
        <Input control={control} label="City" name="city" type="text" error={errors.city} />
        <Input control={control} label="Address" name="address" type="text" error={errors.address} />
        <button 
          className={`${styles.button} ${ loading && "cursor-not-allowed"}`}>Create</button>
      </form>
    </div>
  );
}