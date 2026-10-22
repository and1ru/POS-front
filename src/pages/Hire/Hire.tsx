import { useForm, type SubmitHandler } from "react-hook-form"
import { employeeSchema, type employeeType } from "../../schemas/employee"
import { Input } from "../../components/Input/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Select } from "../../components/Select/Select"
import { BranchOptions } from "../../components/BranchOptions/BranchOptions"
import { useHire } from "../../customHooks/useHire/useHire"
import { useEffect } from "react"
import { SuccessMessage } from "../../components/SuccessMessage/SuccessMessage"
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage"
import { styles } from "../../helper/style"

export const Hire = () => {
    const { hire, error, success, loading } = useHire()
    const { control, formState: { errors }, handleSubmit, reset } = useForm<employeeType>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            branch: "",
            role: "cashier",
            salary: 1
        },
        mode: "onBlur",
        resolver: zodResolver(employeeSchema)
    })

    const handleForm: SubmitHandler<employeeType> = (body) => {
        console.log(body)
        hire(body)
    }

    useEffect(() => {
        if (success) {
            reset()
        }
    }, [success])

    return (
        <>
            {success &&
                <SuccessMessage successfully={true}>
                    Employee was hiring 
                </SuccessMessage>}
            {error &&
                <ErrorMessage open={true}>
                    ¡ops! Something went wrong trying to hire
                </ErrorMessage>
            }
            <section>
                <h2 className={styles.titulos}>Hire</h2>
                <form onSubmit={handleSubmit(handleForm)} className={styles.formulario}>
                    <Input 
                        control={control} 
                        label="Name" 
                        name="name" 
                        error={errors.name} 
                        type="text" 
                    />
                    <Input 
                        control={control} 
                        label="Email" 
                        name="email" 
                        error={errors.email} 
                        type="email" 
                    />
                    <Input 
                        control={control} 
                        label="Password" 
                        name="password" 
                        error={errors.password} 
                        type="password" 
                    />
                    <Input 
                        control={control} 
                        label="Salary" 
                        name="salary" 
                        error={errors.salary} 
                        type="number" 
                    />
                    <Select control={control} name="role">
                        <option value="">Select Role</option>
                        <option value="cashier">Cashier</option>
                        <option value="admin">Admin</option>
                    </Select>
                    <Select control={control} name="branch">
                        <option value="0">Select Branch</option>
                        <BranchOptions />
                    </Select>
                    <button 
                        disabled={loading}
                        className={`bg-gray-700 p-3 rounded-lg text-white ${ loading && "cursor-not-allowed"}`}>Send</button>
                </form>
            </section>
        </>
    )
}