import { apiClient } from "../apiClient";
import { useAction } from "../useAction"

interface Response {
    message:string;
    success:boolean;
}

export const useUpdateProduct = () => {
    const { action, loading, error, success } = useAction<Response>()
    const update = (body: FormData) => {
        action(() => apiClient.patch("product", body))
    }

    return { update, loading, error, success }
}