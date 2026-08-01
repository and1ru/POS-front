export const BranchTable = () => {
  return (
    <div className="space-y-6">

      {/* Ordenar */}
      <div className="flex justify-end">
        <select className="w-60 rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
          <option value="">Ordenar por dinero</option>
          <option value="desc">Mayor a menor</option>
          <option value="asc">Menor a mayor</option>
        </select>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="min-w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Sede
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                Ventas
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                Productos
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                Dinero
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4">Medellín</td>
              <td className="px-6 py-4 text-center">125</td>
              <td className="px-6 py-4 text-center">482</td>
              <td className="px-6 py-4 text-right font-semibold text-green-600">
                $12.350.000
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4">Bogotá</td>
              <td className="px-6 py-4 text-center">98</td>
              <td className="px-6 py-4 text-center">356</td>
              <td className="px-6 py-4 text-right font-semibold text-green-600">
                $9.870.000
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4">Cali</td>
              <td className="px-6 py-4 text-center">76</td>
              <td className="px-6 py-4 text-center">290</td>
              <td className="px-6 py-4 text-right font-semibold text-green-600">
                $7.540.000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};