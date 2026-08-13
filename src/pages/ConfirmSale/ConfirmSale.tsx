import { ConfirmSaleProduct } from "../../components/ConfirmSaleProduct/ConfirmSaleProduct"
import { SummarySale } from "../../components/SummarySale/SummarySale"

export const ConfirmSale = () => {
    return (
        <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-5xl">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Confirmar compra
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Revisa los productos y selecciona el método de pago.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1fr_360px]">

                    {/* Productos */}
                    <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5">

                        <div className="mb-5 flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Productos
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    3 productos en la compra
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3">

                            <ConfirmSaleProduct
                                image="https://via.placeholder.com/100"
                                name="Teclado Mecánico RGB"
                                price={25.00}
                                quantity={2}
                            />

                            <ConfirmSaleProduct
                                image="https://via.placeholder.com/100"
                                name="Mouse Inalámbrico"
                                price={15.50}
                                quantity={1}
                            />

                            <ConfirmSaleProduct
                                image="https://via.placeholder.com/100"
                                name="Monitor 24 pulgadas"
                                price={120.00}
                                quantity={1}
                            />

                        </div>
                    </section>
                    <SummarySale/>
                </div>
            </div>
        </main>
    )
}