import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Header';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './redux/store.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('./Home.jsx'))
const ProductList = lazy(() => import('./ProductList.jsx'))
const Cart = lazy(() => import('./Cart.jsx'))
const ProductDetails = lazy(() => import('./ProductDetails.jsx'))
const PlaceOrder = lazy(() => import('./PlaceOrder.jsx'))
const YourOrders = lazy(() => import('./YourOrders.jsx'))
const CheckOut = lazy(() => import('./CheckOut.jsx'))
const NotFound = lazy(() => import('./NotFound.jsx'))


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Suspense fallback={<div>Loading...</div>}><NotFound /></Suspense>,
    children: [
      { path: '/Header', element: <Header /> },
      { path: '/ProductList', element: <Suspense fallback={<div>Loading...</div>}><ProductList /></Suspense> },
      { path: '/Cart', element: <Suspense fallback={<div>Loading...</div>}><Cart /></Suspense> },
      { path: '/ProductDetails/:id', element: <Suspense fallback={<div>Loading...</div>}><ProductDetails /></Suspense> },
      { path: '/PlaceOrder/:id', element: <Suspense fallback={<div>Loading...</div>}><PlaceOrder /></Suspense> },
      { path: '/YourOrders', element: <Suspense fallback={<div>Loading...</div>}><YourOrders /></Suspense> },
      { path: '/CheckOut', element: <Suspense fallback={<div>Loading...</div>}><CheckOut /></Suspense> },
        {  index: true, element: <Suspense fallback={<div>Loading...</div>}><Home /></Suspense>}
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
