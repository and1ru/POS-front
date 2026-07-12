import { FormHistorialVentas } from "../components/form-historial-ventas";
import { HistorialTargetComponent } from "../components/historial-target-component";
import { styles } from "../helper/style";

export const HistorialPage = () => {
  return (
    <>
      <h1 className={styles.titulos}>Historial</h1>
      <FormHistorialVentas />
      <section className="flex flex-col gap-5">
        <HistorialTargetComponent/>
        <HistorialTargetComponent/>
        <HistorialTargetComponent/>
      </section>
    </>
  );
};
