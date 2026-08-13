import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SellHisotyForm = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [date, setDate] = useState("")
  const [branch, setBranch] = useState("")
  const [saleId, setSaleId] = useState("")

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSaleId(value)
  }

  const handleBranch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setBranch(value)
  }

  const handleDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setDate(value)
  }

  useEffect(() => {
    setSearchParams({ date, branch, saleId })
  }, [date, branch, saleId])

  return (
    <section className="mb-10 w-full max-w-4xl mx-auto">
      <form className="flex flex-col md:flex-row gap-3 items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <div className="relative w-full md:flex-1">
          <input
            onChange={handleInput}
            type="text"
            placeholder="Introduce el ID de venta..."
            className="w-full bg-gray-50 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 rounded-xl py-2 px-4 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white"
          />
        </div>
        <div className="flex w-full md:w-auto gap-3">
          <select
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
          <select
            onChange={handleBranch}
            name="sede"
            id="sede"
            className="w-full md:w-44 bg-gray-50 text-sm text-gray-700 border border-gray-200 rounded-xl py-2 px-3 cursor-pointer transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white"
          >
            <option value="">Seleccionar sede</option>
            <option value="goku">goku</option>
          </select>
        </div>

      </form>
    </section>
  );
};