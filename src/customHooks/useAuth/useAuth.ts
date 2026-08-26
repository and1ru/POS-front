import { useGet } from "../useGet"

type role = "root" | "admin" | "owner"

interface Result {
    name:string;
    role:role
}

interface response {
    message:string;
    success:boolean;
    result: Result
}

export const useAuth = () => {
    const { data, error, loading } = useGet<response>("auth")
    return {data, loading, error}
}