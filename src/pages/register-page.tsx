import { useForm, type SubmitHandler } from "react-hook-form";
import { registerSchema, type registerType } from "../schemas/register-shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputComponent } from "../components/Input-component";

export const RegisterPage = () => {
  const { control, handleSubmit, formState: { errors }} = useForm<registerType>({
    defaultValues:{
      confirmPassword: "",
      email: "",
      name: "",
      password: ""
    },
    mode: "onBlur",
    resolver: zodResolver(registerSchema)
  })

  const handleForm:SubmitHandler<registerType> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <InputComponent control={control} label="Name" name="name" type="text" error={errors.name}/>
      <InputComponent control={control} label="Email" name="email" type="email" error={errors.email}/>
      <InputComponent control={control} label="Password" name="password" type="password" error={errors.password}/>
      <InputComponent control={control} label="Confirm Password" name="confirmPassword" type="password" error={errors.confirmPassword}/>
      <button>Enviar</button>
    </form>
  );
};
