import { useEffect, useState } from "react";
import { useInventoryOwner } from "../../customHooks/useInventoryOwner/useInventoryOwner";
import { styles } from "../../helper/style";
import { InventoryProductCardOwner } from "../InventoryProductCardOwner/InventoryProductCardOwner";

export const InventoryOwner = () => {
    const [productName, setProductName] = useState<string>("")
    const [searchName, setSearchName] = useState(productName);

    const { data, error, refetch } = useInventoryOwner(searchName)

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setProductName(value)
    }

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setSearchName(productName)
        }, 500)

        return () => clearTimeout(timeOut)
    }, [productName])
    return (
        <>

            <h2 className={styles.titulos}>INVENTORY</h2>
            <section className="w-full mx-auto">
                <form className="flex gap-5 w-200 mx-auto" onSubmit={e => e.preventDefault()}>
                    <input
                        onChange={handleInput}
                        type="text"
                        placeholder="product name"
                        className="w-full bg-gray-50 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 rounded-xl py-2 px-4 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white"
                    />
                </form>
            </section>
            <section className="p-3 grid gap-10 grid-cols-2 xl:grid-cols-4">
                {error ? <p>error</p> : null}
                {data?.result.length === 0 && <p className="bg-blue-400 p-4 rounded-lg">There is not products yet</p>}
                {data?.result.map(product =>
                    <InventoryProductCardOwner
                        id={product.id}
                        key={product.id}
                        img={product.image_url}
                        name={product.name}
                        onSubmit={refetch}
                    />
                )}
            </section>
        </>
    )
}