import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Topbar from './components/Topbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Topbar/>
  </StrictMode>,
)
