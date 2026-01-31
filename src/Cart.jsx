import { useDispatch, useSelector } from "react-redux"
import { ProductItem } from "./ProductItem"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { updateQuantity } from "./redux/cartSlice"

export const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cart)
    console.log(cartItems)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div className="pb-10">
            <h1 className="text-2xl font-extrabold p-3 px-[4vw] text-amber-700">Your Cart :</h1>
            {cartItems.length > 0 ? (
                <>
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex">
                            <ProductItem id={item.id} inCart={true} />
                            <div className="p-1 shadow-2xl shadow-gray-400 rounded-2xl my-5 bg-blue-100">
                                <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))} className="quantity-btn mt-1">+</button>
                                <div className="text-center text-xl font-bold m-1">{item.quantity}</div>
                                <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))} className="quantity-btn">-</button>
                            </div>
                        </div>
                    ))}
                    
                    <div className="px-[4vw] mt-5">
                        <button onClick={() => navigate("/CheckOut")} className="btn bg-green-500 px-8 text-lg font-bold">
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )
            
            : 
            
            (
                <div className="fixed rounded-2xl flex flex-col items-center justify-center bg-red-400 w-[50%] h-[50%] top-1/4 left-1/4">
                    <h1 className="text-4xl text-white font-bold mb-10 text-center px-4">
                        Oops! Your cart is empty!
                    </h1>
                    <Link to="/ProductList" className="text-white rounded-lg p-2 cursor-pointer bg-green-400 font-bold">
                        Add Products to cart
                    </Link>
                </div>
            )}
        </div>
    )
}















// import { useSelector } from "react-redux"
// import { ProductItem } from "./ProductItem"
// import { Link } from "react-router-dom"


// export const Cart = () => {

//     const cartItems = useSelector((state) => state.cart.cart)
//     return (
//         <div>
//             <h1 className="text-2xl font-extrabold p-3 px-[4vw] text-amber-700">Your Cart :</h1>
//             {
//                 cartItems.length > 0 ? {
//             (cartItems.map(item => {
//                     return (
//                         <div>
//                             <ProductItem key={item.id} id={item.id} inCart={true} />
//                         </div>
//                     )
//                 }))

//                     < button className="btn bg-green-500 px-6">Buy Cart</button>
//         }
//              : <div className="fixed rounded-2xl flex flex-col items-center justify-center bg-red-400 w-[50%] h-[50%] top-1/4 left-1/4">
//     <h1 className="text-4xl text-white font-bold mb-10">Oops! Your cart is empty!</h1>
//     <Link to="/ProductList" className="text-white rounded-lg p-2 cursor-pointer bg-green-400 font-bold">Add Products to cart</Link>
// </div>
    
//         </div >
//     )
// }