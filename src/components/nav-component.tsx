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
      // El contenedor padre ahora es un overlay que ocupa toda la pantalla
      className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-50 ${navContext ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
    >
      {/* Menú Lateral (Sidebar) */}
      <ul
        onClick={(e) => e.stopPropagation()} // Evita que se cierre el menú al hacer click dentro de la lista
        className={`w-72 h-screen bg-white border-r border-gray-100 shadow-xl flex flex-col gap-2 p-6 transition-transform duration-300 ease-in-out overflow-y-auto ${navContext ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Encabezado del menú para darle estructura visual */}
        <div className="mb-6 pb-4 border-b border-gray-100">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Navegación
          </h2>
        </div>

        <LiNavComponent address="/private/dashboard" title="Dashboard" />
        <LiNavComponent address="/private/venta" title="Venta" />
        <LiNavComponent address="/private/products" title="Productos" />
        <LiNavComponent address="/private/historial-ventas" title="Historial de Ventas" />
        <LiNavComponent address="/private/estadisticas" title="Estadísticas" />

        {/* Separador sutil antes de las acciones de gestión */}
        <div className="my-2 border-t border-gray-50" />

        <LiNavComponent address="/private/create-product" title="Crear Producto" />
        <LiNavComponent address="/private/manage-employees" title="Gestionar Empleados" />

        {/* Empujamos el botón "Salir" al fondo si hay espacio suficiente */}
        <div className="mt-auto pt-4">
          <LiNavComponent address="/login" title="Salir" />
        </div>
      </ul>
    </nav>
  );
};