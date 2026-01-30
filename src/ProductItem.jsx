import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "./redux/cartSlice"

export function ProductItem({ product, inCart = false }) {
    const dispatch = useDispatch()

    return (
        <div className="m-2 shadow-cyan-400 gap-3 border-2 border-amber-500 flex items-center">
            <img src={product.image} alt={product.title} className="h-[10vh]" />
            <div>
                <h1>{product.title}</h1>
                <p>Ratings: {product.rating.rate}</p>

            </div>
            {
                inCart ?
                    <button onClick={() => dispatch(removeFromCart(product.id))} className="btn bg-red-500">Remove from Cart</button>
                    : <button onClick={() => dispatch(addToCart(product))} className="btn bg-blue-500">Add to Cart</button>
            }
            <Link to={`/ProductDetails/${product.id}`}><button className="btn bg-blue-500">View details</button></Link>
            <Link to={`/PlaceOrder/${product.id}`}><button className="btn bg-blue-500">Buy Now</button></Link>
        </div>
    )
}