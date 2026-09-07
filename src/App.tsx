// cambiar el dashboard del root
// agregar comentarios de error en el formulario de crate company ✔
// agregar verificacion de password y confirmar password ✔
// agregar comentarios de error en el formulario de login ✔
// quitar los console.log()

// cambiar el dashboard del owner
// obtener el historial de ventas
// obtener todos los productos de la company ✔
// cuando se cree un product que se reinicie el formulario si se creo correctamente
// cambiar el input
// crear un input especifico para los files
// agregar comentarios a formulario de crear branch
// hacer que los filtros funcionen en manage employees
// mejorar los estilos y agregar comentarios de error en input de hire

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

function App(){
  return(
    <>
      <AuthContextProvider>
      <NavContextProvider>
        <AppRouterProvider/>
      </NavContextProvider>
      </AuthContextProvider>

    </>
  )
}

export default App