import { useNavContext } from "../../context/nav-context/nav-context";
import { LogOut } from "../LogOut/LogOut";
import { NavBarLi } from "../NavBarLi/NavBarLi";

export const AdminNav = () => {
  const { navContext, setNavContext } = useNavContext();

  function handleNav() {
    setNavContext(false);
  }

  return (
    <nav
      onClick={handleNav}
      className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-50 ${navContext ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
    >
      <ul
        onClick={(e) => e.stopPropagation()}
        className={`w-72 h-screen bg-white border-r border-gray-100 shadow-xl flex flex-col gap-2 p-6 transition-transform duration-300 ease-in-out overflow-y-auto ${navContext ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="mb-6 pb-4 border-b border-gray-100">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Navegación
          </h2>
        </div>

        <NavBarLi address="/private/dashboard" title="Dashboard" />
        <NavBarLi address="/private/inventory" title="Inventory" />
        <NavBarLi address="/private/history" title="History" />
        <NavBarLi address="/private/statistics" title="statistics" />
        <NavBarLi address="/private/manage-employees" title="Manage Employees" />

        <LogOut/>
      </ul>
    </nav>
  );
};