import { apiClient } from "../apiClient"
import { useAction } from "../useAction"

export const useUpdateEmployee = () => {
    const { action, loading, error, success } = useAction()

    const update = async (id:number, branch:number, name:string, role:string, salary:number) => {
        await action(() => apiClient.put("employee", { id, branch, name, role, salary }))
    }

    return { update, loading, error, success }
}