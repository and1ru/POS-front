import { useForm, type SubmitHandler } from "react-hook-form";
import type { loginType } from "../schemas/login-shema";
import { InputComponent } from "../components/Input-component";

export const LoginPage = () => {
  const {handleSubmit, control, formState: {errors}} = useForm<loginType>({
    defaultValues:{
      email: "",
      password: ""
    },
    mode: "onBlur"
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
