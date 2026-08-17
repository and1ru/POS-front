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