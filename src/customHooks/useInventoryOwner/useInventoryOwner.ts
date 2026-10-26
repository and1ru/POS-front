import { useGet } from "../useGet"

interface Product {
    id:number;
    name:string;
    image_url:string
    price:number;
}

interface Response {
    message:string;
    success:boolean;
    result: Product[]
}

export const useInventoryOwner = (productName:string) => {
    const { data, loading, error, recall } = useGet<Response>("inventory", { productName })
    return { data, loading, error, refetch: recall}
}