// hacer que el "olvide contraseña" funcione
// agregar un scaner de barras
// si ocurre un error al intentar obtener los productos o employees mostrar un mensaje descriptivo
// agregar un status a los employees
// paginacion para history

// root -> andres
// cambiar el dashboard del root

// owner
// estadisticas

// para el admin
// estadisticas

// Para cashier
// poder imprimir y enviar gmail

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