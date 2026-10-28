import { useEffect, useState } from "react"
import { useCartStore } from "../../context/cartContext/cartStore"
import { CashPaymentMethod } from "../CashPaymentMethod/CashPaymentMethod"
import { TransferPaymentMethod } from "../TransferPaymentMethod/TransferPaymentMethod"
import { MixPaymentMethod } from "../MixPaymentMethod/MixPaymentMethod"
import { useNewSale } from "../../customHooks/useNewSale/useNewSale"
import { ErrorMessage } from "../ErrorMessage/ErrorMessage"

type PaymentMethod = "cash" | "transfer" | "mix"
type SaleStatus = "pending" | "done"

export const SummarySale = () => {
    const { newSale, error, success } = useNewSale()

    const [paymentMethod, setPaymentMethod] =useState<PaymentMethod>("cash")
    const [status, setStatus] = useState<SaleStatus>("pending")
    const [amountReceived, setAmountReceived] = useState(0)

    const products = useCartStore((state) => state.cart)
    const total = products.reduce((total, product) => total + (product.price * product.quantity) , 0)

    const handleClick = () => {
        const productsSale = products.map((product) => { 
            return  {id: product.id, price: product.price, quantity: product.quantity}
        })

        newSale({amountReceived, products:productsSale})
    }

    const disableButton = amountReceived<total

    useEffect(()=> {
        if(success){
            setStatus("done")
        }
    },[success])

    return (
        <>
        { error && <ErrorMessage open={true}>¡ops! Something went wrong trying to create the new sale</ErrorMessage>}
        <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
                Resumen de compra
            </h2>
            <div className="mt-6 flex items-end justify-between border-b border-gray-100 pb-5">
                <span className="text-sm font-medium text-gray-500">
                    Total
                </span>

                <span className="text-3xl font-bold text-indigo-600">
                    ${total}
                </span>
            </div>
            { status === "pending" && 
                <>
                <div className="mt-6">
                
                <label className="mb-3 block text-sm font-semibold text-gray-700">
                    Método de pago
                </label>
                <div className="grid grid-cols-3 gap-2">
                    <button
                        type="button"
                        onClick={() => setPaymentMethod("cash")}
                        className={`rounded-lg border px-3 py-3 text-sm font-semibold transition ${
                            paymentMethod === "cash"
                                ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                    >
                        Efectivo
                    </button>
                    <button
                        type="button"
                        onClick={() => setPaymentMethod("transfer")}
                        className={`rounded-lg border px-3 py-3 text-sm font-semibold transition ${
                            paymentMethod === "transfer"
                                ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                    >
                        Transferencia
                    </button>
                    <button
                        type="button"
                        onClick={() => setPaymentMethod("mix")}
                        className={`rounded-lg border px-3 py-3 text-sm font-semibold transition ${
                            paymentMethod === "mix"
                                ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                    >
                        Mix
                    </button>
                </div>
            </div>
                </>
                }
            
            { status === "pending" ?
                paymentMethod === "mix" ? <MixPaymentMethod /> : 
                    paymentMethod === "cash" ? <CashPaymentMethod money={amountReceived} setMoney={setAmountReceived} /> :
                    paymentMethod === "transfer" && <TransferPaymentMethod />
                : null
            }

            {status === "done" && (
                <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4">

                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                            <span className="text-sm font-bold text-green-600">
                                ✓
                            </span>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-green-800">
                                Venta completada
                            </h3>

                            <p className="text-xs text-green-600">
                                La compra se realizó correctamente.
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                        >
                            <span>🖨️</span>
                            Imprimir factura
                        </button>
                        <button
                            type="button"   
                            className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                        >
                            <span>✉️</span>
                            Enviar por correo
                        </button>
                    </div>
                </div>
            )}

            {status !== "done" && (
                <button
                    disabled={disableButton}
                    onClick={handleClick}
                    type="button"
                    className="mt-6 w-full rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Confirmar compra
                </button>
            )}
        </aside>
        </>
        
    )
}