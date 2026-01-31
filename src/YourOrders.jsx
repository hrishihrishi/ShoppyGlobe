import { useSelector } from "react-redux";
import { ProductItem } from "./ProductItem";
import { removeFromOrderedItemsSlice } from "./redux/OrderedItemsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export function YourOrders() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.OrderedItemsSlice.OrderedItemsSliceArray);
    console.log(data)

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
            <h1 className="text-4xl font-bold text-blue-500 px-8 pt-5">Your Orders:</h1>
            {
                data.map((item) => {
                    return (
                        <div className="text-xl gap-2 p-2 m-5 flex flex-col rounded-2xl shadow-md bg-green-100">
                            <ProductItem key={item.id} id={item.id} inCart={false} buyBtn={false} />
                            <p className="p-pO" ><strong>Price :</strong> {item.totalPrice}</p>
                            <p className="p-pO"><strong>Delivery Date :</strong> {item.deliveryDate}</p>
                            <p className="p-pO"><strong>Delivery Address :</strong> {item.deliveryAddress}</p>
                            <p className="p-pO"><strong>Quantity :</strong> {item.quantity}</p>
                            <p className="p-pO"><strong>Status :</strong> {item.status}</p>
                            <button className="btn bg-red-500 w-50 ml-auto mr-5 mb-5" onClick={() => { dispatch(removeFromOrderedItemsSlice(item.id)) }}>Cancel Order</button>
                        </div>
                    )
                })
            }
        </div>
    )
}