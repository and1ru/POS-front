import z from 'zod'

export const uploadProduct = z.object({
    price: z.number(),
    stock: z.number()
})

export type uploadProductType = z.infer<typeof uploadProduct>