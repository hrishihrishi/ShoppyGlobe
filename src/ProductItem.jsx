import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "./redux/cartSlice"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

export function ProductItem({ id, inCart = false, buyBtn = true }) {
    const dispatch = useDispatch()
    const [product, setProduct] = useState({})

    useEffect(() => {
        const product = fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => {
                // Store the fetched data in the component’s state. 
                setProduct(data)
            }).catch(error => {
                console.log(error)
            });
    }, [])

    const handleAddToCart = () => {
        dispatch(addToCart(product))
        toast.success("Product added to cart")
    }

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product.id))
        toast.success("Product removed from cart")
    }

    return (
        <div className="m-5 p-4 bg-white rounded-3xl shadow-[0px_0px_5px_5px_rgba(0,0,0,0.1)] shadow-gray-200 gap-3 flex items-center">
            <img src={product.image} alt={product.title} className="h-[10vh] px-8" />
            <div>
                <h1 className="text-xl font-semibold">{product.title}</h1>
                {/* <p>Ratings: {product.rating.rate} ⭐ </p> */}

            </div>
            <div className="flex  gap-2 items-end ml-auto">
                {
                    inCart ?
                        <button onClick={handleRemoveFromCart} className="btn bg-red-500">Remove from Cart</button>
                        : <button onClick={handleAddToCart} className="btn bg-blue-500">Add to Cart</button>
                }
                {buyBtn && <Link to={`/PlaceOrder/${product.id}`}><button className="btn bg-green-500">Buy Now</button></Link>}
                <Link to={`/ProductDetails/${product.id}`} className=" text-lg text-blue-500 font-semibold underline">Product details ></Link>
            </div>
        </div>
    )
}