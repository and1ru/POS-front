export const FormProductsComponents = () => {
    return (
        <form className="mb-10">
            <input
                type="search"
                placeholder="product"
                className="focus:outline-none border p-2 w-full rounded-lg mb-2"
            />
            <select name="" id="" className="w-40 border p-2 mr-6 focus:outline-none rounded-lg">
                <option value="">filtrar por stock</option>
                <option value="">mayor a menor</option>
                <option value="">menor a mayor</option>
            </select>
            <select name="" id="" className="border p-2 focus:outline-none rounded-lg">
                <option value="">filtrar por precio</option>
                <option value="">mayor a menor</option>
                <option value="">menor a mayor</option>
            </select>
        </form>
    );
};
