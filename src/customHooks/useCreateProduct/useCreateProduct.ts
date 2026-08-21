import { apiClient } from "../apiClient"
import { useAction } from "../useAction"

export const useCreateProduct = () => {
    const { action, data, error, loading } = useAction()

    function create(body:any) {
        action(() => apiClient.post("create-product", body))
    }

    return { data, error, loading, create }
}