import { useGet } from "../useGet";

interface User {
    name:string
    role:string
    salary:number
    branch_name:string
    date: Date
}

interface Response {
    message:string;
    success:boolean;
    result:User
}

export const useEmployee = (employeeId:number) => {
    const { data, loading, error } = useGet<Response>(`employee/${employeeId}`)
    return { data, loading, error }
}