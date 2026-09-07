import { apiClient } from "../apiClient";
import { useAction } from "../useAction"

interface Response {
    message:string;
    success:boolean;
}

interface Body {
    productId: number;
    price: number;
    stock: number;
}

export const useCreateBranchProduct = () => {
    const { action, loading, error, data, reset } = useAction<Response>()
    const create = (body:Body) => {
        action(() => apiClient.post("branch-product", body))
    }

    return { create, loading, error, data, resetRequest:reset }
}