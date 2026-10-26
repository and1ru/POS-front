import { useGet } from "../useGet"

interface Product {
    id: number
    name: string
    image_url: string
    sellPriceProduct: number
    stock: number
}

interface Response {
    message:string;
    success:boolean;
    result: Product[]
}

export const useInventoryCashier = (productName:string) => {
    const { data, loading, error } = useGet<Response>("inventory", { productName })
    return { data, loading, error }
}