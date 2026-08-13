export const Dashboard = () => {
  // Simulación de datos formateados
  const ventasHoy = "123,456,789.99";

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 sm:p-8 text-gray-800">
      <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-100 pb-5">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Hola, Andrés 👋
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Bienvenido de vuelta a tu panel de control.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-xl text-sm font-semibold self-start sm:self-auto shadow-sm border border-indigo-100">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          Administrador — Monterrey
        </div>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between transition-all hover:shadow-md">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                Ventas de Hoy
              </h2>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg text-xs font-bold">
                +12.5%
              </span>
            </div>
            <p className="text-3xl font-black text-gray-900 tracking-tight">
              ${ventasHoy}
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-50 text-xs text-gray-500">
            Actualizado en tiempo real
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col transition-all hover:shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400">
              Notificaciones
            </h2>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          </div>
          <div className="flex-1 flex flex-col gap-3 justify-center">
            <div className="flex gap-3 items-start p-2.5 bg-amber-50/60 rounded-xl border border-amber-100/50">
              <span className="text-base">⚠️</span>
              <p className="text-xs text-amber-900 font-medium">
                Stock bajo en el producto "Laptop Pro 15".
              </p>
            </div>
            <div className="flex gap-3 items-start p-2.5 bg-blue-50/60 rounded-xl border border-blue-100/50">
              <span className="text-base">📦</span>
              <p className="text-xs text-blue-900 font-medium">
                Nuevo pedido #4402 listo para empaquetar.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};