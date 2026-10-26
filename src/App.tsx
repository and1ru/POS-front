// hacer que el "olvide contraseña" funcione
// agregar un scaner de barras
// agregar el poder imprimir recivo
// si ocurre un arror al intentar obtener los productos o employees mostrar un mensaje descriptivo
// agregar un status a los employees

// root -> andres
// cambiar el dashboard del root

// owner
// mejorar el dashboard del owner
// obtener el historial de ventas

// para el admin
// history de ventas
// filtros en history

// cambiar el dashboard
// hacer un sell
// buscar un product por nombre
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