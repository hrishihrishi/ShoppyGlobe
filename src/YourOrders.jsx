import { useSelector } from "react-redux";
import { ProductItem } from "./ProductItem";
import { removeFromOrderedItemsSlice } from "./redux/OrderedItemsSlice";
import { useDispatch } from "react-redux";

export function YourOrders() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.OrderedItemsSlice.OrderedItemsSliceArray); return (
        <div>
            <h1>Your Orders</h1>
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