import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../pages/home-page'
import { RootPage } from '../pages/Route-page'
import { DashboardPage } from '../pages/dashboard-page'
import { ProductsPage } from '../pages/products-page'
import { EstadisticasPage } from '../pages/estadisticas-page'
import { HistorialPage } from '../pages/historial-page'
import { ManageEmployeesPage } from '../pages/Manage-employees-page'
import { CreateProductPage } from '../pages/create-product-page'
import { LoginPage } from '../pages/login-page'
import { RegisterPage } from '../pages/register-page'
import { EmployeePage } from '../pages/employee-page'
import { VentaPage } from '../pages/venta-page'

export const router = createBrowserRouter([
    {
        path:"",
        element: <HomePage/>
    },
    {
        path: "login",
        element: <LoginPage/>
    },
    {
        path: "register",
        element: <RegisterPage/>
    },
    {
        path: "/private/",
        element:<RootPage/>,
        children: [
            {
                path: "dashboard",
                element: <DashboardPage/>
            },
            {
                path: "products",
                element: <ProductsPage/>
            },
            {
                path: "estadisticas",
                element: <EstadisticasPage/>
            },
            {
                path: "historial-ventas",
                element: <HistorialPage/>
            },
            {
                path: "manage-employees",
                element: <ManageEmployeesPage/>
            },
            {
                path: "create-product",
                element: <CreateProductPage/>
            },
            {
                path: "employee/:id",
                element: <EmployeePage/>
            },
            {
                path: "venta",
                element:<VentaPage/>
            }
        ]
    }
])