import { useGet } from "../useGet"

interface branches {
    branch_id: number,
    company_id: number,
    branch_name: string,
    branch_address: string,
    branch_city: string
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