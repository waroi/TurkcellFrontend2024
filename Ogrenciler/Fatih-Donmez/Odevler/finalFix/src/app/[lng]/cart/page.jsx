"use client";
import React, { useEffect, useState } from "react";
import "@/app/styles/components/CartPage.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { loadCart, removeFromCart, clearCart } from "@/app/lib/cart/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    dispatch(loadCart());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    toast.success("Order placed successfully! 🎉");
    dispatch(clearCart());
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div className="inner-container">
        <div className="">
          <p
            className="breadcrumb"
            style={{
              fontFamily: "Satoshi",
              fontWeight: 400,
              fontSize: "1rem",
              color: " #00000099",
            }}
          >
            <span>Home</span>
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.53073 0.469372L6.53073 5.46937C6.60065 5.53905 6.65613 5.62184 6.69399 5.71301C6.73184 5.80417 6.75133 5.90191 6.75133 6.00062C6.75133 6.09933 6.73184 6.19707 6.69399 6.28824C6.65613 6.3794 6.60065 6.46219 6.53073 6.53187L1.53073 11.5319C1.38984 11.6728 1.19874 11.7519 0.999484 11.7519C0.800227 11.7519 0.609131 11.6728 0.468235 11.5319C0.327338 11.391 0.248184 11.1999 0.248184 11.0006C0.248184 10.8014 0.327338 10.6103 0.468235 10.4694L4.93761 6L0.46761 1.53062C0.326714 1.38973 0.247559 1.19863 0.247559 0.999372C0.247559 0.800115 0.326714 0.609018 0.46761 0.468122C0.608506 0.327227 0.799603 0.24807 0.99886 0.24807C1.19812 0.24807 1.38921 0.327227 1.53011 0.468122L1.53073 0.469372Z"
                fill="black"
                fillOpacity="0.6"
              />
            </svg>{" "}
            <span className="casual">Cart</span>
          </p>
        </div>
        <div>
          <h1>YOUR CART</h1>
        </div>
        <div className="cart-grid">
          <div className="cart-products">
            {cartItems.map((item) => (
              <div className="cart-order-card" key={item.id}>
                <div className="card-left-part">
                  <div className="img-container">
                    <Image src={`/${item.img}`} alt={item.name} fill />
                  </div>
                  <div className="product-details">
                    <h3>{item.title}</h3>
                    <p>
                      Size: <span>Large</span>
                    </p>
                    <p>
                      Color: <span>Black</span>
                    </p>
                    <h1>${item.price * item.quantity}</h1>
                  </div>
                </div>
                <div className="card-right-part">
                  <svg
                    onClick={() => handleRemove(item.id)}
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ cursor: "pointer" }}
                  >
                    <path
                      d="M17.25 3.5H13.5V2.75C13.5 2.15326 13.2629 1.58097 12.841 1.15901C12.419 0.737053 11.8467 0.5 11.25 0.5H6.75C6.15326 0.5 5.58097 0.737053 5.15901 1.15901C4.73705 1.58097 4.5 2.15326 4.5 2.75V3.5H0.75C0.551088 3.5 0.360322 3.57902 0.21967 3.71967C0.0790178 3.86032 0 4.05109 0 4.25C0 4.44891 0.0790178 4.63968 0.21967 4.78033C0.360322 4.92098 0.551088 5 0.75 5H1.5V18.5C1.5 18.8978 1.65804 19.2794 1.93934 19.5607C2.22064 19.842 2.60218 20 3 20H15C15.3978 20 15.7794 19.842 16.0607 19.5607C16.342 19.2794 16.5 18.8978 16.5 18.5V5H17.25C17.4489 5 17.6397 4.92098 17.7803 4.78033C17.921 4.63968 18 4.44891 18 4.25C18 4.05109 17.921 3.86032 17.7803 3.71967C17.6397 3.57902 17.4489 3.5 17.25 3.5ZM7.5 14.75C7.5 14.9489 7.42098 15.1397 7.28033 15.2803C7.13968 15.421 6.94891 15.5 6.75 15.5C6.55109 15.5 6.36032 15.421 6.21967 15.2803C6.07902 15.1397 6 14.9489 6 14.75V8.75C6 8.55109 6.07902 8.36032 6.21967 8.21967C6.36032 8.07902 6.55109 8 6.75 8C6.94891 8 7.13968 8.07902 7.28033 8.21967C7.42098 8.36032 7.5 8.55109 7.5 8.75V14.75ZM12 14.75C12 14.9489 11.921 15.1397 11.7803 15.2803C11.6397 15.421 11.4489 15.5 11.25 15.5C11.0511 15.5 10.8603 15.421 10.7197 15.2803C10.579 15.1397 10.5 14.9489 10.5 14.75V8.75C10.5 8.55109 10.579 8.36032 10.7197 8.21967C10.8603 8.07902 11.0511 8 11.25 8C11.4489 8 11.6397 8.07902 11.7803 8.21967C11.921 8.36032 12 8.55109 12 8.75V14.75ZM12 3.5H6V2.75C6 2.55109 6.07902 2.36032 6.21967 2.21967C6.36032 2.07902 6.55109 2 6.75 2H11.25C11.4489 2 11.6397 2.07902 11.7803 2.21967C11.921 2.36032 12 2.55109 12 2.75V3.5Z"
                      fill="#FF3333"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          <div className="order-summary">
            <div className="order-title">Order Summary</div>
            <div className="d-flex justify-content-between">
              <p className="subtotal ptsub">Subtotal</p>
              <p className="right-bold">
                $
                {cartItems.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )}
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="subtotal">Delivery Fee</p>
              <p className="right-bold">$15</p>
            </div>
            <div className="d-flex total-part justify-content-between">
              <p className="subtotal">Total</p>
              <p className="right-bold">
                $
                {cartItems.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                ) + 15}
              </p>
            </div>
            <div>
              <button onClick={handleCheckout} className="checkout-btn">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Toaster />
      </div>
    </>
  );
};

export default CartPage;
