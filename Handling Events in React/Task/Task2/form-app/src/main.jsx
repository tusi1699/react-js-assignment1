import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FromApp from './FromApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FromApp />
  </StrictMode>,
)
