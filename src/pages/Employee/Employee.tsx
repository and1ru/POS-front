import { useParams } from "react-router-dom";
import { useEmployee } from "../../customHooks/useEmployee/useEmployee";

export const Employee = () => {
    const { employeeId } = useParams()
    if(!employeeId){
      return <p>error</p>
    }

    const { data, error, loading } = useEmployee(Number(employeeId))

    const employee = data?.result

    if(loading) return <p>loading</p>
    if(error || !employee) return <p>error</p>
  return (
    <div className="mx-auto w-full max-w-3xl space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      {/* Información principal del empleado */}
      <section
        aria-label="Información del empleado"
        className="flex flex-col gap-5 border-b border-gray-200 pb-6 sm:flex-row sm:items-center"
      >
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-3xl font-bold text-indigo-700">
          {employee.name.charAt(0).toUpperCase()}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {employee.name}
            </h2>

            <span
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                true
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  true ? "bg-green-500" : "bg-red-500"
                }`}
              />
              {true ? "Activo" : "Despedido"}
            </span>
          </div>

          <p className="mt-2 text-sm text-gray-500">
            ID del empleado: #1
          </p>
        </div>
      </section>

      {/* Información laboral */}
      <section aria-label="Información laboral">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          Información laboral
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <article className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-medium text-gray-500">Cargo</p>
            <p className="mt-2 font-semibold text-gray-900">
              Admin
            </p>
          </article>

          <article className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-medium text-gray-500">Sucursal</p>
            <p className="mt-2 font-semibold text-gray-900">
              namekusein
            </p>
          </article>

          <article className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-medium text-gray-500">Salario mensual</p>
            <p className="mt-2 font-semibold text-gray-900">
              $10000
            </p>
          </article>

          <article className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-medium text-gray-500">
              Fecha de contratación
            </p>
            <p className="mt-2 font-semibold text-gray-900">
              10 agosto 2020
            </p>
          </article>
        </div>
      </section>

      {/* Acciones */}
      <footer className="flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          disabled={!true}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Edit Employee
        </button>

        <button
          type="button"
          disabled={!true}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Despedir empleado
        </button>
      </footer>
    </div>
  );
};