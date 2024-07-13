import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cartItems");
    if (serializedState === null) {
      return { items: [] };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return { items: [] };
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartItems", serializedState);
  } catch (err) {}
};

const initialState = loadState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveState(state);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveState(state);
    },
    clearCart: (state) => {
      state.items = [];
      saveState(state);
    },
    loadCart: (state) => {
      const loadedState = loadState();
      return { ...state, items: loadedState.items };
    },
  },
});

export const { addToCart, removeFromCart, clearCart, loadCart } =
  cartSlice.actions;
export default cartSlice.reducer;
