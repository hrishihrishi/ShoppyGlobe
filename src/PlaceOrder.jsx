import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice";
import { addToOrderedItemsSlice } from "./redux/OrderedItemsSlice";
import { toast } from "react-toastify";
import Modal from "react-modal";

export default function PlaceOrder() {
    const [product, setProduct] = useState(null); // Changed to singular 'product'
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
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        // Create the full order object
        const finalOrder = {
            ...formData,
            productTitle: product.title,
            totalPrice: product.price * (parseInt(formData.quantity) || 1),
            status: "Ordered",
        };

        // Dispatch to Redux
        dispatch(addToOrderedItemsSlice(finalOrder));

        
        
        openModal()
    };

    const notify = () => {
        toast("Order Placed Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    const openModal = () => {
        setModalIsOpen(true);
        notify()
    }

    const closeModal = () => {
        setModalIsOpen(false);
        navigate("/");
    }



    if (!product) {
        return <div className="p-10 text-center text-2xl">Loading Product Details...</div>;
    }

    return (
        <div className="flex flex-col p-5 bg-blue-50 rounded-xl m-5 gap-1">
            <h1 className="text-2xl font-bold mb-4">Product Details:</h1>

            <div className="lg:flex bg-white p-4 rounded-xl shadow-sm mb-6">
                <img src={product.image} alt={product.title} className="w-32 h-32 object-contain m-4 rounded-xl" />
                <div className="lg:p-5 lg:text-xl">
                    <h1 className="text-xl font-bold lg:text-2xl">{product.title}</h1>
                    <p className="my-2"><i>{product.description}</i></p>
                    <p className="text-xl text-green-600 font-bold">Price: Rs.{product.price}</p>
                    <p className="text-sm text-gray-600 mt-2">Category: {product.category} | Rating: {product.rating?.rate}⭐</p>
                </div>
            </div>

            <div className="flex gap-4 mb-8">
                <button onClick={() => dispatch(addToCart(product))} className="btn bg-blue-500 px-6">Add to Cart</button>
                <button onClick={() => navigate(-1)} className="btn bg-gray-500 px-6">Go Back</button>
            </div>

            <div className="flex flex-col gap-2 p-8 bg-green-100 rounded-2xl shadow-md">
                <h1 className="text-2xl font-bold text-green-800 mb-4">Enter Delivery Details: *</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                        <input name="quantity" type="number" min="1" placeholder="1" className="input mt-1 border p-2" onChange={handleChange} required />
                    </label>

                    <label className="flex flex-col font-semibold">
                        Your Full Name
                        <input name="userName" type="text" placeholder="Enter your name" className="input mt-1 border p-2" onChange={handleChange} required />
                    </label>

                    <label className="flex flex-col font-semibold">
                        Preferred Delivery Date
                        <input name="deliveryDate" type="date" className="input mt-1 border p-2" onChange={handleChange} required />
                    </label>

                    <button type="submit" onClick={openModal} className="btn bg-green-600 hover:bg-green-700 text-xl font-bold py-3 mt-4">
                        Confirm & Place Order
                    </button>
                </form>
                <button onClick={openModal} className="btn bg-blue-600 text-xl" >Notify</button>

                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className={'w-[50%] h-[50%] bg-white rounded-2xl shadow-2xl shadow-gray-500 fixed top-1/4 left-1/4 p-5'}
                >
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">Order Placed Successfully!</h2>
                        <p>Order ID: {formData.id}</p>
                        <p>Thank you for your order. Your order will be delivered to you on {formData.deliveryDate}.</p>
                        <p>Our delivery agent will contact you soon.</p>
                        <p>Payment method: {formData.paymentMethod}</p>
                        <button onClick={closeModal} className="btn bg-blue-500 w-20">Close</button>
                    </div>
                </Modal>
            </div>
        </div>
    );
}