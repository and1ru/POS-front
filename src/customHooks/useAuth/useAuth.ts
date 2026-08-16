import { useGet } from "../useGet"

type role = "root" | "admin" | "owner"
interface response {
    message:string;
    success:boolean;
    role:role
}

export const useAuth = () => {
    const { data, error, loading } = useGet<response>("auth")
    return {data, loading, error}
}