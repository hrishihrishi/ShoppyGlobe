import { useSelector } from "react-redux"
import { ProductItem } from "./ProductItem"


export const Cart = () => {

    const cartItems = useSelector((state) => state.cart.cart)
    return (
        <div>
            <h1>Cart</h1>
        {
            cartItems.map(item => {
                return (
                    <div>
                        <ProductItem key={item.id} product={item} inCart={true}/>
                    </div>
                )
            })
        }
        </div>
    )
}