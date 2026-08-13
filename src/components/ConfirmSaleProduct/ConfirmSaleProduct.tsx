interface ConfirmSaleProductProps {
    image: string
    name: string
    price: number
    quantity: number
}

export const ConfirmSaleProduct = ({image,name,price,quantity,}: ConfirmSaleProductProps) => {
    return (
        <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md">
            <img src={image} alt={name} className="h-20 w-20 shrink-0 rounded-xl bg-gray-100 object-cover"/>
            <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-semibold text-gray-900">
                    {name}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                    <p className="text-gray-500">
                        Precio:
                        <span className="ml-1 font-semibold text-indigo-600">
                            ${price}
                        </span>
                    </p>
                    <p className="text-gray-500">
                        Cantidad:
                        <span className="ml-1 font-semibold text-gray-800">
                            {quantity}
                        </span>
                    </p>
                </div>
            </div>
            <div className="shrink-0 text-right">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Total
                </p>
                <p className="mt-1 text-lg font-bold text-gray-900">
                    ${price * quantity}
                </p>
            </div>
        </div>
    )
}