import { FormManageEmployeesComponent } from "../components/form-manage-employees-component";
import { styles } from "../helper/style";
import { EmployeeTargetComponent } from "./employee-card-component";

export const ManageEmployeesPage = () => {
  return (
    <>
      <h1 className={styles.titulos}>Manage Employees</h1>
      <FormManageEmployeesComponent/>

      <section className="grid gap-5 px-20 grid-cols-2 xl:grid-cols-3">
        <EmployeeTargetComponent id={1}/>
        <EmployeeTargetComponent id={2}/>
        <EmployeeTargetComponent id={3}/>
        <EmployeeTargetComponent id={4}/>
      </section>
    </>
  );
};