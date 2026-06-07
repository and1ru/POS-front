import { useForm, type SubmitHandler } from "react-hook-form";
import { loginSchema, type loginType } from "../schemas/login-shema";
import { InputComponent } from "../components/Input-component";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginPage = () => {
  const {handleSubmit, control, formState: {errors}} = useForm<loginType>({
    defaultValues:{
      email: "",
      password: ""
    },
    mode: "onBlur",
    resolver: zodResolver(loginSchema)
  })

  const handleForm:SubmitHandler<loginType> = (data) => {
    console.log(data)
  } 

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <InputComponent control={control} error={errors.email} label="Email" name="email" type="email"/>
      <InputComponent control={control} error={errors.password} label="Password" name="password" type="password"/>
      <button>Enviar</button>
    </form>
  );
};
