import z from 'zod'

export const forgotPasswordSchema = z.object({
    email: z.email().min(1, "")
})

export type forgotPasswordType = z.infer<typeof forgotPasswordSchema>