import { styles } from "../helper/style";
import { EmployeeTargetComponent } from "./employee-card-component";

export const ManageEmployeesPage = () => {
  return (
    <>
      <h1 className={styles.titulos}>Manage Employees</h1>
      <section className="mb-10">
        <form className="grid grid-cols-2 gap-3">
          <label htmlFor="" className="col-span-2">Name employee</label>
          <input type="text" className="border p-2 rounded-lg col-span-2"/>
          <select className="border p-2 rounded-lg">
            <option value="">Seleccionar Sede</option>
          </select>
          <select name="" id="" className="border p-2 rounded-lg">
            <option value="">Seleccionar Rol</option>
            <option value="admin">Admin</option>
            <option value=""></option>
          </select>
        </form>
      </section>

      <section className="grid grid-cols-2 gap-5">
        <EmployeeTargetComponent id={1}/>
        <EmployeeTargetComponent id={2}/>
        <EmployeeTargetComponent id={3}/>
        <EmployeeTargetComponent id={4}/>
      </section>
    </>
  );
};