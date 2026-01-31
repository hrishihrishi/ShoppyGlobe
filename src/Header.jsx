import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <nav className=" bg-blue-500 flex p-2 px-[4vw] rounded-2xl m-3 justify-between">
            <div className="flex items-center gap-5">
                <img src="src/assets/shopping-cart.png" alt="src/assets/shopping-cart.png" 
                className="w-[5vw] bg-blue-100 rounded-xl p-1"/>
                <h1 className="text-2xl font-bold text-white">ShoppyGlobe</h1>
            </div>
            <div className=" flex items-center justify-center">
                <ul className="flex flex-row text-white text-xl gap-5 font-bold">
                    <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
      >Home</NavLink></li>
                    <li><NavLink to='/ProductList' className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>ProductsList</NavLink></li>
                    <li><NavLink to='/Cart' className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>Cart</NavLink></li>
                    <li><NavLink to='/YourOrders' className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>Your Orders</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}