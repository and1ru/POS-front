import { useForm, type SubmitHandler } from "react-hook-form";
import { styles } from "../../helper/style";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input/Input";
import { branchSchema, type branchType } from "../../schemas/branch-schema";
import { useCreateBranch } from "../../customHooks/useCreateBranch/useCreateBranch";

export const CreateBranch = () => {
  const { create, data, error, loading } = useCreateBranch()
  const { handleSubmit, control, formState: { errors } } = useForm<branchType>({
    defaultValues: {
      address: "",
      name: "",
      city: ""
    },
    mode: "onBlur",
    resolver: zodResolver(branchSchema)
  });

  const handleForm: SubmitHandler<branchType> = (body) => {
    create(body)
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className={styles.titulos}>CREATE NEW BRANCH</h1>

      <form className={styles.formulario} onSubmit={handleSubmit(handleForm)}>
        <Input control={control} label="Name Name" name="name" type="text" error={errors.name} />
        <Input control={control} label="City" name="city" type="text" error={errors.city} />
        <Input control={control} label="Address" name="address" type="text" error={errors.address} />

        <button type="submit" className={styles.button}>
          Create Branch
        </button>
      </form>
    </div>
  );
}