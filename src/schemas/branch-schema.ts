import z from 'zod'

export const branchSchema = z.object({
    name: z.string().min(1, "this field is required"),
    city: z.string().min(1, "this field is required"),
    address: z.string().min(1, "this field is required")
})

export type branchType = z.infer<typeof branchSchema>