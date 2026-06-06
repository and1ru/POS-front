import z from 'zod'

export const registerSchema = z.object({
    name: z.string().min(1),
    email: z.email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8)
})

export type registerSchema = z.infer<typeof registerSchema>