import { useForm, type SubmitHandler } from "react-hook-form"
import { employeeSchema, type employeeType } from "../../schemas/employee"
import { Input } from "../../components/Input/Input"
import { zodResolver } from "@hookform/resolvers/zod"

export const Hire = () => {
    const { control, formState:{errors}, reset, handleSubmit } = useForm<employeeType>({
        defaultValues:{
            name:"",
            email:"",
            password:"",
            branch:"",
            role:"cashier"
        },
        mode: "onBlur",
        resolver: zodResolver(employeeSchema)
    })

    const handleForm:SubmitHandler<employeeType> = (body) => {
        console.log(body)
        reset()
    }

    return(
        <>
        <form onSubmit={handleSubmit(handleForm)}>
            <Input control={control} label="Name" name="name" error={errors.name} type="text" />
            <Input control={control} label="Email" name="email" error={errors.name} type="email" />
            <Input control={control} label="Password" name="password" error={errors.name} type="password" />

            <button>Send</button>
        </form>
        </>
    )
}