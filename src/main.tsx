import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import App from "./app.tsx";

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)