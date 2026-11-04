import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/inter'
import '@fontsource-variable/source-sans-3'
import '@fontsource-variable/source-sans-3/wght-italic.css'
import './shared/tokens.css'
import './shared/regulamento-leitor.css'
import './modelo.css'
import { App } from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
