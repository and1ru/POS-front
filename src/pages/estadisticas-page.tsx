import { useState } from "react";
import { CashierTableComponent } from "../components/cashier-table-component";
import { BranchTableComponent } from "../components/brench-table-component";
import { ProductTableComponent } from "../components/product-table-component";

type Entity = "product" | "cashier" | "branch" | ""
type DateFilter = "today" | "7 days" | "30 days" | "1 year" | "all"
export const EstadisticasPage = () => {
  const [entity, setEntity] = useState<Entity>("")
  const [_date, setDate] = useState<DateFilter>("all")

  const handleEntidad = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntity(e.target.value as Entity)
  }

  const handleDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDate(e.target.value as DateFilter)
  }

  return (
    <>
      <h1 className="text-center text-2xl font-bold my-10">
        Estadísticas
      </h1>
      <section>
        <form action="" className="grid grid-cols-2 gap-2">
          <input type="text" className="border p-2 rounded-lg col-span-2" />
          <select name="" id="" className="border p-2 rounded-lg" onChange={handleEntidad}>
            <option value={0} >seleccionar</option>
            <option value="product">product</option>
            <option value="cashier">cashier</option>
            <option value="branch">brench</option>
          </select>
          <select className="border p-2 rounded-lg" onChange={handleDate}>
            <option value="all">All time</option>
            <option value="today">Hoy</option>
            <option value="7 days">7 días</option>
            <option value="30 days">30 días</option>
            <option value="year">Este año</option>
          </select>
        </form>
      </section>
      <section className="mt-10">
        {
          entity === "branch" && <BranchTableComponent />
        }

        {
          entity === "cashier" && <CashierTableComponent />
        }

        {
          entity === "product" && <ProductTableComponent />
        }
      </section>
    </>
  );
};
