import { useRef } from "react";

export const ProductsPage = () => {
    const dialogRef = useRef<HTMLDialogElement | null>(null)

    function openDialog(){
        dialogRef.current?.showModal()
    }

    function closeDialog(){
        dialogRef.current?.close()
    }

  return (
    <>
        <form className="mb-10">
            <input 
            type="search" 
            placeholder="product"
            className="focus:outline-none border p-2 w-full rounded-lg mb-2"
            />
            <select name="" id="" className="w-40 border p-2 mr-6 focus:outline-none rounded-lg">
                <option value="">filtrar por stock</option>
                <option value="">mayor a menor</option>
                <option value="">menor a mayor</option>
            </select>
            <select name="" id="" className="border p-2 focus:outline-none rounded-lg">
                <option value="">filtrar por precio</option>
                <option value="">mayor a menor</option>
                <option value="">menor a mayor</option>
            </select>
        </form>

        <section className="flex gap-x-10 p-3">
            <div 
            onClick={openDialog}
            className="w-40 h-54 border p-3 rounded-lg">
                <img src="" alt="" className="h-25 w-full mb-2 rounded-xl border"/>
                <p>nombre</p>
                <p>99,99$</p>
                <p>stock:</p>
            </div>
            <div className="w-40 h-54 border p-3 rounded-lg">
                <img src="" alt="" className="h-25 w-full mb-2 rounded-xl border"/>
                <p>nombre</p>
                <p>99,99$</p>
                <p>stock:</p>
            </div>
            <dialog 
            ref={dialogRef}
            className="left-4 top-30 relative backdrop:bg-black/40 p-2"
            >
                <button
                className="bg-red-600 text-white p-2 font-bold absolute left-[90%] rounded-lg" 
                onClick={closeDialog}>X</button>
                <p>Nombre product</p>
                <form>
                    <input type="text" placeholder="product name" className="border"/>
                    <input type="number" placeholder="price" />
                    <input type="number" placeholder="stock" />
                </form>
                
            </dialog>
        </section>
    </>
  );
};