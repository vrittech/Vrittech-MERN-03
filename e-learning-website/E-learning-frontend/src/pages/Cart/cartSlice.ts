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
        decreaseCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item: any) => item._id === action.payload._id);

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                successToast("Course removed from cart");
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const newCartItems = state.cartItems.filter((item: any) => {
                    return item._id !== action.payload._id;
                })
                state.cartItems = newCartItems;
                successToast("Course removed from cart");
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems.map((cartItem: any) => {
                if (cartItem._id === action.payload._id) {
                    const newCartItems = state.cartItems.filter((item: any) => {
                        return item._id !== action.payload._id;
                    })
                    state.cartItems = newCartItems;
                    successToast("product removed fromcart successfully")

                }
            })
        },
        getTotals: (state) => {
            let { total, quantity } = state.cartItems.reduce((cartTotal: any, cartItem: any) => {
                const { price, cartQuantity } = cartItem;

                const itemTotal = price * cartQuantity;
                console.log(itemTotal)

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;

                return cartTotal;
            }, {
                total: 0,
                quantity: 0
            })
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;

        },
        clearCart: (state) => {
            state.cartItems = [];
            successToast("ALl carts cleared successfully");
        }
    }
})

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } = cartSlice.actions;

export default cartSlice.reducer;