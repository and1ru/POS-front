import { useForm, type SubmitHandler } from "react-hook-form";
import { companySchema, type companyType } from "../../schemas/createCompany";
import { zodResolver } from "@hookform/resolvers/zod";
import { styles } from "../../helper/style";
import { Input } from "../../components/Input/Input";
import { useCreateCompany } from "../../customHooks/useCreateCompany/useCreateCompany";
import { SuccessMessage } from "../../components/SuccessMessage/SuccessMessage";
import { useEffect } from "react";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

export const CreateCompany = () => {
  const { create, success, error } = useCreateCompany()
   const { handleSubmit, control, formState: { errors }, reset } = useForm<companyType>({
       defaultValues: {
        companyName: "",
        ownerName: "",
        email: "",
        password: "",
        confirmPassword: ""
       },
       mode: "onBlur",
       resolver: zodResolver(companySchema)
     });
   
     const handleForm: SubmitHandler<companyType> = (body) => {
       create(body)
     };

     useEffect(()=> {
      if(success){
        reset()
      }
     },[success])
   
     return (
      <>
      { success &&
        <SuccessMessage successfully={true}>
          Company was created successfully
        </SuccessMessage>
      }
      { error && 
      <ErrorMessage open={true}>
        ¡ops! Something went wrong trying to create the company
      </ErrorMessage>
      }
        
       <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
         <h1 className={styles.titulos}>CREATE NEW COMPANY</h1>
         
         <form className={styles.formulario} onSubmit={handleSubmit(handleForm)}>
           <Input control={control} label="Company Name" name="companyName" type="text" error={errors.companyName} />
           <Input control={control} label="Owner Name" name="ownerName" type="text" error={errors.ownerName} />
           <Input control={control} label="Email" name="email" type="email" error={errors.email} />
           <Input control={control} label="Password" name="password" type="password" error={errors.password} />
           <Input control={control} label="Confirm Password" name="confirmPassword" type="password" error={errors.confirmPassword} />
           
           <button type="submit" className={styles.button}>
              Create Company
           </button>
         </form>
       </div>      
      </>

     );
};
