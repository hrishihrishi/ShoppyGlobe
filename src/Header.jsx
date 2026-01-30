import { Link } from "react-router-dom";

export function Header() {
    return (
        <nav className=" bg-blue-500 flex p-2 px-[4vw] rounded-2xl m-3 justify-between">
            <div>
                <img src="src/assets/shopping-cart.png" alt="src/assets/shopping-cart.png" 
                className="max-w-[50px] bg-blue-100 rounded-xl p-1"/>
            </div>
            <div className=" flex items-center justify-center">
                <ul className="flex flex-row text-white text-xl space-x-4 font-bold">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/ProductList'>ProductsList</Link></li>
                    <li><Link to='/Cart'>Cart</Link></li>
                    <li><Link to='/YourOrders'>Your Orders</Link></li>
                </ul>
            </div>
        </nav>
    )
}