import { useForm, type SubmitHandler } from "react-hook-form"
import { employeeSchema, type employeeType } from "../../schemas/employee"
import { Input } from "../../components/Input/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Select } from "../../components/Select/Select"
import { BranchOptions } from "../../components/BranchOptions/BranchOptions"
import { useHire } from "../../customHooks/useHire/useHire"
import { useEffect, useState } from "react"
import { SuccessMessage } from "../../components/SuccessMessage/SuccessMessage"
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage"
import { styles } from "../../helper/style"

export const Hire = () => {
    const { hire, error, success } = useHire()
    const [isSuccessOpen, setIsSuccessOpen] = useState(false)
    const [isErrorOpen, setIsErrorOpen] = useState(false)
    const { control, formState: { errors }, handleSubmit, reset } = useForm<employeeType>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            branch: "",
            role: ""
        },
        mode: "onBlur",
        resolver: zodResolver(employeeSchema)
    })

    const handleForm: SubmitHandler<employeeType> = (body) => {
        hire(body)
    }

    useEffect(() => {
        if (success) {
            setIsSuccessOpen(true)
            reset()
        }
        if (error) {
            setIsErrorOpen(true)
        }
    }, [success, error])

    return (
        <>
            <SuccessMessage open={isSuccessOpen}>
                se contrato con exito tu empleado
            </SuccessMessage>
            <ErrorMessage open={isErrorOpen}>
                error al intentar contratar tu empleado
            </ErrorMessage>
            <section>
                <h2 className={styles.titulos}>Hire</h2>
                <form onSubmit={handleSubmit(handleForm)} className={styles.formulario}>
                    <Input control={control} label="Name" name="name" error={errors.name} type="text" />
                    <Input control={control} label="Email" name="email" error={errors.name} type="email" />
                    <Input control={control} label="Password" name="password" error={errors.name} type="password" />
                    <Select control={control} name="role">
                        <option value="">select role</option>
                        <option value="cashier">Cashier</option>
                        <option value="admin">Admin</option>
                    </Select>
                    <Select control={control} name="branch">
                        <option value="0">Select Branch</option>
                        <BranchOptions />
                    </Select>
                    <button className="bg-gray-700 p-3 rounded-lg text-white">Send</button>
                </form>
            </section>
        </>

    )
}