export const HistoryCard = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white border border-gray-100 rounded-2xl shadow-sm p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all duration-200 hover:shadow-md hover:border-gray-200">
      
      {/* Información de la Venta */}
      <div className="grid grid-cols-2 sm:flex sm:items-center gap-4 sm:gap-8 flex-1">
        
        {/* Fecha */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">
            Fecha
          </p>
          <p className="text-sm font-semibold text-gray-700">
            12/12/2012
          </p>
        </div>

        {/* Total Productos */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">
            Productos
          </p>
          <p className="text-sm font-medium text-gray-600">
            30 unidades
          </p>
        </div>

        {/* Total Económico */}
        <div className="col-span-2 sm:col-span-1 sm:ml-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5 sm:text-right">
            Total
          </p>
          <p className="text-xl font-black text-indigo-600 sm:text-right">
            $33.30
          </p>
        </div>

      </div>
      
      {/* Botón de Acción */}
      <button className="w-full sm:w-auto bg-gray-50 hover:bg-indigo-50 text-gray-700 hover:text-indigo-700 font-semibold text-sm py-2 px-4 rounded-xl border border-gray-200 hover:border-indigo-100 transition-colors duration-150 cursor-pointer shadow-sm sm:shadow-none">
        Ver más
      </button>

    </div>
  );
};