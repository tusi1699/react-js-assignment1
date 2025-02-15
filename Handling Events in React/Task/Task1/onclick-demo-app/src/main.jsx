import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import OnClickApp from './OnClickApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OnClickApp />
  </StrictMode>,
)
