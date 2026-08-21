import type { AxiosError, AxiosResponse } from "axios"
import axios from "axios"
import { useState } from "react"

interface UseActionResult<TResponse> {
    data: TResponse | null
    loading: boolean
    error: AxiosError |  null
    action: (fn: () => Promise<AxiosResponse<TResponse>>) => Promise<void>
}

export const useAction = <TResponse>(): UseActionResult<TResponse> => {
    const [data, setData] = useState<TResponse | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<null | AxiosError>(null)

    const action = async (fn: () => Promise<AxiosResponse<TResponse>>): Promise<void> => {
        setLoading(true)
        setError(null)
        try {
            const request = await fn()
            setData(request.data)
            console.log(request.data)
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err)
                console.error(err)
            }
        } finally {
            setLoading(false)
        }
    }

    return { data, loading, error, action }
}