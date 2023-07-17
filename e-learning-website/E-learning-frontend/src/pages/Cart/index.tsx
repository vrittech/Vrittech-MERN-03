import { Card } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PayButton from "./PayButton";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "./cartSlice";
import { useEffect } from "react";

const Cart = () => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, cart]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleAddToCart = (course: any) => {
    dispatch(addToCart(course));
  };
  const handleDecreaseCart = (course: any) => {
    dispatch(decreaseCart(course));
  };
  const handleRemoveCart = (course: any) => {
    dispatch(removeFromCart(course));
  };

  return (
    <div className="cart-container">
      <h2>Shopping cart</h2>
      {cart.cartItems.length === 0 ? (
        <Card>
          <div className="cart-empty">
            <p>Your cart is currently empty</p>
            <div className="continue-shopping">
              <Link to="/courses">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>

                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        </Card>
      ) : (
        <div>
          <div className="titles">
            <h3 className="">Course</h3>
            <h3 className="">Price</h3>
            <h3 className="">Quantity</h3>
            <h3 className="">Total</h3>
          </div>
          <div className="cart-items">
            {cart?.cartItems?.length > 0 &&
              cart.cartItems.map((cartItem: any) => {
                return (
                  <div className="cart-item" key={cartItem._id}>
                    <div className="">
                      <h3>{cartItem.title}</h3>
                      <h3>{cartItem.description}</h3>
                      <button onClick={() => handleRemoveCart(cartItem)}>
                        Remove
                      </button>
                    </div>
                    <div className="card-product-price">${cartItem.price}</div>
                    <div className="card-product-quantity">
                      <button onClick={() => handleDecreaseCart(cartItem)}>
                        -
                      </button>
                      <div className="count">{cartItem.cartQuantity}</div>
                      <button onClick={() => handleAddToCart(cartItem)}>
                        +
                      </button>
                    </div>
                    <div>${cartItem.cartQuantity * cartItem.price}</div>
                  </div>
                );
              })}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => handleClearCart()}>
              Clear cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>SubTotal</span>
                <span className="amout">${cart.cartTotalAmount}</span>
              </div>
              <PayButton cartItems={cart.cartItems} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
