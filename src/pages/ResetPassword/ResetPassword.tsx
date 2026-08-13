import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "../../components/Input/Input"
import { zodResolver } from "@hookform/resolvers/zod";
import { styles } from "../../helper/style";
import { resetPasswordSchema, type resetPasswordType } from "../../schemas/resetPassword";
import { useNavigate } from "react-router-dom";

export const ResetPassword = () => {
    const navigate = useNavigate()

      const { handleSubmit, control, formState: { errors } } = useForm<resetPasswordType>({
        defaultValues: {
            confirmPassword: "",
            newPassword: ""
        },
        mode: "onBlur",
        resolver: zodResolver(resetPasswordSchema)
      });
    
      const handleForm: SubmitHandler<resetPasswordType> = (data) => {
        navigate("/login", {replace:true})
        console.log(data);
      };
      
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                        Reset Password
                    </h2>
                </div>
                <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-5">
                    <Input control={control} error={errors.newPassword} label="new password" name="newPassword" type="email" />
                    <Input control={control} error={errors.confirmPassword} label="confirm password" name="confirmPassword" type="email" />
                    <button
                    type="submit" className={`${styles.button} mt-2`}>
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    )
}