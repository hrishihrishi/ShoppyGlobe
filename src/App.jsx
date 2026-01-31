import { Outlet } from 'react-router-dom';
import Header from './Header';
import ProductList from './ProductList';

export default function App() {

  return (
    <div>
      <Header />     
      <Outlet />
      
    </div>
  )
}


