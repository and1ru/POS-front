import { useCartStore } from "../../context/cartContext/cartStore"

export const TransferPaymentMethod = () => {
    const products = useCartStore((state) => state.cart)
    
        const total = products.reduce(
            (total, product) => total + product.price * product.quantity,
            0
        )

    return (
        <section className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="space-y-5 p-5">
                <div className="flex items-center justify-between rounded-xl bg-indigo-50 px-4 py-4">
                    <div>
                        <p className="text-sm font-medium text-indigo-900">
                            Total a pagar
                        </p>
                        <p className="mt-1 text-xs text-indigo-600">
                            Valor de la compra
                        </p>
                    </div>

                    <span className="text-2xl font-bold tracking-tight text-indigo-700">
                        ${total}
                    </span>
                </div>
            </div>
        </section>
    )
}