export const SellHisotyForm = () => {
  return (
    <section className="mb-10 w-full max-w-4xl mx-auto">
      <form className="flex flex-col md:flex-row gap-3 items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        
        {/* Input de Búsqueda por ID (Toma el espacio principal disponible) */}
        <div className="relative w-full md:flex-1">
          <input 
            type="text" 
            placeholder="Introduce el ID de venta..." 
            className="w-full bg-gray-50 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 rounded-xl py-2 px-4 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white" 
          />
        </div>

        {/* Contenedor de Filtros (Selects) */}
        <div className="flex w-full md:w-auto gap-3">
          {/* Filtro por Tiempo */}
          <select 
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

          {/* Filtro por Sede */}
          <select 
            name="sede" 
            id="sede" 
            className="w-full md:w-44 bg-gray-50 text-sm text-gray-700 border border-gray-200 rounded-xl py-2 px-3 cursor-pointer transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white"
          >
            <option value="">Seleccionar sede</option>
          </select>
        </div>

      </form>
    </section>
  );
};