import { HistorialTargetComponent } from "../components/historial-target-component";

export const HistorialPage = () => {
  return (
    <>
      <section>
        <form className="grid grid-cols-2">
          <input type="text" placeholder="introduce el id de venta" className="border p-2 rounded-lg col-span-2"/>
          <select className="border p-2 rounded-lg" name="" id="">
            <option value="">filtrar por tiempo</option>
          </select>
        </form>
      </section>
      <section>
        <h1>Historial</h1>
        <HistorialTargetComponent/>
      </section>
    </>
  );
};
