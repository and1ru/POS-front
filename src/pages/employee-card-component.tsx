import { useNavigate } from "react-router-dom";

interface Props {
  id: number;
}

export const EmployeeTargetComponent = ({ id }: Props) => {
  const navegar = useNavigate();
  
  function handleClick() {
    navegar(`/private/employee/${id}`, { replace: true });
  }

  return (
    <div className="w-80 bg-white border border-gray-100 rounded-2xl shadow-sm p-4 flex flex-col justify-between transition-all duration-200 hover:shadow-md hover:border-gray-200">
      
      {/* Información Principal */}
      <div className="flex flex-col items-center text-center gap-1.5">
        {/* Nombre */}
        <h3 className="font-bold text-gray-800 text-base tracking-tight truncate w-full capitalize">
          Nombre
        </h3>
        
        {/* Rol y Sede */}
        <p className="text-xs font-medium text-gray-400 truncate w-full">
          Rol — Sede
        </p>
        
        {/* Badge de Estado (Online) */}
        <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full text-[11px] font-bold mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Online
        </div>
      </div>

      {/* Botón de Acción */}
      <button 
        onClick={handleClick}
        className="w-full bg-gray-50 hover:bg-indigo-50 text-gray-700 hover:text-indigo-700 font-semibold text-xs py-2 px-3 rounded-xl border border-gray-200 hover:border-indigo-100 transition-colors duration-150 cursor-pointer mt-4"
      >
        Editar
      </button>
      
    </div>
  );
};