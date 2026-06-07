import { Controller, type Control, type FieldError, type FieldValues, type Path } from "react-hook-form";

interface Props<T extends FieldValues> {
    name: Path<T>
    label: string;
    control: Control<T>
    type:string;
    error?: FieldError;
    classN?: string;
}

export const InputComponent = <T extends FieldValues>({name,label,control,type, error, classN}:Props<T>) => {
  return (
    <>
    <label htmlFor={name}>{label}</label>
    <Controller
    name={name}
    control={control}
    render={({field}) => <input {...field} type={type} className={`border p-2 rounded-lg ${classN}`}/>}
    />
    { error && <p className="text-red-600 font-bold">{error.message}</p>}    
    </>
  );
};