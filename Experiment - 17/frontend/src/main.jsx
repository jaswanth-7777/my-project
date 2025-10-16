import React from 'react'
import { createRoot } from 'react-dom/client'
import ProductList from './ProductList.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductList />
  </React.StrictMode>
)
