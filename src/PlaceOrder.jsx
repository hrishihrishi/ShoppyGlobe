import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./redux/cartSlice";
import { addToOrderedItemsSlice } from "./redux/OrderedItemsSlice";
import { toast } from "react-toastify";
import Modal from "react-modal";
Modal.setAppElement('#root');

export default function PlaceOrder() {
    const [product, setProduct] = useState(null); 
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [formData, setFormData] = useState({
        id: params.id,
        deliveryAddress: '',
        paymentMethod: '',
        quantity: '1',
        userName: '',
        deliveryDate: '',
    });

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
            }).catch(error => {
                console.log(error);
            });
    }, [params.id]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        // This block makes sure quantity is minimum 1
        const parsedValuee = parseInt(value, 10);
        if (name === 'quantity') {
            const parsedValue = Math.max(1, parsedValuee || 1)
            setFormData((prev) => ({
                ...prev,
                [name]: parsedValue,
            }))
            return
        } else {

            // This block updates the form data as input changes
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    // called when form is submitted
    const handleSubmit = (e) => {
        e.preventDefault();

        // create final order object to pass to addToOrderedItemsSlice (redux)
        const finalOrder = {
            ...formData,
            productTitle: product.title,
            totalPrice: product.price * (parseInt(formData.quantity) || 1),
            status: "Ordered",
        };

        // addToOrderedItemsSlice to add order to orderedItemsSlice (redux)
        dispatch(addToOrderedItemsSlice(finalOrder));

        // remove item from cart after ordering successfully
        dispatch(removeFromCart(product.id));
        toast.success("Removed Item from Cart!")
        setModalIsOpen(true);
        toast("Order Placed Successfully!")
        // navigate("/Cart")
    };

    if (!product) {
        return <div className="p-10 text-center text-2xl">Loading Product Details...</div>;
    }

    return (
        <div className="flex flex-col p-5 bg-blue-50 rounded-xl m-5 gap-1">
            <h1 className="text-2xl font-bold mb-4">Product Details:</h1>

            {/* product image and details before purchasing */}
            <div className="lg:flex bg-white p-4 rounded-xl shadow-sm mb-6">
                <img src={product.image} alt={product.title} className="w-32 h-32 object-contain m-4 rounded-xl" />
                <div className="lg:p-5 lg:text-xl">
                    <h1 className="text-xl font-bold lg:text-2xl">{product.title}</h1>
                    <p className="my-2"><i>{product.description}</i></p>
                    <p className="text-xl text-green-600 font-bold">Price: Rs.{product.price}</p>
                    <p className="text-sm text-gray-600 mt-2">Category: {product.category} | Rating: {product.rating?.rate}⭐</p>
                </div>
            </div>

            {/* buttons to add to cart or go back */}
            <div className="flex gap-4 mb-8">
                <button onClick={() => dispatch(addToCart(product))} className="btn bg-blue-500 px-6">Add to Cart</button>
                <button onClick={() => navigate(-1)} className="btn bg-gray-500 px-6">Go Back</button>
            </div>

            <div className="flex flex-col gap-2 p-8 bg-green-100 rounded-2xl shadow-md">
                <h1 className="text-2xl font-bold text-green-800 mb-4">Enter Delivery Details: *</h1>
                {/* form to enter delivery details */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" autoComplete="on">
                    <label className="flex flex-col font-semibold">
                        Delivery Address
                        <input name="deliveryAddress" type="text" placeholder="House No, Street, City" className="input mt-1 border p-2" onChange={handleChange} required />
                    </label>

                    <label className="flex flex-col font-semibold">
                        Payment Method
                        <select name="paymentMethod" className="input mt-1 border p-2 bg-white" onChange={handleChange} required>
                            <option value="">Select Payment</option>
                            <option value="COD">Cash on Delivery</option>
                            <option value="Card">Credit/Debit Card</option>
                            <option value="UPI">UPI</option>
                        </select>
                    </label>

                    <label className="flex flex-col font-semibold">
                        Quantity
                        <input name="quantity" type="number" placeholder="Minimum quantity is 1" className="input mt-1 border p-2" onChange={handleChange} required />
                    </label>

                    <label className="flex flex-col font-semibold">
                        Your Full Name
                        <input name="userName" type="text" placeholder="Enter your name" className="input mt-1 border p-2" onChange={handleChange} required />
                    </label>

                    <label className="flex flex-col font-semibold">
                        Preferred Delivery Date
                        <input name="deliveryDate" type="date" className="input mt-1 border p-2" onChange={handleChange} required />
                    </label>

                    <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-xl font-bold py-3 mt-4">
                        Confirm & Place Order
                    </button>
                </form>

                {/* Modal opens only after placing order with valid details */}
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    contentLabel="Example Modal"
                    className={'w-[50%] h-[50%] bg-white rounded-2xl shadow-2xl shadow-gray-500 fixed top-1/4 left-1/4 p-5'}
                >
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">Order Placed Successfully!</h2>
                        <p>Order ID: {formData.id}</p>
                        <p>Thank you for your order. Your order will be delivered to you on {formData.deliveryDate}.</p>
                        <p>Our delivery agent will contact you soon.</p>
                        <p>Payment method: {formData.paymentMethod}</p>
                        <button onClick={() => setModalIsOpen(false)} className="btn bg-blue-500 w-20">Close</button>
                        <button onClick={() => navigate("/Cart")} className="btn bg-blue-500 w-30">Go to Cart</button>
                    </div>
                </Modal>
            </div>
        </div>
    );
}