import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PhaseProvider } from './contexts/PhaseContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PhaseProvider>
      <App />
    </PhaseProvider>
  </StrictMode>,
)
