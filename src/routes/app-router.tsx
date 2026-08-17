import { createBrowserRouter } from 'react-router-dom'
import { Inventory } from '../pages/Inventory/Inventory'
import { History } from '../pages/History/History'
import { Home } from '../pages/Home/Home'
import { Login } from '../pages/Login/Login'
import { Register } from '../pages/Register/Register'
import { Root } from '../pages/Root/Root'
import { Dashboard } from '../pages/dashboard/Dashboard'
import { Statistics } from '../pages/Statistics/Statistics'
import { ManageEmployees } from '../pages/Employees/Employees'
import { CreateProduct } from '../pages/CreateProduct/CreateProduct'
import { Sell } from '../pages/Sell/Sell'
import { NotFound } from '../pages/NotFound/NotFound'
import { CreateBranch } from '../pages/CreateBranch/CreateBranch'
import { ConfirmSale } from '../pages/ConfirmSale/ConfirmSale'
import { ForgotPassword } from '../pages/ForgotPassoword/ForgotPassword'
import { ResetPassword } from '../pages/ResetPassword/ResetPassword'
import { CreateCompany } from '../pages/CreateCompany/CreateCompany'

export const router = createBrowserRouter([
    {
        path:"",
        element: <Home/>
    },
    {
        path: "login",
        element: <Login/>
    },
    {
        path: "register",
        element: <Register/>
    },
    {
        path: "forgotPassword",
        element: <ForgotPassword/>
    },
    {
        path: "resetPassword",
        element: <ResetPassword />
    },
    {
        path: "/private/",
        element:<Root/>,
        children: [
            {
                path: "dashboard",
                element: <Dashboard/>
            },
            {
                path: "inventory",
                element: <Inventory/>
            },
            {
                path: "statistics",
                element: <Statistics/>
            },
            {
                path: "history",
                element: <History />
            },
            {
                path: "manage-employees",
                element: <ManageEmployees/>
            },
            {
                path: "employee/:userId",
                element: <></>
            },
            {
                path: "create-product",
                element: <CreateProduct/>
            },
            {
                path: "createBranch",
                element: <CreateBranch />
            },
            {
                path: "sell",
                element:<Sell/>
            },
            {
                path: "confirmSale",
                element: <ConfirmSale/>
            },
            {
                path: "create-company",
                element: <CreateCompany />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    }
])