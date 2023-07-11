import { createSlice } from "@reduxjs/toolkit";
import { successToast } from "../../services/toastify.service";


const initialState: any = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingIndex = state.cartItems.findIndex((item: any) => item._id === action.payload._id);

            if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                    ...state.cartItems[existingIndex],
                    cartQuantity: state.cartItems[existingIndex].cartQuantity + 1
                }

            } else {
                let tempCourseItem: any = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempCourseItem);
                successToast('Course added to cart')
            }
        },
        decreaseCart: (state) => {

        },
        removeFromCart: (state) => {

        },
        getTotals: (state) => {

        },
        clearCart: (state) => {

        }
    }
})

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } = cartSlice.actions;

export default cartSlice.reducer;