import { useEffect, useRef, type ReactNode } from "react"

interface Props {
    open: boolean;
    children: ReactNode;
}

export const SuccessMessage = ({open, children}:Props) => {
    const dialogRef = useRef<null | HTMLDialogElement>(null)

    const handleClose = () => {
        if(open){
            dialogRef.current?.close()
        }
    }

    useEffect(()=> {
        if(open){
            dialogRef.current?.showModal()
        }
    },[open])

    return(
        <dialog ref={dialogRef} className="m-auto px-4 py-10 rounded-xl w-70">
            <div className="border-6 border-green-600 rounded-full w-30 h-30 flex justify-center items-center mx-auto">
                <p className="text-5xl">✔</p>
            </div>
            <p className="text-green-700 my-5 text-center">{children}</p>
            <button onClick={handleClose} className="bg-red-500 w-full p-2 rounded-lg text-white">Cerrar</button>
        </dialog>
    )
}