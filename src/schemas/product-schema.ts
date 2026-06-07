import z from 'zod'

// define el tamaño de la imagen
const max_file_size = 5 * 1024 * 1024
// define que tipos se aceptaran
const accepted_image_type = ["image/jpeg", "image/png", "image/webp", "image/jpg"]

export const productSchema = z.object({
    name: z.string(),
    price: z.number(),
    stock: z.number(),
    // 1. dice que recibira un archivo
    // 2. dice cual es el tamaño maximo del archivo
    // 3. dice que formato son permitidos las imagenes
    image: z
            .instanceof(File, {message: "la imagen es obligatoria"})
            .refine((file) => file.size <= max_file_size, "el tamaño maximo es de 5MB")
            .refine((file) => accepted_image_type.includes(file.type), "Solo se permiten formatos .jpg, .jpeg, .png y .webp")
})