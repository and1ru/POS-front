import { Link } from "react-router-dom"
import { ConfirmSaleProduct } from "../../components/ConfirmSaleProduct/ConfirmSaleProduct"
import { SummarySale } from "../../components/SummarySale/SummarySale"
import { useCartStore } from "../../context/cartContext/cartStore"

export const ConfirmSale = () => {
    const products = useCartStore((state) => state.cart)

    return (
        <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Confirmar compra
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Revisa los productos y selecciona el método de pago.
                    </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
                    <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                        <div className="mb-5 flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Productos
                                </h2>
                                <p className="mt-1 text-sm text-gray-500">
                                    {products.length} productos en la compra
                                </p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            { products.map((product) => (
                                <ConfirmSaleProduct
                                image={product.img}
                                name={product.name}
                                price={product.price}
                                quantity={product.quantity}
                            />
                            ))}
                        </div>
                    </section>
                    <SummarySale />
                    <Link to="/private/sell" replace className="mt-6 w-full rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-[0.99]">New Sale</Link>
                </div>
            </div>
        </main>
    )
}