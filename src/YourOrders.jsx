import { useSelector } from "react-redux";
import { ProductItem } from "./ProductItem";

export function YourOrders() {
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
                            <ProductItem key={item.id} id={item.id} inCart={true} buyBtn={false}/>
                            <h1>{item.title}</h1>
                            <p>{item.price}</p>
                            <p>{item.quantity}</p>
                            <p>{item.status}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}