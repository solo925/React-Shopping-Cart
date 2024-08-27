import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ShoppingCartProvider from './context/index.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShoppingCartProvider>
     <App /> 
    </ShoppingCartProvider>
    
  </BrowserRouter>
)
