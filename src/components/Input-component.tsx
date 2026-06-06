import { Controller, type Control, type FieldError } from "react-hook-form";
import type { loginType } from "../schemas/login-shema";

interface Props {
    name: keyof loginType
    label: string;
    control: Control<loginType>
    type:string;
    error?: FieldError
}

export const InputComponent = ({name,label,control,type, error}:Props) => {
  return (
    <>
    <label htmlFor={name}>{label}</label>
    <Controller
    name={name}
    control={control}
    render={({field}) => <input {...field} type={type}/>}
    />
    { error && <p>{error.message}</p>}    
    </>
  );
};