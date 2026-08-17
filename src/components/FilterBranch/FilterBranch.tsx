import { useState } from "react"
import { useGetBranches } from "../../customHooks/useGetBranches/useGetBranches"

export const FilterBranch = () => {
    const [branch, setBranch] = useState("")
    const { data, loading, error } = useGetBranches()

    const handleBranch = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        setBranch(value)
    }

    if(loading) return <p>cargando</p>
    if(error) return <p>error</p>
    return (
        <select
            value={branch}
            onChange={handleBranch}
            name="sede"
            id="sede"
            className="w-full md:w-44 bg-gray-50 text-sm text-gray-700 border border-gray-200 rounded-xl py-2 px-3 cursor-pointer transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white"
        >
            <option value="">Seleccionar sede</option>
            { data !== null && data.data.map((branch) => (
                <option key={branch.branch_id} value={branch.branch_id}>{branch.branch_name}</option>
            ))}
        </select>
    )
}