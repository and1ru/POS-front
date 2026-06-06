import { Controller, type Control, type FieldError, type FieldValues, type Path } from "react-hook-form";

interface Props<T extends FieldValues> {
    name: Path<T>
    label: string;
    control: Control<T>
    type:string;
    error?: FieldError
}

export const InputComponent = <T extends FieldValues>({name,label,control,type, error}:Props<T>) => {
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