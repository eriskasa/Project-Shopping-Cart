
import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WishlistProvider } from './context/WishlistContext.jsx'


ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WishlistProvider>
    <App/>
    </WishlistProvider>
  </React.StrictMode>
)
