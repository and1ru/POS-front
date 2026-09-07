import z from 'zod'

export const employeeSchema = z.object({
    name: z.string().min(1, "this field is required"),
    email: z.email("must be an email"),
    password: z.string().min(8, "must be at least 8 length"),
    role: z.enum(["admin", "cashier", ""]),
    branch: z.string().min(1, "this field is required")
})

export type employeeType = z.infer<typeof employeeSchema>