import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartList } from './Cart'
import './index.css'

createRoot(document.getElementById('cart')).render(
  <StrictMode>
    <CartList />
  </StrictMode>,
)
