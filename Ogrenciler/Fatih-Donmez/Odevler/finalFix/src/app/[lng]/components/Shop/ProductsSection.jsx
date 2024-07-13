"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setProductType,
  setPriceRange,
  setColors,
  setSizes,
  setDressStyle,
  setSort,
  selectFilteredProducts,
} from "@/app/lib/products/productsSlice";
import Image from "next/image";
import ShopCard from "./ShopCard";

const ProductsSection = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.products?.filters);
  const dressStyle = useSelector((state) => state.products?.filters.dressStyle);
  const sortedProducts = useSelector(selectFilteredProducts);
  const items = useSelector((state) => state.products?.items);
  console.log(filters);
  console.log(items);
  console.log(sortedProducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSortChange = (e) => {
    dispatch(setSort(e.target.value));
  };

  return (
    <div className="products-section">
      <div className="title">
        <h1>{dressStyle}</h1>
        <div className="products-amount">
          Showing 1-10 of 100 Products
          <span style={{ marginLeft: "0.8rem" }}>
            Sort By:
            <select onChange={handleSortChange}>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="aToZ">A-Z</option>
              <option value="zToA">Z-A</option>
            </select>
          </span>
        </div>
      </div>
      <div className="products-list">
        {sortedProducts.map((product) => (
          <ShopCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
