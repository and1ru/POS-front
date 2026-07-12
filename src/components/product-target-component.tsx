import { styles } from "../helper/style";

interface Props {
  dialog: React.RefObject<HTMLDialogElement | null>;
}

export const ProductTargetComponent = ({ dialog }: Props) => {
  function openDialog() {
    dialog.current?.showModal();
  }

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4 flex flex-col justify-between max-w-xs transition-shadow duration-200 hover:shadow-md">
      
      {/* Imagen del Producto */}
      <img 
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" 
        alt="Producto" 
        className="w-full h-32 object-cover rounded-xl mb-4" 
      />
      
      {/* Información */}
      <div className="flex flex-col gap-1 mb-4">
        <p className="font-bold text-gray-800 text-lg capitalize">Nombre</p>
        
        <div className="flex justify-between items-center mt-1">
          <p className="text-xl font-extrabold text-indigo-600">Precio</p>
          <p className="text-xs font-medium text-gray-400">
            Stock: <span className="text-gray-600 font-semibold">0 u.</span>
          </p>
        </div>
      </div>
      
      {/* Botón de Acción */}
      <button 
        onClick={openDialog} 
        className={`${styles.button} !py-2 !text-sm`}
      >
        Editar
      </button>
    </div>
  );
};

