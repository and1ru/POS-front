import { useState } from "react"
import type { AxiosResponse } from "axios"

// dice que va a retornar la function
interface UseActionResult<TResponse> {
    // dice que puede ser de tipo generico o null
    data: TResponse | null
    loading: boolean
    error: unknown
    // action es una función genérica que recibe un parámetro body de tipo TBody y retorna una promesa que no devuelve ningún valor.
    action: <TBody>(body: TBody) => Promise<void>
}

// fn es una función genérica que recibe un body de tipo TBody y retorna una Promise cuyo resultado es una AxiosResponse que contiene una respuesta de tipo TResponse
export const useAction = <TResponse>(fn:<TBody>(body:TBody) => Promise<AxiosResponse<TResponse>>):UseActionResult<TResponse> => {
    const [data, setData] = useState<TResponse | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<unknown>(null)

    const action = async <TBody>(body:TBody) => {
        setLoading(true)
        setError(null)
        try {
            const request = await fn(body)
            setData(request.data)
            console.log(request.data)
        } catch (error) {
            console.error(error)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return { data, loading, error, action }
}