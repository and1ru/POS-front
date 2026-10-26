import { useEffect, useState } from "react";
import { styles } from "../../helper/style";
import { InventoryProductCardAdmin } from "../InventoryProductCardAdmin/InventoryProductCardAdmin";
import { useInventoryAdmin } from "../../customHooks/useInventoryAdmin/useInventoryAdmin";

export const InventoryAdmin = () => {
    const [productName, setProductName] = useState<string>("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [searchName, setSearchName] = useState(productName);

    const { data, error, refetch } = useInventoryAdmin(searchName, price, stock)

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setProductName(value)
    }

    const handlePrice = (e:React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        setPrice(value)
    }

    const handleStock = (e:React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        setStock(value)
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
                    <select name="price" value={price} onChange={handlePrice}>
                        <option value="">Filter by price</option>
                        <option value="asc">Lowest price</option>
                        <option value="desc">Highest price</option>
                    </select>

                    <select name="stock" value={stock} onChange={handleStock}>
                        <option value="">Filter by stock</option>
                        <option value="asc">Lowest stock</option>
                        <option value="desc">Highest stock</option>
                    </select>
                </form>
            </section>
            <section className="p-3 grid gap-10 grid-cols-2 xl:grid-cols-4">
                {error ? <p>error</p> : null}
                {data?.result.length === 0 && <p className="bg-blue-400 p-4 rounded-lg">There is not products yet</p>}
                {data?.result.map(product =>
                    <InventoryProductCardAdmin
                        boughtPriceProduct={product.boughtPriceProduct}
                        minStock={product.minStock}
                        sellPriceProduct={product.sellPriceProduct}
                        id={product.id}
                        key={product.id}
                        img={product.image_url}
                        name={product.name}
                        is_in_branch={ product.is_in_branch}
                        stock={product.stock}
                        onSubmit={refetch}
                        branch_product_id={product.branch_product_id}
                    />
                )}
            </section>
        </>
    )
}