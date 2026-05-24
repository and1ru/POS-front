import { NavContextProvider } from "./context/nav-context/nav-context-provider"
import { AppRouterProvider } from "./routes/app-router-provider"

function App(){
  return(
    <>
      <NavContextProvider>
        <AppRouterProvider/>
      </NavContextProvider>
    </>
  )
}

export default App