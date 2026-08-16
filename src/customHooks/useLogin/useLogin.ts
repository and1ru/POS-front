import type { loginType } from "../../schemas/login-shema";
import { apiClient } from "../apiClient";
import { useAction } from "../useAction"

interface Response {
    message:string;
    success:boolean;
    role:string;
}

export const useLogin = () => {
    const { action,data, loading, error } = useAction<Response>()

    const login = async (body:loginType) => {
        await action(() => apiClient.post("login", body))
    }

    return { login, data, loading, error }
}