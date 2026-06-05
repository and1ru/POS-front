interface Props {
    dialog: React.RefObject<HTMLDialogElement | null>
}

export const ProductTargetComponent = ({dialog}:Props) => {

    function openDialog() {
        dialog.current?.showModal()
    }

    return (
        <div
            onClick={openDialog}
            className="w-40 h-54 border p-3 rounded-lg">
            <img src="" alt="" className="h-25 w-full mb-2 rounded-xl border" />
            <p>nombre</p>
            <p>99,99$</p>
            <p>stock:</p>
        </div>
    );
};