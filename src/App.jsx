import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { ProductList } from './ProductList';

export function App() {

  return (
    <div>
      <Header />
      <div>
        <h1 className='text-4xl font-extrabold text-blue-600 italic p-4'>Welcome Hrishikesh !</h1>
        <p className='text-xl font-bold text-blue-600 italic px-4'> Explore our wide range of products and find the perfect item for you. <br />What are you looking for today...?</p>
      </div>
      <Outlet />
      
    </div>
  )
}


