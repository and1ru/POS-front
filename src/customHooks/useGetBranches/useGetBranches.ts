import { useGet } from "../useGet"

interface branches {
    name:string;
    id:number;
    city:string
}

interface Response {
    message: string;
    status: boolean
    data: branches[]
}

export const useGetBranches = () => {
    const { data, error, loading } = useGet<Response>("branch")
    return { data, error, loading }
}