import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { NotFound } from './NotFound';
import { Header } from './Header';

export function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,
      Children: [
        { path: '/Header', element: <Header /> }
      ]
    }
  ])

  return (
    <div>
      <Header />
      <div>App</div>
      <Outlet />
    </div>
  )
}


