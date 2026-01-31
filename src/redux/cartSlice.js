import { createSlice } from "@reduxjs/toolkit"


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        },

        updateQuantity: (state, action) => {
            const { id, amount } = action.payload;
            const item = state.cart.find(item => item.id === id)
            if (item) {
                item.quantity = Math.max(1, item.quantity + amount);
            }
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        }
    }
})

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions