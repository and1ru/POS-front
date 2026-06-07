import { EmployeeTargetComponent } from "./employee-card-component";

export const ManageEmployeesPage = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold">Manage Employees</h1>
      <section>
        <form>
          <label htmlFor="">Name employee</label>
          <input type="text" className="border p-2 rounded-lg"/>
          <select>
            <option value="">Seleccionar Sede</option>
          </select>
          <select name="" id="">
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