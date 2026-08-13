import { useState } from "react";

type Money = "asc" | "desc"
type Sales = "asc" | "desc"
export const ProductTable = () => {
  const [money, setMoney] = useState<Money>()
  const [sales, setSales] = useState<Sales>()
  
  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <select className="mr-5 rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
          <option value="">Ordenar por dinero</option>
          <option value="desc">Mayor a menor</option>
          <option value="asc">Menor a mayor</option>
        </select>
        <select className="rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
          <option value="">Ordenar por ventas</option>
          <option value="desc">Mayor a menor</option>
          <option value="asc">Menor a mayor</option>
        </select>
      </div>
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Producto
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                Cantidad vendida
              </th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                Total vendido
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4">Hamburguesa Clásica</td>
              <td className="px-6 py-4 text-center">245</td>
              <td className="px-6 py-4 text-right font-semibold text-green-600">
                $7.350.000
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4">Pizza Hawaiana</td>
              <td className="px-6 py-4 text-center">198</td>
              <td className="px-6 py-4 text-right font-semibold text-green-600">
                $6.420.000
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4">Perro Especial</td>
              <td className="px-6 py-4 text-center">163</td>
              <td className="px-6 py-4 text-right font-semibold text-green-600">
                $4.890.000
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4">Gaseosa</td>
              <td className="px-6 py-4 text-center">410</td>
              <td className="px-6 py-4 text-right font-semibold text-green-600">
                $3.280.000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};