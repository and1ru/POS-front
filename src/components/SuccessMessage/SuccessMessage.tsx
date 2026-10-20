import { useEffect, useRef, type ReactNode } from "react"

interface Props {
    successfully: boolean;
    children: ReactNode;
}

export const SuccessMessage = ({ successfully, children }:Props) => {
    const dialogRef = useRef<null | HTMLDialogElement>(null)

    const close = () => {
        dialogRef.current?.close()
    }

    const open = () => {
        dialogRef.current?.showModal()
    }

    useEffect(()=> {
        if(successfully){
            open()
        }
    },[successfully])

    return(
        <dialog ref={dialogRef} className="m-auto px-4 py-10 rounded-xl w-70">
            <div className="border-6 border-green-600 rounded-full w-30 h-30 flex justify-center items-center mx-auto bg-green-100 text-green-600 font-black ">
                <p className="text-7xl">✓</p>
            </div>
            <p className="text-green-700 my-5 text-center font-bold">{children}</p>
            <button onClick={close} className="bg-green-500 w-full p-2 rounded-lg text-white outline-none hover:bg-green-600">Close</button>
        </dialog>
    )
}