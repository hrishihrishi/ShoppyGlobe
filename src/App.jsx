import { Outlet } from 'react-router-dom';
import { Header } from './Header';


export function App() {

  

  return (
    <div>
      <Header />
      App app
      <Outlet />
    </div>
  )
}


