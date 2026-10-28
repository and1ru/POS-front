import { useGet } from "../useGet"

interface Result {
    total_price:number
    id:number;
    date:string
    quantity: number;
    products: number
}

interface Response {
    message: string;
    status: boolean
    result: Result[]
}

export const useHistory = (date:string, id?:string ) => {
    const { data, error, loading } = useGet<Response>("history", { saleId:id, date})
    return { data, error, loading }
}