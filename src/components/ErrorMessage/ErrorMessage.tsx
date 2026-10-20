import { useEffect, useRef, type ReactNode } from "react"

interface Props {
    open: boolean;
    children: ReactNode;
}

export const ErrorMessage = ({open, children}:Props) => {
    const dialogRef = useRef<null | HTMLDialogElement>(null)

    const close = () => {
        dialogRef.current?.close()
    }

    useEffect(()=> {
        if(open){
            dialogRef.current?.showModal()
        }
    },[open])

    return(
        <dialog ref={dialogRef} className="m-auto px-4 py-10 rounded-xl w-70">
            <div className="border-6 border-red-600 rounded-full w-30 h-30 flex justify-center items-center mx-auto bg-red-100">
                <p className="text-5xl">❌</p>
            </div>
            <p className="text-red-500 my-5 text-center font-bold">{children}</p>
            <button onClick={close} className="bg-red-500 w-full p-2 rounded-lg text-white hover:bg-red-600 outline-none">Close</button>
        </dialog>
    )
}