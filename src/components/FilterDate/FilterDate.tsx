import { useState } from "react"

export const FilterDate = () => {
    const [date, setDate] = useState("")
    const handleDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        setDate(value)
    }
    return (
        <select
            value={date}
            onChange={handleDate}
            name="time"
            id="time"
            className="w-full md:w-44 bg-gray-50 text-sm text-gray-700 border border-gray-200 rounded-xl py-2 px-3 cursor-pointer transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white"
        >
            <option value="">Filtrar por tiempo</option>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="week">This week</option>
            <option value="month">This month</option>
            <option value="year">This year</option>
        </select>
    )
}