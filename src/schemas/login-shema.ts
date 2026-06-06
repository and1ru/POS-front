import z from 'zod'

export const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(8, "must be 8 lenth")
})

export type loginType = z.infer<typeof loginSchema>