import { useAuthContext } from "../../context/authContext/authContext"
import { BranchOptions } from "../BranchOptions/BranchOptions"

interface Props {
  onChangeBranch: (value: string) => void
  onChangeRole: (value: string) => void
  onChangeName: (value: string) => void
}

export const EmployeeForm = ({ onChangeName, onChangeRole, onChangeBranch }: Props) => {
  const { authContext: { role } } = useAuthContext()

  const handleBranch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    onChangeBranch(value)
  }

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    onChangeName(value)
  }

  const handleRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    onChangeRole(value)
  }

  return (
    <section className="mb-10">
      <form className="mb-10 w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-3 items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <div className="relative w-full md:flex-1">
          <input
            onChange={handleName}
            type="search"
            placeholder="Buscar empleado..."
            className="w-full bg-gray-50 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 rounded-xl py-2 px-4 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white"
          />
        </div>
        <div className="flex w-full md:w-auto gap-3">
          {role === "owner" &&
            <>
              <select
                onChange={handleBranch}
                name="sede"
                id="sede"
                className="w-full md:w-44 bg-gray-50 text-sm text-gray-700 border border-gray-200 rounded-xl py-2 px-3 cursor-pointer transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white"
              >
                <option value="">Select Branch</option>
                <BranchOptions />
              </select>

              <select
                onChange={handleRole}
                name="role"
                id="role"
                className="w-full md:w-44 bg-gray-50 text-sm text-gray-700 border border-gray-200 rounded-xl py-2 px-3 cursor-pointer transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white"
              >
                <option value="">Filtrar por Rol</option>
                <option value="admin">Administrador</option>
                <option value="cashier">cajero</option>
              </select>
            </>
          }
        </div>
      </form>
    </section>
  )
}