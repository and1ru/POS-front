import { useState } from "react"

type Money = "asc" | "desc"

export const FilterMoney = () => {
    const [money, setMoney] = useState<Money>()

    return (
        <select className="w-60 rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
            <option value="">Ordenar por dinero</option>
            <option value="desc">Mayor a menor</option>
            <option value="asc">Menor a mayor</option>
        </select>
    )
}