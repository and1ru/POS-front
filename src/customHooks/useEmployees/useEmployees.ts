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

interface QueryT {
    employeeBranch:string, 
    employeeName:string, 
    employeeRole:string
}

export const useEmployees = (query:QueryT) => {
    const { data, loading, error } = useGet<Response>("employees", query )
    return { data, loading, error }
}