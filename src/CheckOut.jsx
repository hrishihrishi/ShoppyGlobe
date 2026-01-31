import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useState } from "react"
import { addCartItemsToOrderedItemsSlice } from "./redux/OrderedItemsSlice"
import { toast } from "react-toastify"
import Modal from "react-modal"
import { useNavigate } from "react-router-dom"
import { removeFromCart } from "./redux/cartSlice"
Modal.setAppElement('#root');

export default function CheckOut() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({})

    // gets all items in cart which already has quantity in them
    const allCartItems = useSelector((state) => state.cart.cart)
    const [modalIsOpen, setIsModalOpen] = useState(false)

    // handles adding details from input tags to formData as they change.
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    // handles form submission, called when user clicks on submit button
    const handleSubmit = (e) => {
        e.preventDefault()

        // add formdata(delivery details) to each item(product) in cart
        const updatedAllCartItems = allCartItems.map((item) => ({
            ...item, ...formData
        }))
        dispatch(addCartItemsToOrderedItemsSlice(updatedAllCartItems))
        updatedAllCartItems.forEach((item) => {
            dispatch(removeFromCart(item.id))
        })
        setIsModalOpen(true)
        toast.success("Orders are placed successfully")
        toast.info("Removed items from cart")
    }


    return (
        <div>
            <div className="flex flex-col gap-2 p-8 bg-green-100 rounded-2xl shadow-md">
                <h1 className="text-2xl font-bold text-green-800 mb-4">Enter Delivery Details: *</h1>

                {/* form to enter delivery details */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <label className="flex flex-col font-semibold">
                        Delivery Address
                        <input name="deliveryAddress" type="text" placeholder="House No, Street, City" className="input mt-1 border p-2" onChange={(e) => handleChange(e)} required />
                    </label>

                    <label className="flex flex-col font-semibold">
                        Payment Method
                        <select name="paymentMethod" className="input mt-1 border p-2 bg-white" onChange={(e) => handleChange(e)} required>
                            <option value="">Select Payment</option>
                            <option value="COD">Cash on Delivery</option>
                            <option value="Card">Credit/Debit Card</option>
                            <option value="UPI">UPI</option>
                        </select>
                    </label>

                    <label className="flex flex-col font-semibold">
                        Your Full Name
                        <input name="userName" type="text" placeholder="Enter your name" className="input mt-1 border p-2" onChange={(e) => handleChange(e)} required />
                    </label>

                    <label className="flex flex-col font-semibold">
                        Preferred Delivery Date
                        <input name="deliveryDate" type="date" className="input mt-1 border p-2" onChange={(e) => handleChange(e)} required />
                    </label>

                    <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-xl font-bold py-3 mt-4">
                        Confirm & Place Order
                    </button>
                </form>

                {/* Modal opens on successful order placement only */}
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    contentLabel="Example Modal"
                    className={'w-[50%] h-[50%] bg-white rounded-2xl shadow-2xl shadow-gray-500 fixed top-1/4 left-1/4 p-5'}
                >
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">Order Placed Successfully!</h2>
                        <p>Thank you for your order. Your ordered items will be delivered to you on {formData.deliveryDate}.</p>
                        <p>Our delivery agent will contact you soon.</p>
                        <button onClick={() => setIsModalOpen(false)} className="btn bg-blue-500 w-20">Close</button>
                        <button onClick={() => navigate("/Cart")} className="btn bg-green-500 w-30">View Cart</button>
                    </div>
                </Modal>
            </div>
        </div>
    )
}