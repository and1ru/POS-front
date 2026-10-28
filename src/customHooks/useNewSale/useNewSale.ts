import { apiClient } from "../apiClient";
import { useAction } from "../useAction"

interface Response {
    message:string;
    success:boolean;
}

interface Product {
    id: number;
    price: number
    quantity: number
}

interface newSale {
    products: Product[];
    amountReceived: number
}

export const useNewSale = () => {
    const { action, success, error } = useAction<Response>()

    const newSale = async (body:newSale) => {
        await action(() => apiClient.post("sale", body))
    }

    return { newSale, success, error }
}