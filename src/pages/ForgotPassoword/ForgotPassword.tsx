import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "../../components/Input/Input"
import { zodResolver } from "@hookform/resolvers/zod";
import  { forgotPasswordSchema, type forgotPasswordType } from "../../schemas/forgotPassword";
import { styles } from "../../helper/style";

export const ForgotPassword = () => {
      const { handleSubmit, control, formState: { errors } } = useForm<forgotPasswordType>({
        defaultValues: {
          email: "",
        },
        mode: "onBlur",
        resolver: zodResolver(forgotPasswordSchema)
      });
    
      const handleForm: SubmitHandler<forgotPasswordType> = (data) => {
        console.log(data);
      };
      
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                        Forgot Password
                    </h2>
                </div>
                <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-5">
                    <Input control={control} error={errors.email} label="Correo Electrónico" name="email" type="email" />
                    <button type="submit" className={`${styles.button} mt-2`}>
                        Enviar Email
                    </button>
                </form>
            </div>
        </div>
    )
}