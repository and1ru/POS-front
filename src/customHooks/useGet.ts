import { useEffect, useState } from "react"
import { apiClient } from "./apiClient"

interface UseGetResult<TResponse>{
    data: TResponse | null;
    loading: boolean;
    error: unknown;
    recall: () => Promise<void>;
}

export const useGet = <TResponse>(url:string): UseGetResult<TResponse> => {
    const [data, setData] = useState<TResponse | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<unknown>(null)

    const get = async () => {
        setLoading(true)
        setError(null)
        try {
            const request = await apiClient.get(url)
            setData(request.data)
            console.log(request.data)
        } catch (error) {
            console.error(error)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        get()
    },[])

    return { data, loading, error, recall:get }
}