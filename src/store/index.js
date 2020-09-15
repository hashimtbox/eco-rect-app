import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "./auth";
import eventSlice from "./event";
import productSlice from "./product";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    event: eventSlice.reducer,
    products: productSlice.reducer,
  },
  middleware: [...getDefaultMiddleware()]
});

export default store;
