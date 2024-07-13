"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/lib/cart/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import { t } from "i18next";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Added to cart!");
  };

  return (
    <>
      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>
      <Toaster position="top-right" />
    </>
  );
};

export default AddToCart;
