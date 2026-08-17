import type { branchType } from "../../schemas/branch-schema";
import { apiClient } from "../apiClient";
import { useAction } from "../useAction"

interface Response {
    message:string;
    success:boolean;
}

export const useCreateBranch = () => {
    const { action, loading, error, data } = useAction<Response>()
    const create = (body:branchType) => {
        action(() => apiClient.post("branch", body))
    }

    return { create, loading, error, data }
}