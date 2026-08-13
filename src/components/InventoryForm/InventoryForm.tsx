import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const InventoryForm = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [stock, setStock] = useState("")
    const [price, setPrice] = useState("")
    const [name, setName] = useState("")
  
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setName(value)
    }
  
    const handlePrice = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value
      setPrice(value)
    }
  
    const handleStock = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value
      setStock(value)
    }
  
    useEffect(() => {
      setSearchParams({ stock, price, name })
    }, [stock, price, name])

  return (
    <form className="mb-10 w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-3 items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
      <div className="relative w-full md:flex-1">
        <input
        onChange={handleInput}
        value={name}
          type="search"
          placeholder="Buscar producto..."
          className="w-full bg-gray-50 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 rounded-xl py-2 px-4 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white"
        />
      </div>

      <div className="flex w-full md:w-auto gap-3">
        <select 
        onChange={handleStock}
          name="stock" 
          id="stock" 
          className="w-full md:w-44 bg-gray-50 text-sm text-gray-700 border border-gray-200 rounded-xl py-2 px-3 cursor-pointer transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white"
        >
          <option value="">Filtrar por stock</option>
          <option value="desc">Mayor a menor</option>
          <option value="asc">Menor a mayor</option>
        </select>

        <select 
        onChange={handlePrice}
          name="price" 
          id="price" 
          className="w-full md:w-44 bg-gray-50 text-sm text-gray-700 border border-gray-200 rounded-xl py-2 px-3 cursor-pointer transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white"
        >
          <option value="">Filtrar por precio</option>
          <option value="desc">Mayor a menor</option>
          <option value="asc">Menor a mayor</option>
        </select>
      </div>

    </form>
  );
};