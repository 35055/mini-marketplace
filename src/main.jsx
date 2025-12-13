import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Cart } from './Cart'
import './index.css'

createRoot(document.getElementById('cart')).render(
  <StrictMode>
    <Cart />
  </StrictMode>,
)
