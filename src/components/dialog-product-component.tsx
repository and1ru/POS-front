interface Props {
    dialog: React.RefObject<HTMLDialogElement | null>
}

export const DialogProductComponent = ({dialog}:Props) => {
    
    function closeDialog(){
        dialog.current?.close()
    }

    return (
        <dialog
            ref={dialog}
            className="w-full rounded-lg left-4 top-30 relative backdrop:bg-black/40 p-2"
        >
            <button
                className="bg-red-600 text-white p-2 font-bold absolute left-[90%] rounded-lg"
                onClick={closeDialog}>X</button>
            <h2 className="text-center my-10 text-xl">Editar Product</h2>
            <form className="flex flex-col gap-5 p-5">
                <input type="text" placeholder="product name" className="border p-2 rounded-lg focus:outline-none" />
                <input type="number" placeholder="price" className="border p-2 rounded-lg focus:outline-none" />
                <input type="number" placeholder="stock" className="border p-2 rounded-lg focus:outline-none" />
                <button className="p-2 border rounded-lg w-full bg-gray-800 text-white transition duration-200 button-active">Enviar</button>
            </form>
        </dialog>
    );
};
