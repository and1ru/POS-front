import z from 'zod'

export const resetPasswordSchema = z.object({
    newPassword: z.string().min(8, "must be 8 lenth"),
    confirmPassword: z.string().min(8, "must be 8 lenth"),
})

export type resetPasswordType = z.infer<typeof resetPasswordSchema>