// hacer que el "olvide contraseña" funcione
// agregar fecha de creacion de company
// cuando actualice el producto mostrar inmediatamente
// agregar un scaner de barras
// agregar el poder imprimir recivo

// root -> andres
// cambiar el dashboard del root

// owner
// mejorar el dashboard del owner
// obtener el historial de ventas
// hacer que los filtros funcionen en manage employees

// para el admin
// configurar los productos de la branch
// obtener los productos de la branch
// agregar filtros en inventory
// history de ventas
// filtros en history
// en manage employee solo puede buscar usuarios (los demas filtros no estan disponibles)
// hire pero sin poder decidir el role o la branch

// cambiar el dashboard
// hacer un sell
// buscar un product por nombre o id del product
// poder ver el history de las ventas que haya hecho
// poder filtrar por fecha en history

import { AuthContextProvider } from "./context/authContext/authContext.provider"
import { NavContextProvider } from "./context/nav-context/nav-context-provider"
import { AppRouterProvider } from "./routes/app-router-provider"

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavContextProvider>
          <AppRouterProvider />
        </NavContextProvider>
      </AuthContextProvider>

    </>
  )
}

export default App