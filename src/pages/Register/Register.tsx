import { useForm, type SubmitHandler } from "react-hook-form";
import { registerSchema, type registerType } from "../../schemas/register-shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { styles } from "../../helper/style"; // Importamos tus estilos base
import { Input } from "../../components/Input/Input";

export const Register = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<registerType>({
    defaultValues: {
      confirmPassword: "",
      email: "",
      name: "",
      password: ""
    },
    mode: "onBlur",
    resolver: zodResolver(registerSchema)
  });

  const handleForm: SubmitHandler<registerType> = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Contenedor de la Tarjeta de Registro */}
      <div className="max-w-md w-full mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-100">
        
        {/* Encabezado */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Crear Cuenta
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Regístrate para empezar a gestionar tu negocio
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-4">
          <Input 
            control={control} 
            label="Nombre Completo" 
            name="name" 
            type="text" 
            error={errors.name}
          />
          
          <Input 
            control={control} 
            label="Correo Electrónico" 
            name="email" 
            type="email" 
            error={errors.email}
          />
          
          <Input 
            control={control} 
            label="Contraseña" 
            name="password" 
            type="password" 
            error={errors.password}
          />
          
          <Input 
            control={control} 
            label="Confirmar Contraseña" 
            name="confirmPassword" 
            type="password" 
            error={errors.confirmPassword}
          />

            <a href="#" className="text-xs font-semibold text-indigo-600 hover:text-indigo-500 transition-colors">
              ¿do you have account? login
            </a>

          {/* Botón Principal */}
          <button type="submit" className={`${styles.button} mt-3`}>
            Registrarse
          </button>
        </form>

      </div>
    </div>
  );
};