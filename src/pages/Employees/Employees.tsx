import { EmployeeForm } from "../../components/EmployeeForm/EmployeeForm";
import { styles } from "../../helper/style";
import { EmployeeCard } from "../../components/EmployeeCard/EmployeeCard";

export const ManageEmployees = () => {
  return (
    <>
      <h1 className={styles.titulos}>Manage Employees</h1>
      <EmployeeForm/>

      <section className="grid gap-5 px-20 grid-cols-2 xl:grid-cols-3">
        <EmployeeCard id={1}/>
        <EmployeeCard id={2}/>
        <EmployeeCard id={3}/>
        <EmployeeCard id={4}/>
      </section>
    </>
  );
};