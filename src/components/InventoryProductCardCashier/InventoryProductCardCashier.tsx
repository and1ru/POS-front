import { useCartStore } from "../../context/cartContext/cartStore"

interface Props {
    id: number
    name: string
    img: string
    price: number
    stock: number
}

export const InventoryProductCardCashier = ({img, id, name, price, stock }: Props) => {
    const addProduct = useCartStore((store) => store.addProduct)

    const handleClick = () => {
        addProduct({ img, id, name, price, quantity:1 })
    }

    return (
        <article className="group flex w-full max-w-xs flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
            <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-xl bg-gray-50 p-3">
                <img
                    src={img}
                    alt={name}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />

                <span
                    className={`absolute right-2 top-2 rounded-full px-2.5 py-1 text-xs font-semibold ${
                        stock > 0
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                    }`}
                >
                    {stock > 0 ? `${stock} disponibles` : "Agotado"}
                </span>
            </div>

            <div className="flex flex-1 flex-col pt-4">
                <h3 className="line-clamp-2 min-h-12 text-base font-semibold capitalize leading-6 text-gray-800">
                    {name}
                </h3>

                <p className="mt-2 text-xl font-bold tracking-tight text-gray-900">
                    {price.toLocaleString("es-CO", {
                        style: "currency",
                        currency: "COP",
                        maximumFractionDigits: 0,
                    })}
                </p>

                <button
                    onClick={handleClick}
                    type="button"
                    disabled={stock <= 0}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-5 w-5"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 5v14m-7-7h14"
                        />
                    </svg>
                    Add
                </button>
            </div>
        </article>
    );
};