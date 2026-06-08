import { useNavContext } from "../context/nav-context/nav-context";
import { LiNavComponent } from "./li-nav-component";

export const NavComponent = () => {
  const { navContext, setNavContext } = useNavContext();

  function handleNav() {
    setNavContext(false);
  }

  return (
    <nav
    onClick={handleNav}
      className={`w-full bg-black/50  fixed top-0 ${navContext ? "" : "translate-x-[-100vh]"} transition-all duration-300`}
    >
      <ul className={`w-70 h-screen bg-white border-gray-200 flex flex-col gap-5 ${navContext ? "" : "translate-x-[-63vh]"} transition-all duration-300`}>
        <LiNavComponent address="/private/dashboard" title="dashboard"/>
        <LiNavComponent address="/private/venta" title="venta"/>
        <LiNavComponent address="/private/products" title="products"/>
        <LiNavComponent address="/private/historial-ventas" title="historial de ventas"/>
        <LiNavComponent address="/private/estadisticas" title="estadisticas"/>
        <LiNavComponent address="/private/create-product" title="create product"/>
        <LiNavComponent address="/private/manage-employees" title="Manage employees"/>
        <LiNavComponent address="" title="salir"/>
      </ul>
    </nav>
  );
};
