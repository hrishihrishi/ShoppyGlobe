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
import { ToastContainer } from 'react-toastify'
import { Home } from './Home.jsx'
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: '/Header', element: <Header /> },
      { path: '/ProductList', element: <ProductList /> },
      { path: '/Cart', element: <Cart /> },
      { path: '/ProductDetails/:id', element: <ProductDetails /> },
      { path: '/PlaceOrder/:id', element: <PlaceOrder /> },
      { path: '/YourOrders', element: <YourOrders /> },
        {  index: true, element: <Home />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <ToastContainer style={{zIndex: 10000}} />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
