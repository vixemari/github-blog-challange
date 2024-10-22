import { Header } from "./components/Header"
import { Router } from "./router"
import { GlobalStyles } from "./styles/global"
import { BrowserRouter } from 'react-router-dom'



export function App() {
  return (
    <BrowserRouter>
     <GlobalStyles />
     <Header />
     <Router />
    </BrowserRouter>
  )
}
