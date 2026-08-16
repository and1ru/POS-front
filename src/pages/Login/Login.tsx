import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type loginType } from "../../schemas/login-shema";
import { styles } from "../../helper/style";
import { Input } from "../../components/Input/Input";
import { Link } from "react-router-dom";
import { useLogin } from "../../customHooks/useLogin/useLogin";

export const Login = () => {
  const {login, loading, error } = useLogin()
  const { handleSubmit, control, formState: { errors } } = useForm<loginType>({
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "onBlur",
    resolver: zodResolver(loginSchema)
  });

  const handleForm: SubmitHandler<loginType> = (data) => {
    login(data)
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-100">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Iniciar Sesión
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Ingresa tus credenciales para acceder al panel
          </p>
        </div>
        <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-5">
          <Input control={control} error={errors.email} label="Correo Electrónico" name="email" type="email"/>
          <Input control={control} error={errors.password} label="Contraseña" name="password" type="password"/>
          <div className="text-right -mt-2">
            <Link to="/forgotPassword" replace className="text-xs font-semibold text-indigo-600 hover:text-indigo-500 transition-colors">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          { error?.status === 400 ? <p className="text-red-500">Credenciales invalidas</p> : null}
          <button type="submit" className={`${styles.button} mt-2`}>
            Ingresar al Sistema
          </button>
        </form>
      </div>
      { loading ?? <p>loading</p> }
    </div>
  );
};