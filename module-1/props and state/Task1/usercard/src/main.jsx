import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// bootstrap js
import 'bootstrap/dist/js/bootstrap.min.js'
import CardApp from './Components/UserCard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardApp />
  </StrictMode>,
)
