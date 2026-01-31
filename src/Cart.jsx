import { useSelector } from "react-redux"
import { ProductItem } from "./ProductItem"
import { Link } from "react-router-dom"


export const Cart = () => {

    const cartItems = useSelector((state) => state.cart.cart)
    return (
        <div>
            <h1 className="text-2xl font-extrabold p-3 px-[4vw] text-amber-700">Your Cart :</h1>
        {
            cartItems.length > 0 ?(cartItems.map(item => {
                return (
                    <div>
                        <ProductItem key={item.id} id={item.id} inCart={true}/>
                    </div>
                )
            })) : <div className="fixed rounded-2xl flex flex-col items-center justify-center bg-red-400 w-[50%] h-[50%] top-1/4 left-1/4">
                <h1 className="text-4xl text-white font-bold mb-10">Oops! Your cart is empty!</h1>
            <Link to="/ProductList" className="text-white rounded-lg p-2 cursor-pointer bg-green-400 font-bold">Add Products to cart</Link>
            </div>
        }
        </div>
    )
}