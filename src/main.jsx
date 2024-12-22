import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Topbar from './components/Topbar.jsx'
import Navbar from './components/Navbar.jsx'
import CheckoutPage from './pages/checkout.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Topbar/>
    <Navbar/>
    <CheckoutPage/> */}
    <App/>
  </StrictMode>,
)
