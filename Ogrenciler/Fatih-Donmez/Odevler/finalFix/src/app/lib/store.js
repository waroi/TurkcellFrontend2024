import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import cartReducer from "./cart/cartSlice";
import productsReducer from "./products/productsSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    cart: cartReducer,
    products: productsReducer,
  },
});

export default store;
