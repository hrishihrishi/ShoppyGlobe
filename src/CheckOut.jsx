import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useState } from "react"
import { addCartItemsToOrderedItemsSlice } from "./redux/OrderedItemsSlice"

export function CheckOut() {

    const dispatch = useDispatch()
    const [formData, setFormData] = useState({})
    const allCartItems = useSelector((state) => state.cart.cart)
    const [modalIsOpen, setIsModalOpen] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("handleSubmit")

        // 1. for each item in cart paste form data

        const updatedAllCartItems = allCartItems.map((item) => ({
            ...item, ...formData
        }))

        dispatch(addCartItemsToOrderedItemsSlice(updatedAllCartItems))
        toast.success("Order placed successfully")
    }


    return (
        <div>
            <h1>CheckOut</h1>

            <div className="flex flex-col gap-2 p-8 bg-green-100 rounded-2xl shadow-md">
                            <h1 className="text-2xl font-bold text-green-800 mb-4">Enter Delivery Details: *</h1>
            
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <label className="flex flex-col font-semibold">
                                    Delivery Address
                                    <input name="deliveryAddress" type="text" placeholder="House No, Street, City" className="input mt-1 border p-2" onChange={(e)=>handleChange(e)} required />
                                </label>
            
                                <label className="flex flex-col font-semibold">
                                    Payment Method
                                    <select name="paymentMethod" className="input mt-1 border p-2 bg-white" onChange={(e)=>handleChange(e)} required>
                                        <option value="">Select Payment</option>
                                        <option value="COD">Cash on Delivery</option>
                                        <option value="Card">Credit/Debit Card</option>
                                        <option value="UPI">UPI</option>
                                    </select>
                                </label>
            
                                <label className="flex flex-col font-semibold">
                                    Your Full Name
                                    <input name="userName" type="text" placeholder="Enter your name" className="input mt-1 border p-2" onChange={(e)=>handleChange(e)} required />
                                </label>
            
                                <label className="flex flex-col font-semibold">
                                    Preferred Delivery Date
                                    <input name="deliveryDate" type="date" className="input mt-1 border p-2" onChange={(e)=>handleChange(e)} required />
                                </label>
            
                                <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-xl font-bold py-3 mt-4">
                                    Confirm & Place Order
                                </button>
                            </form>
            
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={()=>setIsModalOpen(false)}
                                contentLabel="Example Modal"
                                className={'w-[50%] h-[50%] bg-white rounded-2xl shadow-2xl shadow-gray-500 fixed top-1/4 left-1/4 p-5'}
                            >
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-2xl font-bold text-green-800 mb-4">Order Placed Successfully!</h2>
                                    <p>Thank you for your order. Your ordered items will be delivered to you on {formData.deliveryDate}.</p>
                                    <p>Our delivery agent will contact you soon.</p>
                                    <button onClick={()=>setIsModalOpen(false)} className="btn bg-blue-500 w-20">Close</button>
                                </div>
                            </Modal>
                        </div>


        </div>
    )
}