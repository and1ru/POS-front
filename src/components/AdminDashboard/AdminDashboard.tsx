export const AdminDashboard = () => {
  return (
    <>
    <div className="px-20 py-10">
      {/* Saludo */}
      <section aria-label="Bienvenida" className="mb-10">
        <p className="text-sm font-medium text-indigo-600">
          Panel de administración
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
          ¡Hola, Admin Name!
        </h1>

        <p className="mt-2 text-gray-500">
          Aquí tienes el resumen del rendimiento de tu empresa este mes.
        </p>
      </section>

      {/* Resumen mensual */}
      <section
        aria-label="Resumen mensual"
        className="grid grid-cols-1 gap-5 sm:grid-cols-2"
      >
        {/* Ganancias */}
        <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Ganancias del mes
              </p>

              <p className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                $1000000000
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Ingresos acumulados este mes
              </p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m4-9.5c0-1.4-1.8-2.5-4-2.5s-4 1.1-4 2.5 1.8 2.5 4 2.5 4 1.1 4 2.5-1.8 2.5-4 2.5-4-1.1-4-2.5"
                />
              </svg>
            </div>
          </div>
        </article>

        {/* Productos vendidos */}
        <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Productos vendidos
              </p>

              <p className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                2000
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Unidades vendidas este mes
              </p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9ZM3 7.5l9 4.5m0 0 9-4.5M12 12v9m-4.5-15L16.5 10.5"
                />
              </svg>
            </div>
          </div>
        </article>
      </section>
    </div>
    </>
  );
};
