import { useGet } from "../useGet"

interface Product {
    id:number;
    name:string;
    image_url:string
    price:number;
    stock:number
    is_in_branch:number
}

interface Response {
    message:string;
    success:boolean;
    result: Product[]
}

export const useInventory = () => {
    const { data, loading } = useGet<Response>("inventory")
    return { data, loading}
}