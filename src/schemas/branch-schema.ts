import z from 'zod'

export const createBranchSchema = z.object({
    name: z.string().min(1, "Branch Name is required"),
    city: z.string().min(1, "City is required"),
    address: z.string().min(1, "Address is required")
})

export type createBranchType = z.infer<typeof createBranchSchema>