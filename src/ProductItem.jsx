import { Link } from "react-router-dom"


export function ProductItem({ product }) {

    return (
        <div className="m-2 shadow-cyan-400 gap-3 border-2 border-amber-500 flex items-center">
            <img src={product.image} alt={product.title} className="h-[10vh]"/>
            <div>
                <h1>{product.title}</h1>
                <p>Ratings: {product.rating.rate}</p>
                
            </div>
            <button className="btn bg-blue-500">Add to Cart</button>
            <Link to={`/ProductDetails/${product.id}`}><button className="btn bg-blue-500">View details</button></Link>
        </div>
    )
}