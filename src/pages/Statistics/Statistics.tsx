import { useEffect, useState } from "react";
import { BranchTable } from "../../components/BranchTable/BranchTable";
import { CashierTable } from "../../components/CashierTable/CashierTable";
import { ProductTable } from "../../components/ProductTable/ProductTable";
import { useSearchParams } from "react-router-dom";

type Entity = "product" | "cashier" | "branch" | "";
type DateFilter = "today" | "7 days" | "30 days" | "1 year" | "all";

export const Statistics = () => {
  const [entity, setEntity] = useState<Entity>("");
  const [date, setDate] = useState<DateFilter>("all");
  const [name, setName] = useState("")
  const [_searchParams,setSearchParams] = useSearchParams()

  const handleEntidad = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntity(e.target.value as Entity);
  };

  const handleDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDate(e.target.value as DateFilter);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setName(value)
  }

  useEffect(() => {
    setSearchParams({entity, date, name})
  }, [entity, date, name])

  return (
    <main className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Estadísticas
      </h1>

      {/* Filtros */}
      <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8">

        <h2 className="text-lg font-semibold text-gray-700 mb-6">
          Filtros
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <input
          onChange={handleInput}
          value={name}
            type="text"
            placeholder="Buscar..."
            className="border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
          />

          <select
            value={entity}
            onChange={handleEntidad}
            className="border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="">Seleccionar entidad</option>
            <option value="product">Productos</option>
            <option value="cashier">Cajeros</option>
            <option value="branch">Sucursales</option>
          </select>

          <select
            defaultValue="all"
            onChange={handleDate}
            className="border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="all">Todo el tiempo</option>
            <option value="today">Hoy</option>
            <option value="7 days">Últimos 7 días</option>
            <option value="30 days">Últimos 30 días</option>
            <option value="1 year">Este año</option>
          </select>

        </form>
      </section>

      {/* Resultado */}
      <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

        {entity === "" && (
          <div className="text-center py-20 text-gray-400">
            Selecciona una entidad para visualizar las estadísticas.
          </div>
        )}

        {entity === "branch" && <BranchTable />}
        {entity === "cashier" && <CashierTable />}
        {entity === "product" && <ProductTable />}

      </section>

    </main>
  );
};