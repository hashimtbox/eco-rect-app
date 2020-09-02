import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "./auth";
import eventSlice from "./event";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    event: eventSlice.reducer
  },
  middleware: [...getDefaultMiddleware()]
});

export default store;
