import z from 'zod'

export const employeeSchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string(),
    role: z.enum(["admin", "cashier", ""]),
    branch: z.string()
})

export type employeeType = z.infer<typeof employeeSchema>