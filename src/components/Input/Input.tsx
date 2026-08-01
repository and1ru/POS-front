import { Controller, type Control, type FieldError, type FieldValues, type Path } from "react-hook-form";
import { styles } from "../../helper/style";

interface Props<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  type: string;
  error?: FieldError;
  classN?: string;
}

export const Input = <T extends FieldValues>({ name, label, control, type, error, classN }: Props<T>) => {
  // Determinamos si es un input de tipo archivo para aplicar estilos especiales
  const isFile = type === "file";

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, ...restField } }) => (
          <input
            {...restField}
            id={name}
            type={type}
            // Si es tipo file, manejamos el valor de manera diferente (React Hook Form/HTML standard)
            value={isFile ? undefined : value}
            onChange={(e) => {
              if (isFile) {
                onChange(e.target.files?.[0]);
              } else {
                onChange(type === "number" ? Number(e.target.value) : e.target.value);
              }
            }}
            className={`
              ${styles.input} 
              ${isFile ? styles.inputFile : ""} 
              ${error ? styles.inputError : ""} 
              ${classN || ""}
            `}
          />
        )}
      />
      
      {error && <p className={styles.errorText}>{error.message}</p>}
    </div>
  );
};