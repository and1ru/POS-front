import z from 'zod'

export const branchSchema = z.object({
    name: z.string().min(1),
    city: z.string().min(1),
    address: z.string().min(1)
})

export type branchType = z.infer<typeof branchSchema>