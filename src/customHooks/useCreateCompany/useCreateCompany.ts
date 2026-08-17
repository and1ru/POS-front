import type { companyType } from "../../schemas/createCompany";
import { apiClient } from "../apiClient"
import { useAction } from "../useAction"

interface Response {
    message:string;
    success:boolean
}

export const useCreateCompany = () => {
    const { action, data, error, loading} = useAction<Response>()
    const create = (body:companyType) => {
        action(() => apiClient.post("company", body))
    }

    return {create, data,error,loading}
}