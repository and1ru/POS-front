import { useHistory } from "../../customHooks/useHistory/useHistory";
import { HistoryCard } from "../HistoryCard/HistoryCard";

export const AdminDashboard = () => {
  const { data, error } = useHistory("today")
  if (error || !data) return <p>error</p>
  return (
    <>
      <div className="px-20 py-10">
        {/* Saludo */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600">
                Panel de Admin
              </p>

              <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                ¡Hola, AdminName!
              </h1>

              <p className="mt-2 text-sm text-gray-500 sm:text-base">
                Aquí tienes el resumen de tu jornada de hoy.
              </p>
            </div>

            <div className="flex w-fit items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6"
                >
                  <path d="M3 21h18" />
                  <path d="M5 21V7l8-4v18" />
                  <path d="M19 21V11l-6-4" />
                  <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
                </svg>
              </div>

              <div>
                <p className="text-xs font-medium text-gray-500">
                  Sucursal asignada
                </p>
                <p className="mt-1 text-sm font-semibold text-gray-900">
                  branchName
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="my-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Number of sales */}
            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Ventas de hoy
                  </p>

                  <p className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
                    {data.result.length}
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Transacciones realizadas
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6"
                  >
                    <path d="M6 2h12l2 5H4l2-5Z" />
                    <path d="M4 7v13h16V7" />
                    <path d="M9 11h6" />
                    <path d="M9 15h6" />
                  </svg>
                </div>
              </div>
            </article>

            {/* Total revenue */}
            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Total vendido hoy
                  </p>

                  <p className="mt-3 break-words text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {data.result.reduce((total, sale) => total + sale.total_price, 0)}
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Ingresos de la jornada
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
                  >
                    <rect x="2" y="6" width="20" height="13" rx="2" />
                    <path d="M2 10h20" />
                    <path d="M6 15h4" />
                  </svg>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Today's sales history */}
        <section className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Historial de ventas
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Consulta las ventas realizadas durante el día.
              </p>
            </div>

            <span className="w-fit rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700">
              {data?.result.length} registros
            </span>
          </div>

          <div className="space-y-3 p-4 sm:p-6">
            {data?.result.length > 0 ? (
              data?.result.map((sale) => (
                <HistoryCard
                  key={sale.id}
                  id={sale.id}
                  total={sale.total_price}
                  date={sale.date}
                  quantity={sale.quantity}
                  products={sale.products}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-14 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-7 w-7"
                  >
                    <rect x="3" y="4" width="18" height="17" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </div>

                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  No hay ventas todavía
                </h3>

                <p className="mt-1 max-w-sm text-sm text-gray-500">
                  Las ventas realizadas hoy aparecerán aquí.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};
