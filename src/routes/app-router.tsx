import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../pages/home-page'
import { RootPage } from '../pages/Route-page'
import { DashboardPage } from '../pages/dashboard-page'
import { ProductsPage } from '../pages/products-page'
import { EstadisticasPage } from '../pages/estadisticas-page'
import { VentasPage } from '../pages/ventas-page'
import { ManageEmployeesPage } from '../pages/Manage-employees-page'
import { CreateProductPage } from '../pages/create-product-page'

export const router = createBrowserRouter([
    {
        path:"",
        element: <HomePage/>
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
                element: <VentasPage/>
            },
            {
                path: "manage-employees",
                element: <ManageEmployeesPage/>
            },
            {
                path: "create-product",
                element: <CreateProductPage/>
            }
        ]
    }
])