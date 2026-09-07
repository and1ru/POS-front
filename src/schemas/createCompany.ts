import z from 'zod'

export const companySchema = z.object({
    companyName: z.string().min(1, "this field is required"),
    ownerName: z.string().min(1, "this field is required"),
    email: z.email("must be an email"),
    password: z.string().min(1, "must be at least 8 length"),
    confirmPassword: z.string().min(1, "must be at least 8 length")
}).refine(data => data.password === data.confirmPassword,{
    message: "passwords don't match",
    path: ["confirmPassword"]
})

export type companyType = z.infer<typeof companySchema>