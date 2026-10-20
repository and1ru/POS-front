import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type loginType } from "../../schemas/login-shema";
import { styles } from "../../helper/style";
import { Input } from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../customHooks/useLogin/useLogin";
import { useEffect } from "react";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

export const Login = () => {
  const navigate = useNavigate()
  const {login, loading, error, data } = useLogin()
  const { handleSubmit, control, formState: { errors } } = useForm<loginType>({
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "onBlur",
    resolver: zodResolver(loginSchema)
  });

  const handleForm: SubmitHandler<loginType> = (body) => {
    login(body)
  };

  useEffect(()=> {
    if(data?.success){
      navigate("/private/dashboard", {replace:true})
    }
  },[data])

  return (
    <>
    { error && <ErrorMessage open={true}>¡ops! Something went wrong trying to login</ErrorMessage>}
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-100">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Login
          </h2>
        </div>
        <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-5">
          <Input control={control} error={errors.email} label="Correo Electrónico" name="email" type="email"/>
          <Input control={control} error={errors.password} label="Contraseña" name="password" type="password"/>
          <div className="text-right -mt-2">
            <Link to="/forgotPassword" replace className="text-xs font-semibold text-indigo-600 hover:text-indigo-500 transition-colors">
              did you forget your password?
            </Link>
          </div>
          <button 
              type="submit" 
              disabled={loading}
              className={`${styles.button} ${ loading && "cursor-not-allowed" } cursor-pointer mt-2`}>
            log in
          </button>
        </form>
      </div>
    </div>
    </>
    
  );
};