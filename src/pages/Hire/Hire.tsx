import { useForm, type SubmitHandler } from "react-hook-form"
import { employeeSchema, type employeeType } from "../../schemas/employee"
import { Input } from "../../components/Input/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Select } from "../../components/Select/Select"
import { BranchOptions } from "../../components/BranchOptions/BranchOptions"
import { useHire } from "../../customHooks/useHire/useHire"

export const Hire = () => {
    const { hire } = useHire()
    const { control, formState:{errors}, handleSubmit } = useForm<employeeType>({
        defaultValues:{
            name:"",
            email:"",
            password:"",
            branch:"",
            role:""
        },
        mode: "onBlur",
        resolver: zodResolver(employeeSchema)
    })

    const handleForm:SubmitHandler<employeeType> = (body) => {
        console.log(body)
        hire(body)
    }

    return(
        <section>
            <h2 className="text-center text-2xl font-bold mb-10">Hire</h2>
        <form onSubmit={handleSubmit(handleForm)} className="max-w-100 mx-auto border p-4 flex flex-col gap-5">
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
    )
}

// poner un select para los roles
// poner un select para las branches