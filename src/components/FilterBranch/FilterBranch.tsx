import { useState } from "react"

export const FilterBranch = () => {
    const [branch, setBranch] = useState("")

    const handleBranch = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        setBranch(value)
    }
    return (
        <select
            value={branch}
            onChange={handleBranch}
            name="sede"
            id="sede"
            className="w-full md:w-44 bg-gray-50 text-sm text-gray-700 border border-gray-200 rounded-xl py-2 px-3 cursor-pointer transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white"
        >
            <option value="">Seleccionar sede</option>
            <option value="goku">goku</option>
        </select>
    )
}