import { apiClient } from "../apiClient";
import { useAction } from "../useAction"

interface Response {
    message:string;
    success:boolean;
}

interface Body {
    productId: number;
    currentStock: number,
    minStock: number,
    boughtPriceProduct: number,
    sellPriceProduct: number
}

export const useCreateBranchProduct = () => {
    const { action, loading, error, reset, success } = useAction<Response>()
    
    const create = (body:Body) => {
        action(() => apiClient.post("branch-product", body))
    }

    return { create, loading, error, success, resetRequest:reset }
}