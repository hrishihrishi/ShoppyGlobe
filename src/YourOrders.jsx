import { useSelector } from "react-redux";
import { ProductItem } from "./ProductItem";
import { removeFromOrderedItemsSlice } from "./redux/OrderedItemsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export function YourOrders() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.OrderedItemsSlice.OrderedItemsSliceArray); 

    if (!data.length) {
        return (
            <div className="fixed top-1/4 left-1/4 w-[50%] h-[50%] rounded-2xl flex flex-col items-center justify-center bg-gray-300">
                <h1 className="text-4xl text-blue-500 font-bold mb-10">Oops! You have no orders!</h1>
            <Link to="/ProductList" className="btn bg-green-400 font-bold w-md text-center text-xl">Order Now</Link>
            </div>
        )
    }
    return (
        <div>
            <h1 className="text-4xl font-bold text-blue-500">Your Orders</h1>
            {
                data.map((item) => {
                    // const product = fetch(`https://fakestoreapi.com/products/${item.id}`)
                    //     .then(response => response.json())
                    //     .then(data => {
                    //         console.log(data)
                    //     }).catch(error => {
                    //         console.log(error)
                    //     });

                    return (
                        <div>
                            <ProductItem key={item.id} id={item.id} inCart={false} buyBtn={false}/>
                            <p>Price: {item.price}</p>
                            <p>Delivery Date: {item.deliveryDate}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Status: {item.status}</p>
                            <button className="btn bg-red-500" onClick={() => {dispatch(removeFromOrderedItemsSlice(item.id))}}>Cancel Order</button>
                        </div>
                    )
                })
            }
        </div>
    )
}