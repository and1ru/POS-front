import { useNavigate } from "react-router-dom";

interface Props {
    id:number;
}

export const EmployeeTargetComponent = ({id}:Props) => {
    const navegar = useNavigate()
    function handleClick() {
        navegar(`/private/employee/${id}`, {replace:true})
    }
  return (
    <div className="border w-40 p-3 rounded-lg">
      <h3 className="text-center mb-3">Nombre</h3>
      <p className="mb-2">Rol - sede</p>
      <p>Estado: online</p>
      <button 
      onClick={handleClick}
      className="p-2 bg-gray-800 w-full rounded-lg text-white mt-5 cursor-pointer">
        editar
      </button>
    </div>
  );
};
