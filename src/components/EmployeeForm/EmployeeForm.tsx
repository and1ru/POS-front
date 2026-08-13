import { FilterBranch } from "../FilterBranch/FilterBranch"
import { FilterRol } from "../FilterRol/FilterRol"

export const EmployeeForm = () => {
  return (
    <section className="mb-10">
      <form className="mb-10 w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-3 items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <div className="relative w-full md:flex-1">
          <input
            type="search"
            placeholder="Buscar empleado..."
            className="w-full bg-gray-50 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 rounded-xl py-2 px-4 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white"
          />
        </div>
        <div className="flex w-full md:w-auto gap-3">
          <FilterBranch />
          <FilterRol />
        </div>
      </form>
    </section>
  )
}