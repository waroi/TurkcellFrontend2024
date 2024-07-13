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
  resetFilters,
} from "@/app/lib/products/productsSlice";
import InputRange from "@/app/[lng]/components/Shop/InputRange";
import Colors from "@/app/[lng]/components/DetailPage/Colors";

const FilterSection = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.products?.filters);
  const status = useSelector((state) => state.products?.status);
  const items = useSelector((state) => state.products?.items);
  console.log(filters);
  console.log(items);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleProductTypeChange = (type) => {
    dispatch(setProductType(type));
  };

  const handlePriceRangeChange = (range) => {
    dispatch(setPriceRange(range));
  };

  const handleColorsChange = (colors) => {
    dispatch(setColors(colors));
  };

  const handleSizesChange = (sizes) => {
    dispatch(setSizes(sizes));
  };

  const handleDressStyleChange = (style) => {
    dispatch(setDressStyle(style));
  };

  return (
    <div className="filters">
      <div className="filters-title">
        <p>Filters</p>{" "}
        <button onClick={() => dispatch(resetFilters())}>Reset</button>
      </div>
      <div className="filters-product-types">
        <div
          className="product-type"
          onClick={() => handleProductTypeChange("T-Shirts")}
        >
          <p className="filters-type">T-shirts</p>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.53073 0.469402L6.53073 5.4694C6.60065 5.53908 6.65613 5.62187 6.69399 5.71304C6.73184 5.8042 6.75133 5.90194 6.75133 6.00065C6.75133 6.09936 6.73184 6.1971 6.69399 6.28827C6.65613 6.37943 6.60065 6.46222 6.53073 6.5319L1.53073 11.5319C1.38984 11.6728 1.19874 11.752 0.999484 11.752C0.800227 11.752 0.609131 11.6728 0.468235 11.5319C0.327338 11.391 0.248184 11.1999 0.248184 11.0007C0.248184 10.8014 0.327338 10.6103 0.468235 10.4694L4.93761 6.00003L0.46761 1.53065C0.326714 1.38976 0.247559 1.19866 0.247559 0.999403C0.247559 0.800145 0.326714 0.609049 0.46761 0.468153C0.608506 0.327257 0.799603 0.2481 0.99886 0.2481C1.19812 0.2481 1.38921 0.327257 1.53011 0.468153L1.53073 0.469402Z"
              fill="black"
              fill-opacity="0.6"
            />
          </svg>
        </div>
        <div
          className="product-type"
          onClick={() => handleProductTypeChange("Shorts")}
        >
          <p className="filters-type">Shorts</p>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.53073 0.469402L6.53073 5.4694C6.60065 5.53908 6.65613 5.62187 6.69399 5.71304C6.73184 5.8042 6.75133 5.90194 6.75133 6.00065C6.75133 6.09936 6.73184 6.1971 6.69399 6.28827C6.65613 6.37943 6.60065 6.46222 6.53073 6.5319L1.53073 11.5319C1.38984 11.6728 1.19874 11.752 0.999484 11.752C0.800227 11.752 0.609131 11.6728 0.468235 11.5319C0.327338 11.391 0.248184 11.1999 0.248184 11.0007C0.248184 10.8014 0.327338 10.6103 0.468235 10.4694L4.93761 6.00003L0.46761 1.53065C0.326714 1.38976 0.247559 1.19866 0.247559 0.999403C0.247559 0.800145 0.326714 0.609049 0.46761 0.468153C0.608506 0.327257 0.799603 0.2481 0.99886 0.2481C1.19812 0.2481 1.38921 0.327257 1.53011 0.468153L1.53073 0.469402Z"
              fill="black"
              fill-opacity="0.6"
            />
          </svg>
        </div>
        <div
          className="product-type"
          onClick={() => handleProductTypeChange("Shirts")}
        >
          <p className="filters-type">Shirts</p>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.53073 0.469402L6.53073 5.4694C6.60065 5.53908 6.65613 5.62187 6.69399 5.71304C6.73184 5.8042 6.75133 5.90194 6.75133 6.00065C6.75133 6.09936 6.73184 6.1971 6.69399 6.28827C6.65613 6.37943 6.60065 6.46222 6.53073 6.5319L1.53073 11.5319C1.38984 11.6728 1.19874 11.752 0.999484 11.752C0.800227 11.752 0.609131 11.6728 0.468235 11.5319C0.327338 11.391 0.248184 11.1999 0.248184 11.0007C0.248184 10.8014 0.327338 10.6103 0.468235 10.4694L4.93761 6.00003L0.46761 1.53065C0.326714 1.38976 0.247559 1.19866 0.247559 0.999403C0.247559 0.800145 0.326714 0.609049 0.46761 0.468153C0.608506 0.327257 0.799603 0.2481 0.99886 0.2481C1.19812 0.2481 1.38921 0.327257 1.53011 0.468153L1.53073 0.469402Z"
              fill="black"
              fill-opacity="0.6"
            />
          </svg>
        </div>
        <div
          className="product-type"
          onClick={() => handleProductTypeChange("Hoodie")}
        >
          <p className="filters-type">Hoodie</p>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.53073 0.469402L6.53073 5.4694C6.60065 5.53908 6.65613 5.62187 6.69399 5.71304C6.73184 5.8042 6.75133 5.90194 6.75133 6.00065C6.75133 6.09936 6.73184 6.1971 6.69399 6.28827C6.65613 6.37943 6.60065 6.46222 6.53073 6.5319L1.53073 11.5319C1.38984 11.6728 1.19874 11.752 0.999484 11.752C0.800227 11.752 0.609131 11.6728 0.468235 11.5319C0.327338 11.391 0.248184 11.1999 0.248184 11.0007C0.248184 10.8014 0.327338 10.6103 0.468235 10.4694L4.93761 6.00003L0.46761 1.53065C0.326714 1.38976 0.247559 1.19866 0.247559 0.999403C0.247559 0.800145 0.326714 0.609049 0.46761 0.468153C0.608506 0.327257 0.799603 0.2481 0.99886 0.2481C1.19812 0.2481 1.38921 0.327257 1.53011 0.468153L1.53073 0.469402Z"
              fill="black"
              fill-opacity="0.6"
            />
          </svg>
        </div>{" "}
        <div
          className="product-type"
          onClick={() => handleProductTypeChange("Jeans")}
        >
          <p className="filters-type">Jeans</p>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.53073 0.469402L6.53073 5.4694C6.60065 5.53908 6.65613 5.62187 6.69399 5.71304C6.73184 5.8042 6.75133 5.90194 6.75133 6.00065C6.75133 6.09936 6.73184 6.1971 6.69399 6.28827C6.65613 6.37943 6.60065 6.46222 6.53073 6.5319L1.53073 11.5319C1.38984 11.6728 1.19874 11.752 0.999484 11.752C0.800227 11.752 0.609131 11.6728 0.468235 11.5319C0.327338 11.391 0.248184 11.1999 0.248184 11.0007C0.248184 10.8014 0.327338 10.6103 0.468235 10.4694L4.93761 6.00003L0.46761 1.53065C0.326714 1.38976 0.247559 1.19866 0.247559 0.999403C0.247559 0.800145 0.326714 0.609049 0.46761 0.468153C0.608506 0.327257 0.799603 0.2481 0.99886 0.2481C1.19812 0.2481 1.38921 0.327257 1.53011 0.468153L1.53073 0.469402Z"
              fill="black"
              fill-opacity="0.6"
            />
          </svg>
        </div>
      </div>
      <div>
        <p className="filters-price">Price</p>
        <div className="filters-range">
          <InputRange
            value={filters?.priceRange || [0, 750]}
            onChange={handlePriceRangeChange}
          />
        </div>
      </div>
      <div className="color-container">
        <p className="filters-price">Colors</p>
        <div className="color-containers">
          <Colors
            selectedColors={filters?.colors || []}
            onChange={handleColorsChange}
          />
        </div>
      </div>
      <div className="size-container">
        <button
          className={
            filters.sizes.find((item) => item == "S") ? "size-btn-active" : ""
          }
          onClick={() => handleSizesChange(["S"])}
        >
          Small
        </button>
        <button
          className={
            filters.sizes.find((item) => item == "M") ? "size-btn-active" : ""
          }
          onClick={() => handleSizesChange(["M"])}
        >
          Medium
        </button>
        <button
          className={
            filters.sizes.find((item) => item == "L") ? "size-btn-active" : ""
          }
          onClick={() => handleSizesChange(["L"])}
        >
          Large
        </button>
      </div>
      <div className="dress-style">
        <p>
          <span onClick={() => handleDressStyleChange("Casual")}>Casual</span>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.53073 0.469524L6.53073 5.46952C6.60065 5.5392 6.65613 5.622 6.69399 5.71316C6.73184 5.80432 6.75133 5.90206 6.75133 6.00077C6.75133 6.09948 6.73184 6.19722 6.69399 6.28839C6.65613 6.37955 6.60065 6.46235 6.53073 6.53202L1.53073 11.532C1.38984 11.6729 1.19874 11.7521 0.999484 11.7521C0.800227 11.7521 0.609131 11.6729 0.468235 11.532C0.327338 11.3911 0.248184 11.2 0.248184 11.0008C0.248184 10.8015 0.327338 10.6104 0.468235 10.4695L4.93761 6.00015L0.46761 1.53078C0.326714 1.38988 0.247559 1.19878 0.247559 0.999525C0.247559 0.800267 0.326714 0.609171 0.46761 0.468275C0.608506 0.327379 0.799603 0.248222 0.99886 0.248222C1.19812 0.248222 1.38921 0.327379 1.53011 0.468275L1.53073 0.469524Z"
              fill="black"
              fill-opacity="0.6"
            />
          </svg>
        </p>
        <p>
          <span onClick={() => handleDressStyleChange("Formal")}>Formal</span>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.53073 0.469524L6.53073 5.46952C6.60065 5.5392 6.65613 5.622 6.69399 5.71316C6.73184 5.80432 6.75133 5.90206 6.75133 6.00077C6.75133 6.09948 6.73184 6.19722 6.69399 6.28839C6.65613 6.37955 6.60065 6.46235 6.53073 6.53202L1.53073 11.532C1.38984 11.6729 1.19874 11.7521 0.999484 11.7521C0.800227 11.7521 0.609131 11.6729 0.468235 11.532C0.327338 11.3911 0.248184 11.2 0.248184 11.0008C0.248184 10.8015 0.327338 10.6104 0.468235 10.4695L4.93761 6.00015L0.46761 1.53078C0.326714 1.38988 0.247559 1.19878 0.247559 0.999525C0.247559 0.800267 0.326714 0.609171 0.46761 0.468275C0.608506 0.327379 0.799603 0.248222 0.99886 0.248222C1.19812 0.248222 1.38921 0.327379 1.53011 0.468275L1.53073 0.469524Z"
              fill="black"
              fill-opacity="0.6"
            />
          </svg>
        </p>
        <p>
          <span onClick={() => handleDressStyleChange("Party")}>Party</span>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.53073 0.469524L6.53073 5.46952C6.60065 5.5392 6.65613 5.622 6.69399 5.71316C6.73184 5.80432 6.75133 5.90206 6.75133 6.00077C6.75133 6.09948 6.73184 6.19722 6.69399 6.28839C6.65613 6.37955 6.60065 6.46235 6.53073 6.53202L1.53073 11.532C1.38984 11.6729 1.19874 11.7521 0.999484 11.7521C0.800227 11.7521 0.609131 11.6729 0.468235 11.532C0.327338 11.3911 0.248184 11.2 0.248184 11.0008C0.248184 10.8015 0.327338 10.6104 0.468235 10.4695L4.93761 6.00015L0.46761 1.53078C0.326714 1.38988 0.247559 1.19878 0.247559 0.999525C0.247559 0.800267 0.326714 0.609171 0.46761 0.468275C0.608506 0.327379 0.799603 0.248222 0.99886 0.248222C1.19812 0.248222 1.38921 0.327379 1.53011 0.468275L1.53073 0.469524Z"
              fill="black"
              fill-opacity="0.6"
            />
          </svg>
        </p>
        <p>
          <span onClick={() => handleDressStyleChange("Gym")}>Gym</span>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.53073 0.469524L6.53073 5.46952C6.60065 5.5392 6.65613 5.622 6.69399 5.71316C6.73184 5.80432 6.75133 5.90206 6.75133 6.00077C6.75133 6.09948 6.73184 6.19722 6.69399 6.28839C6.65613 6.37955 6.60065 6.46235 6.53073 6.53202L1.53073 11.532C1.38984 11.6729 1.19874 11.7521 0.999484 11.7521C0.800227 11.7521 0.609131 11.6729 0.468235 11.532C0.327338 11.3911 0.248184 11.2 0.248184 11.0008C0.248184 10.8015 0.327338 10.6104 0.468235 10.4695L4.93761 6.00015L0.46761 1.53078C0.326714 1.38988 0.247559 1.19878 0.247559 0.999525C0.247559 0.800267 0.326714 0.609171 0.46761 0.468275C0.608506 0.327379 0.799603 0.248222 0.99886 0.248222C1.19812 0.248222 1.38921 0.327379 1.53011 0.468275L1.53073 0.469524Z"
              fill="black"
              fill-opacity="0.6"
            />
          </svg>
        </p>
      </div>
      <button className="filters-apply">Apply Filter</button>
    </div>
  );
};

export default FilterSection;
