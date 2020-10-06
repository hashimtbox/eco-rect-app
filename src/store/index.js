import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import authSlice from "./auth";
import eventSlice from "./event";
import productSlice from "./product";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  event: eventSlice.reducer,
  products: productSlice.reducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware()]
});
export const persistor = persistStore(store)


export default store;
