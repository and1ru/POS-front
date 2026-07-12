import { useForm, type SubmitHandler } from "react-hook-form";
import { loginSchema, type loginType } from "../schemas/login-shema";
import { InputComponent } from "../components/Input-component";
import { zodResolver } from "@hookform/resolvers/zod";
import { styles } from "../helper/style"; // Importamos tus estilos base

export const LoginPage = () => {
  const { handleSubmit, control, formState: { errors } } = useForm<loginType>({
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "onBlur",
    resolver: zodResolver(loginSchema)
  });

  const handleForm: SubmitHandler<loginType> = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Contenedor de la Tarjeta de Login */}
      <div className="max-w-md w-full mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-100">
        
        {/* Encabezado del Login */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Iniciar Sesión
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Ingresa tus credenciales para acceder al panel
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-5">
          <InputComponent 
            control={control} 
            error={errors.email} 
            label="Correo Electrónico" 
            name="email" 
            type="email"
          />
          
          <InputComponent 
            control={control} 
            error={errors.password} 
            label="Contraseña" 
            name="password" 
            type="password"
          />

          {/* Enlace de recuperación simulado (Opcional, pero le da realismo) */}
          <div className="text-right -mt-2">
            <a href="#" className="text-xs font-semibold text-indigo-600 hover:text-indigo-500 transition-colors">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <div className="text-right -mt-2">
            <a href="#" className="text-xs font-semibold text-indigo-600 hover:text-indigo-500 transition-colors">
              ¿don't you have account? register
            </a>
          </div>
          {/* Botón Principal utilizando tu objeto de estilos */}
          <button type="submit" className={`${styles.button} mt-2`}>
            Ingresar al Sistema
          </button>
        </form>

      </div>
    </div>
  );
};