import { useState } from "react"

export const FilterPrice = () => {
    const [price, setPrice] = useState("")

    const handlePrice = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        setPrice(value)
    }
    return (
        <select
            value={price}
            onChange={handlePrice}
            name="price"
            id="price"
            className="w-full md:w-44 bg-gray-50 text-sm text-gray-700 border border-gray-200 rounded-xl py-2 px-3 cursor-pointer transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white"
        >
            <option value="">Filtrar por precio</option>
            <option value="desc">Mayor a menor</option>
            <option value="asc">Menor a mayor</option>
        </select>
    )
}