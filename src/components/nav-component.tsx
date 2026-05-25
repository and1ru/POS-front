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
      className={` w-full bg-black/50  fixed top-0 ${navContext ? "" : "translate-x-[-100vh]"} transition-all duration-300`}
    >
      <ul className={`w-70 h-screen bg-gray-800 flex flex-col gap-5 ${navContext ? "" : "translate-x-[-63vh]"} transition-all duration-300`}>
        <LiNavComponent address="/private/dashboard" title="dashboard"/>
        <LiNavComponent address="/private/products" title="products"/>
        <LiNavComponent address="/private/historial-ventas" title="historial de ventas"/>
        <LiNavComponent address="/private/estadisticas" title="estadisticas"/>
        <LiNavComponent address="/private/create-product" title="create product"/>
        <LiNavComponent address="/private/handle-workers" title="handle workers"></LiNavComponent>
        <LiNavComponent address="" title="salir"/>
      </ul>
    </nav>
  );
};
