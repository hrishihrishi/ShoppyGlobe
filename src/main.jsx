import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ProductList } from './ProductList';
import { Cart } from './Cart';
import { Header } from './Header';
import { NotFound } from './NotFound';


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      // errorElement: <NotFound />,
      children: [
        { path: '/Header', element: <Header /> },
        { path: '/ProductList', element: <ProductList /> },
        { path: '/Cart', element: <Cart /> }
      ]
    }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
