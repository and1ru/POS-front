export const CashierTableComponent = () => {
  return (
    <div className="space-y-6">

      {/* Filtros */}
      <form className="flex flex-col md:flex-row gap-4 md:justify-end">

        <select className="rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
          <option value="">Seleccionar sede</option>
          <option value="medellin">Medellín</option>
          <option value="bogota">Bogotá</option>
          <option value="cali">Cali</option>
        </select>

        <select className="rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
          <option value="">Ordenar por dinero</option>
          <option value="desc">Mayor a menor</option>
          <option value="asc">Menor a mayor</option>
        </select>

      </form>

      {/* Tabla */}
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="min-w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Cajero
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Sede
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                Ventas
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                Dinero
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">

            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4">Andrés Pérez</td>
              <td className="px-6 py-4">Medellín</td>
              <td className="px-6 py-4 text-center">142</td>
              <td className="px-6 py-4 text-right font-semibold text-green-600">
                $15.280.000
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4">Laura Gómez</td>
              <td className="px-6 py-4">Bogotá</td>
              <td className="px-6 py-4 text-center">118</td>
              <td className="px-6 py-4 text-right font-semibold text-green-600">
                $12.640.000
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4">Juan Rodríguez</td>
              <td className="px-6 py-4">Cali</td>
              <td className="px-6 py-4 text-center">97</td>
              <td className="px-6 py-4 text-right font-semibold text-green-600">
                $10.120.000
              </td>
            </tr>

          </tbody>

        </table>
      </div>

    </div>
  );
};