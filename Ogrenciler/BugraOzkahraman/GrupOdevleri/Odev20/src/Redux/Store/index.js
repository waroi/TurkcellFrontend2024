import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Slices/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
export default store;
