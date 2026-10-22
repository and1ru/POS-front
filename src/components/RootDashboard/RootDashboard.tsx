export const RootDashboard = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Bienvenida */}
        <section aria-labelledby="dashboard-title">
          <p className="text-sm font-medium text-indigo-600">
            Panel de administración
          </p>

          <h1
            id="dashboard-title"
            className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            ¡Hola, Andres!
          </h1>

          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Aquí tienes un resumen de las empresas de tu plataforma.
          </p>
        </section>

        {/* Estadísticas */}
        <section
          aria-label="Estadísticas de empresas"
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {/* Total de empresas */}
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Total de empresas
                </p>

                <p className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                  33
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Empresas registradas en la plataforma
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9v.01M9 12v.01M9 15v.01M9 18v.01M15 13v.01M15 16v.01M15 19v.01"
                  />
                </svg>
              </div>
            </div>
          </article>

          {/* Empresas creadas este mes */}
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Empresas creadas este mes
                </p>

                <p className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                  2
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Nuevas empresas registradas este mes
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="16"
                    rx="2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 3v4M8 3v4M3 10h18M12 13v5M9.5 15.5h5"
                  />
                </svg>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
};
