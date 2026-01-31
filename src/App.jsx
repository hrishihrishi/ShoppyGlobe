import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { ProductList } from './ProductList';

export function App() {

  return (
    <div>
      <Header />
      
      <Outlet />
      
    </div>
  )
}


