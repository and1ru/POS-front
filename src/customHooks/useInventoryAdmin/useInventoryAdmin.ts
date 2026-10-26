import { useGet } from "../useGet"

interface Product {
    name:string;
    image_url:string
    id:number;
    stock: number
    minStock:number;
    boughtPriceProduct: number;
    sellPriceProduct: number
    is_in_branch: number
    branch_product_id:number
}

interface Response {
    message:string;
    success:boolean;
    result: Product[]
}

export const useInventoryAdmin = (productName:string, price?:string, stock?:string) => {
    const { data, loading, error, recall } = useGet<Response>("inventory", { productName, price, stock })
    return { data, loading, error, refetch: recall}
}