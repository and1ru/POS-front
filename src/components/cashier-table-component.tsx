export const CashierTableComponent = () => {
  return (
    <>
    <form action="">
        <select name="" id="">
            <option value="">seleccione la sede</option>
        </select>
        <select name="" id="">
            <option value="">ordenar por dinero</option>
            <option value="">mayor a menor</option>
            <option value="">menor a mayor</option>
        </select>
    </form>
    <table className="border w-full">
        <thead>
            <tr>
                <th>cashier</th>
                <th>sede</th>
                <th>venta</th>
                <th>dinero</th>
            </tr>
        </thead>
        <tbody>
            <tr></tr>
        </tbody>
    </table>
    </>

  );
};