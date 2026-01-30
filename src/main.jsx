import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ProductList } from './ProductList';
import { Cart } from './Cart';
import { Header } from './Header';
import { NotFound } from './NotFound';
import { ProductDetails } from './ProductDetails.jsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './redux/store.js'
import PlaceOrder from './PlaceOrder.jsx'
import { YourOrders } from './YourOrders.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <NotFound />,
    children: [
      { path: '/Header', element: <Header /> },
      { path: '/ProductList', element: <ProductList /> },
      { path: '/Cart', element: <Cart /> },
      { path: '/ProductDetails/:id', element: <ProductDetails /> },
      { path: '/PlaceOrder/:id', element: <PlaceOrder /> },
      { path: '/YourOrders', element: <YourOrders /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
