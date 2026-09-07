import { EmployeeForm } from "../../components/EmployeeForm/EmployeeForm";
import { styles } from "../../helper/style";
import { EmployeeCard } from "../../components/EmployeeCard/EmployeeCard";
import { useEmployees } from "../../customHooks/useEmployees/useEmployees";

export const ManageEmployees = () => {
  const { data, loading, error } = useEmployees()
  return (
    <>
      <h1 className={styles.titulos}>Manage Employees</h1>
      <EmployeeForm/>

      <section className="grid gap-5 px-20 grid-cols-2 xl:grid-cols-3">
        { loading ? <p>cargando</p>:null}
        { error ? <p>error</p>:null}
        {data?.result.map((employee) => <EmployeeCard key={employee.id} id={employee.id} name={employee.name} role={employee.role}  /> )}
      </section>
    </>
  );
};