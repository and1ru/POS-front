import { HistoryCard } from "../../components/HistoryCard/HistoryCard";
import { styles } from "../../helper/style";
import { useHistory } from "../../customHooks/useHistory/useHistory";
import { useState } from "react";

export const History = () => {
  const [saleId, setSaleId] = useState("")
  const [date, setDate] = useState("")

  const { data } = useHistory(date, saleId)

  const handleDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setDate(value)
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSaleId(value)
  }

  return (
    <>
      <h2 className={styles.titulos}>Historial</h2>
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
        </form>
      </section>
      <section className="flex flex-col gap-5">
        {data?.result.map((sale) =>
          <HistoryCard
            id={sale.id}
            total={sale.total_price}
            date={sale.date}
            products={sale.products}
            quantity={sale.quantity}
            key={sale.id}
          />)}
      </section>
    </>
  );
};
