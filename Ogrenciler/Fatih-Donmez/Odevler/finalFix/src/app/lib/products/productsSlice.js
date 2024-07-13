import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:3001/Products");
    const products = response.data.flat(); // Flatten the nested array
    return products;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [], // Ensure items is initialized as an empty array
    status: "idle",
    error: null,
    filters: {
      productType: "",
      priceRange: [0, 750],
      colors: [],
      sizes: [],
      dressStyle: "Casual",
    },
    sort: "priceLowToHigh", // Default sort option
  },
  reducers: {
    setProductType(state, action) {
      state.filters.productType = action.payload;
    },
    setPriceRange(state, action) {
      state.filters.priceRange = action.payload;
    },
    setColors(state, action) {
      state.filters.colors = action.payload;
    },
    setSizes(state, action) {
      state.filters.sizes = action.payload;
    },
    setDressStyle(state, action) {
      state.filters.dressStyle = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    resetFilters(state) {
      state.filters = {
        productType: "",
        priceRange: [0, 750],
        colors: [],
        sizes: [],
        dressStyle: "Casual",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  setProductType,
  setPriceRange,
  setColors,
  setSizes,
  setDressStyle,
  setSort,
  resetFilters,
} = productsSlice.actions;

export const selectFilteredProducts = (state) => {
  const { items, filters, sort } = state.products;
  const filteredItems = items.filter((item) => {
    const matchesProductType = filters.productType
      ? item.cat === filters.productType
      : true;
    const matchesPriceRange =
      item.price >= filters.priceRange[0] &&
      item.price <= filters.priceRange[1];
    const matchesColors = filters.colors.length
      ? filters.colors.some((color) => item.colors.includes(color))
      : true;
    const matchesSizes = filters.sizes.length
      ? filters.sizes.some((size) => item.sizes.includes(size))
      : true;
    const matchesDressStyle = filters.dressStyle
      ? item.dressStyle === filters.dressStyle
      : true;

    return (
      matchesProductType &&
      matchesPriceRange &&
      matchesColors &&
      matchesSizes &&
      matchesDressStyle
    );
  });

  const sortedItems = [...filteredItems];
  switch (sort) {
    case "priceLowToHigh":
      sortedItems.sort((a, b) => a.price - b.price);
      break;
    case "priceHighToLow":
      sortedItems.sort((a, b) => b.price - a.price);
      break;
    case "aToZ":
      sortedItems.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "zToA":
      sortedItems.sort((a, b) => b.title.localeCompare(a.title));
      break;
    default:
      break;
  }

  return sortedItems;
};

export default productsSlice.reducer;
