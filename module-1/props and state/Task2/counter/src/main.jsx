import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CounterApp from './components/CounterApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp/>
  </StrictMode>,
)
