import { useCartStore } from "../../context/cartContext/cartStore"

interface Props {
    money: number, 
    setMoney: (value:number) => void 
}

export const CashPaymentMethod = ({money, setMoney}:Props) => {

    const products = useCartStore((state) => state.cart)

    const total = products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    )

    const devuelta = money - total
    const faltaDinero = devuelta < 0

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value)
        setMoney(value)
    }

    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <section className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <form onSubmit={handleForm} className="space-y-5 p-5">

                {/* Dinero recibido */}
                <div>
                    <label
                        htmlFor="cash"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Dinero recibido
                    </label>

                    <div className="flex items-center rounded-xl border border-gray-300 bg-white transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10">
                        <span className="pl-4 text-lg font-medium text-gray-400">
                            $
                        </span>

                        <input
                            id="cash"
                            name="cash"
                            min={0}
                            step="any"
                            className="w-full rounded-xl bg-transparent px-3 py-3 text-right text-xl font-semibold text-gray-900 outline-none placeholder:text-gray-300"
                            type="number"
                            onChange={handleInput}
                            value={money}
                            placeholder="0"
                        />
                    </div>
                </div>

                {/* Total */}
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
                        ${total.toLocaleString("es-CO")}
                    </span>
                </div>

                {/* Cambio */}
                <div
                    className={`rounded-xl border p-4 transition-colors ${
                        faltaDinero
                            ? "border-red-200 bg-red-50"
                            : "border-green-200 bg-green-50"
                    }`}
                >
                    <div className="flex items-center justify-between gap-3">
                        <div>
                            <p
                                className={`text-sm font-semibold ${
                                    faltaDinero
                                        ? "text-red-800"
                                        : "text-green-800"
                                }`}
                            >
                                {faltaDinero ? "Dinero insuficiente" : "Cambio"}
                            </p>

                            <p
                                className={`mt-1 text-xs ${
                                    faltaDinero
                                        ? "text-red-600"
                                        : "text-green-600"
                                }`}
                            >
                                {faltaDinero
                                    ? "Falta dinero para completar el pago"
                                    : "Dinero que debes devolver"}
                            </p>
                        </div>

                        <span
                            className={`text-2xl font-bold tracking-tight ${
                                faltaDinero
                                    ? "text-red-700"
                                    : "text-green-700"
                            }`}
                        >
                            ${Math.abs(devuelta).toLocaleString("es-CO")}
                        </span>
                    </div>
                </div>
            </form>
        </section>
    )
}