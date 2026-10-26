import { apiClient } from "../apiClient"
import { useAction } from "../useAction"

interface Body {
    productId: number;
    currentStock: number,
    minStock: number,
    boughtPriceProduct: number,
    sellPriceProduct: number
}

export const useUpdateBranchProduct = () => {
    const { action, loading, error, success } = useAction()

    const update = async (body:Body) => {
        await action(() => apiClient.put("branch-product", body))
    }

    return { update, loading, error, success }
}