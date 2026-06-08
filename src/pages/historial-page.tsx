import { HistorialTargetComponent } from "../components/historial-target-component";
import { styles } from "../helper/style";

export const HistorialPage = () => {
  return (
    <>
      <h1 className={styles.titulos}>Historial</h1>
      <section className="mb-10">
        <form className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="introduce el id de venta" className="border p-2 rounded-lg col-span-2"/>
          <select className="border p-2 rounded-lg" name="" id="">
            <option value="">filtrar por tiempo</option>
            <option value="today">today</option>
            <option value="yesterday">yesterday</option>
            <option value="week">this week</option>
            <option value="month">this month</option>
            <option value="year">this year</option>
          </select>
          <select name="" id="" className="border rounded-lg">
            <option value="">seleccionar sede</option>
          </select>
        </form>
      </section>
      <section className="flex flex-col gap-5">
        <HistorialTargetComponent/>
        <HistorialTargetComponent/>
        <HistorialTargetComponent/>
      </section>
    </>
  );
};
