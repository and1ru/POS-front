interface Props {
  dialog: React.RefObject<HTMLDialogElement | null>
}

export const UpdateProduct = ({ dialog }: Props) => {
  
  function closeDialog() {
    dialog.current?.close()
  }

  return (
    <dialog
      ref={dialog}
      className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-xs animate-in fade-in zoom-in-95 duration-200 mx-auto my-auto"
    >
      {/* Botón de cierre superior derecho */}
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full w-8 h-8 flex items-center justify-center font-sans text-sm transition-colors duration-150"
        onClick={closeDialog}
        aria-label="Cerrar modal"
      >
        ✕
      </button>

      {/* Título */}
      <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
        Editar Producto
      </h2>

      {/* Formulario */}
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Nombre del producto</label>
          <input 
            type="text" 
            placeholder="Ej. Auriculares Gamer" 
            className="border border-gray-200 p-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200" 
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Precio</label>
            <input 
              type="number" 
              placeholder="$0.00" 
              className="border border-gray-200 p-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200" 
            />
          </div>
          
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Stock</label>
            <input 
              type="number" 
              placeholder="0" 
              className="border border-gray-200 p-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200" 
            />
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex gap-3 mt-4">
          <button 
            type="button"
            onClick={closeDialog}
            className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors duration-150"
          >
            Cancelar
          </button>
          <button 
            type="submit"
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-indigo-100 transition-all duration-200 active:scale-[0.98]"
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </dialog>
  );
};