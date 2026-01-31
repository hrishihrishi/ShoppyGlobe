import { createSlice } from "@reduxjs/toolkit";


export const OrderedItemsSlice = createSlice({
    name: "OrderedItemsSlice",
    initialState: {
        OrderedItemsSliceArray: []
    },
    reducers: {
        addToOrderedItemsSlice: (state, action) => {
            state.OrderedItemsSliceArray.push(action.payload)
        },
        removeFromOrderedItemsSlice: (state, action) => {
            state.OrderedItemsSliceArray = state.OrderedItemsSliceArray.filter(item => item.id !== action.payload)
        },
        addCartItemsToOrderedItemsSlice: (state, action) => {
            state.OrderedItemsSliceArray = state.OrderedItemsSliceArray.concat(action.payload)
        }
    }
})

export const { addToOrderedItemsSlice, removeFromOrderedItemsSlice, addCartItemsToOrderedItemsSlice } = OrderedItemsSlice.actions