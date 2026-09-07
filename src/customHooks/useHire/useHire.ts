import type { employeeType } from "../../schemas/employee";
import { apiClient } from "../apiClient";
import { useAction } from "../useAction"

interface Response {
    message:string;
    success:boolean;
    role:string;
}

export const useHire = () => {
    const { action,data, loading, error, success } = useAction<Response>()

    const hire = async (body:employeeType) => {
        await action(() => apiClient.post("hire", body))
    }

    return { hire, data, loading, error, success }
}