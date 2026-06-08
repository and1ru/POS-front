import { styles } from "../helper/style";

export const ProductVentaTargetComponent = () => {
  return (
    <div className="border p-2 rounded-lg">
        <img src="" alt="" className="w-full h-30 border rounded-lg mb-5" />
        <p>nombre</p>
        <p>precio</p>
        <p>stock</p>
        <button className={styles.button}>Agregar</button>
    </div>
  );
};