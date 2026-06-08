import { styles } from "../helper/style";

interface Props {
    dialog: React.RefObject<HTMLDialogElement | null>
}

export const ProductTargetComponent = ({dialog}:Props) => {

    function openDialog() {
        dialog.current?.showModal()
    }

    return (
        <div className="w-40 border p-3 rounded-lg">
            <img src="" alt="" className="h-25 w-full mb-2 rounded-xl border" />
            <p>nombre</p>
            <p>99,99$</p>
            <p>stock:</p>
            <button onClick={openDialog} className={styles.button}>Editar</button>
        </div>
    );
};