import z from 'zod'

export const employeeSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("must be an email").min(1, "Email is required"),
    password: z.string().min(8, "Password must be at least 8 length"),
    salary: z.coerce.number().positive("Salary must be positive"),
    role: z.enum(["admin", "cashier"]),
    branch: z.string().min(1, "this field is required")
})

export type employeeType = z.infer<typeof employeeSchema>