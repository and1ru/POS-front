import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../pages/home-page'
import { RootPage } from '../pages/Route-page'
import { DashboardPage } from '../pages/dashboard-page'
import { ProductsPage } from '../pages/products-page'

export const router = createBrowserRouter([
    {
        path:"/home",
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
            }
        ]
    }
])