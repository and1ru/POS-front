import { useEffect, useRef, useState } from "react";
import { BranchOptions } from "../BranchOptions/BranchOptions";
import { useUpdateEmployee } from "../../customHooks/useUpdateEmployee/useUpdateEmployee";
import { SuccessMessage } from "../SuccessMessage/SuccessMessage";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

interface Props {
    name: string
    role: string
    branch: number
    salary: number
    employeeId: number
    onSubmit: () => void
}

export const EditEmployeeButton = ({ name, role, branch, salary, employeeId, onSubmit }: Props) => {
    const [employeeName, setEmployeeName] = useState(name)
    const [employeeRole, setEmployeeRole] = useState(role)
    const [employeeBranch, setEmployeeBranch] = useState(branch)
    const [employeeSalary, setEmployeeSalary] = useState(salary)

    const { update, error, success, loading } = useUpdateEmployee()

    const dialogRef = useRef<null | HTMLDialogElement>(null)

    const open = () => {
        dialogRef.current?.showModal()
    }

    const close = () => {
        dialogRef.current?.close()
        console.log(employeeId)
    }

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setEmployeeName(value)
    }

    const handleSalary = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setEmployeeSalary(Number(value))
    }

    const handleRole = (e: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => {
        const value = e.target.value
        setEmployeeRole(value)
    }

    const handleBranch = (e: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => {
        const value = e.target.value
        setEmployeeBranch(Number(value))
    }

    const handleUpdate = () => {
        update(employeeId, employeeBranch, employeeName, employeeRole, employeeSalary)
    }

    useEffect(() => {
        if (success) {
            onSubmit()
        }
    }, [success])

    return (
        <>
            {success && <SuccessMessage successfully={true}>Employee was updated successfully</SuccessMessage>}
            {error && <ErrorMessage open={true}>¡ops! Something went wrong tryint to update the employee</ErrorMessage>}

            <button
                onClick={open}
                type="button"
                disabled={!true}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:shadow-none"
            >
                Edit Employee
            </button>

            <dialog
                ref={dialogRef}
                className="mx-auto mt-[4vh] w-[calc(100%-2rem)] max-w-lg rounded-2xl border border-gray-200 bg-white p-0 text-gray-800 shadow-2xl backdrop:bg-gray-950/50 backdrop:backdrop-blur-sm"
            >
                <div className="border-b border-gray-100 px-6 py-5">
                    <h2 className="text-center text-xl font-bold tracking-tight text-gray-900">
                        Edit Employee
                    </h2>
                    <p className="mt-1 text-center text-sm text-gray-500">
                        Update employee information and permissions.
                    </p>
                </div>

                <form
                    onSubmit={e => e.preventDefault()}
                    className="flex flex-col gap-5 p-6"
                >
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="employeeName"
                            className="text-sm font-semibold text-gray-700"
                        >
                            Employee Name
                        </label>
                        <input
                            onChange={handleName}
                            type="text"
                            name="employeeName"
                            id="employeeName"
                            value={employeeName}
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="salary"
                            className="text-sm font-semibold text-gray-700"
                        >
                            Salary
                        </label>
                        <input
                            onChange={handleSalary}
                            type="number"
                            name="salary"
                            id="salary"
                            value={employeeSalary}
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="employeeRole"
                            className="text-sm font-semibold text-gray-700"
                        >
                            Employee Role
                        </label>
                        <select
                            name="employeeRole"
                            id="employeeRole"
                            value={employeeRole}
                            onChange={handleRole}
                            className="w-full cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        >
                            <option value="admin">Admin</option>
                            <option value="cashier">Cashier</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="employeeBranch"
                            className="text-sm font-semibold text-gray-700"
                        >
                            Employee Branch
                        </label>
                        <select
                            onChange={handleBranch}
                            name="employeeBranch"
                            id="employeeBranch"
                            value={employeeBranch}
                            className="w-full cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        >
                            <BranchOptions />
                        </select>
                    </div>

                    <div className="mt-2 flex flex-col-reverse gap-3 border-t border-gray-100 pt-5 sm:flex-row">
                        <button
                            type="button"
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                            onClick={close}
                        >
                            Cancel
                        </button>

                        <button
                            disabled={loading}
                            onClick={handleUpdate}
                            type="button"
                            className={`w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${loading ? "animate-pulse" : ""
                                }`}
                        >
                            {loading ? "Updating..." : "Update Employee"}
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    );
};