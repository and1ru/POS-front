import { useGet } from "../useGet";

interface User {
    name:string
    role:string
    salary:number
    branch_name:string
    branch_id:number
    date: Date
    id:number
}

interface Response {
    message:string;
    success:boolean;
    result:User
}

export const useEmployee = (employeeId:number) => {
    const { data, loading, error, recall } = useGet<Response>(`employee/${employeeId}`)
    return { data, loading, error, recall }
}