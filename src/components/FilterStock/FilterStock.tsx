import { useState } from "react"

export const FilterStock = () => {
    const [stock, setStock] = useState("")

    const handleStock = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        setStock(value)
    }
    return (
        <select
            value={stock}
            onChange={handleStock}
            name="stock"
            id="stock"
            className="w-full md:w-44 bg-gray-50 text-sm text-gray-700 border border-gray-200 rounded-xl py-2 px-3 cursor-pointer transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white"
        >
            <option value="">Filtrar por stock</option>
            <option value="desc">Mayor a menor</option>
            <option value="asc">Menor a mayor</option>
        </select>
    )
}