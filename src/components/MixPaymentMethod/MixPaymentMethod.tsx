import { useState } from "react"
import { useCartStore } from "../../context/cartContext/cartStore"

export const MixPaymentMethod = () => {
    const [cash, setCash] = useState(0)
    const [transfer, setTransfer] = useState(0)

    const products = useCartStore((state) => state.cart)

    const total = products.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
    )

    const totalIngresado = cash + transfer
    const diferencia = totalIngresado - total
    const faltaDinero = diferencia < 0

    const formatMoney = (value: number) =>
        value.toLocaleString("es-CO", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })

    return (
        <section className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="space-y-5 p-5">
                <div>
                    <label
                        htmlFor="mix-cash"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Efectivo recibido
                    </label>

                    <div className="flex items-center rounded-xl border border-gray-300 bg-white transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10">
                        <span className="pl-4 text-lg font-medium text-gray-400">
                            $
                        </span>

                        <input
                            id="mix-cash"
                            type="number"
                            min={0}
                            step="any"
                            placeholder="0.00"
                            value={cash}
                            onChange={(e) =>
                                setCash(Math.max(0, Number(e.target.value)))
                            }
                            className="w-full rounded-xl bg-transparent px-3 py-3 text-right text-lg font-semibold text-gray-900 outline-none placeholder:text-gray-300"
                        />
                    </div>
                </div>

                {/* Transferencia */}
                <div>
                    <label
                        htmlFor="mix-transfer"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Transferencia
                    </label>

                    <div className="flex items-center rounded-xl border border-gray-300 bg-white transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10">
                        <span className="pl-4 text-lg font-medium text-gray-400">
                            $
                        </span>

                        <input
                            id="mix-transfer"
                            type="number"
                            min={0}
                            step="any"
                            placeholder="0.00"
                            value={transfer}
                            onChange={(e) =>
                                setTransfer(Math.max(0, Number(e.target.value)))
                            }
                            className="w-full rounded-xl bg-transparent px-3 py-3 text-right text-lg font-semibold text-gray-900 outline-none placeholder:text-gray-300"
                        />
                    </div>
                </div>

                {/* Total de la compra */}
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
                        ${formatMoney(total)}
                    </span>
                </div>

                {/* Resumen del pago */}
                <div className="space-y-3 rounded-xl border border-gray-200 p-4">
                    <div className="flex items-center justify-between gap-3">
                        <span className="text-sm text-gray-500">
                            Total ingresado
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                            ${formatMoney(totalIngresado)}
                        </span>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                        <span className="text-sm text-gray-500">
                            {faltaDinero ? "Dinero faltante" : "Devuelta"}
                        </span>

                        <span
                            className={`text-sm font-bold ${
                                faltaDinero
                                    ? "text-red-600"
                                    : "text-green-600"
                            }`}
                        >
                            ${formatMoney(Math.abs(diferencia))}
                        </span>
                    </div>
                </div>

                {/* Estado */}
                <div
                    className={`flex items-center justify-between gap-3 rounded-xl border p-4 ${
                        faltaDinero
                            ? "border-red-200 bg-red-50"
                            : "border-green-200 bg-green-50"
                    }`}
                >
                    <div>
                        <p
                            className={`text-sm font-semibold ${
                                faltaDinero
                                    ? "text-red-800"
                                    : "text-green-800"
                            }`}
                        >
                            {faltaDinero
                                ? "Pago incompleto"
                                : diferencia > 0
                                  ? "Pago completo"
                                  : "Importe exacto"}
                        </p>

                        <p
                            className={`mt-1 text-xs ${
                                faltaDinero
                                    ? "text-red-600"
                                    : "text-green-600"
                            }`}
                        >
                            {faltaDinero
                                ? "Debes ingresar el dinero faltante"
                                : diferencia > 0
                                  ? "El pago cubre el total de la compra"
                                  : "El importe coincide con el total"}
                        </p>
                    </div>

                    <span
                        className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                            faltaDinero
                                ? "bg-red-100 text-red-700"
                                : "bg-green-100 text-green-700"
                        }`}
                    >
                        {faltaDinero ? "Pendiente" : "Completo"}
                    </span>
                </div>
            </div>
        </section>
    )
}