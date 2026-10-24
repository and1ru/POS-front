import { useRef } from "react";

export const FireEmployeeButton = () => {
    const dialogRef = useRef<null | HTMLDialogElement>(null)
    const open = () => {
        dialogRef.current?.showModal()
    }

    const close = () => {
        dialogRef.current?.close()
    }

  return (
    <>
        <button
            onClick={open}
            type="button"
            disabled={!true}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Despedir empleado
        </button>
        <dialog ref={dialogRef}>
            <button onClick={close}>Cancel</button>
            <button>I'm sure fire</button>
        </dialog>
    </>
  );
};
