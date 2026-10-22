import { useGet } from "../useGet";

interface User {
    id:number;
    name:string;
    role:string
    branch_name:string
}

interface Response {
    message:string;
    success:boolean;
    result:User[]
}

export const useEmployees = () => {
    const { data, loading, error } = useGet<Response>("employees")
    return { data, loading, error }
}