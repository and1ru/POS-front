export const FilterRol = () => {
    return (
        <select
            name="price"
            id="price"
            className="w-full md:w-44 bg-gray-50 text-sm text-gray-700 border border-gray-200 rounded-xl py-2 px-3 cursor-pointer transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white"
        >
            <option value="">Filtrar por Rol</option>
            <option value="desc">Administrador</option>
            <option value="asc">cajero</option>
        </select>
    )
}