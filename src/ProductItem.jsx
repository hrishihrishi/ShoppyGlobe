
// category
// : 
// "men's clothing"
// description
// : 
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// : 
// 1
// image
// : 
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
// price
// : 
// 109.95
// rating
// : 
// {rate: 3.9, count: 120}
// title
// : 
// "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"


export function ProductItem({ product }) {
    return (
        <div className="m-2 shadow-cyan-400 gap-3 border-2 border-amber-500 flex items-center">
            <img src={product.image} alt={product.title} className="h-[10vh]"/>
            <div>
                <h1>{product.title}</h1>
                <p>Ratings: {product.rating.rate}</p>
                
            </div>
            <button className="btn bg-blue-500">Add to Cart</button>
        </div>
    )
}