import { createSlice } from "@reduxjs/toolkit";
import { API_HOST } from "../config/api";

export const initialState = {
  user: null,
  error: null,
  inProgress: false,
  isReady: false,
  cart: []
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setProgress: (state, action) => {
      state.inProgress = action.payload;
    },
    setReady: (state, action) => {
      state.isReady = action.payload;
    },
    incrementItemQuantity: (state, action) => {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload
      );

      const incrementedItem = {
        ...updatedCart[updatedItemIndex]
      };

      incrementedItem.quantity++;
      incrementedItem.total = incrementedItem.price * incrementedItem.quantity;
      updatedCart[updatedItemIndex] = incrementedItem;

      return { ...state, cart: updatedCart };
    },
    decrementItemQuantity: (state, action) => {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload
      );

      const decrementedItem = {
        ...updatedCart[updatedItemIndex]
      };

      decrementedItem.quantity--;
      decrementedItem.total = decrementedItem.price * decrementedItem.quantity;

      updatedCart[updatedItemIndex] = decrementedItem;

      return { ...state, cart: updatedCart };
    },
    addToCart: (state, action) => {
      console.log('addto', state);
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(item => item.id === action.payload.id);

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1, total: action.payload.price });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        };

        updatedItem.quantity++;
        // updatedItem.price = updatedItem.price * updatedItem.quantity;
        updatedItem.total = updatedItem.price * updatedItem.quantity;
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return { ...state, cart: updatedCart };
    },
    removeFromCart: (state, action) => {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload
      );
      updatedCart.splice(updatedItemIndex, 1);
      return { ...state, cart: updatedCart };
    },
  }
});

export const checkAuthorization = () => async dispatch => {
  try {
    dispatch(authSlice.actions.setReady(false))
    const res = await fetch(`${API_HOST}/web_api/auth/current_user`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    const response = await res.json()
    console.log(response)
    dispatch(authSlice.actions.setReady(true))
    dispatch(response.success ? authSlice.actions.setUser(response.user) : authSlice.actions.setUser(null))
  } catch (error) {
    console.error(error)
    dispatch(authSlice.actions.setReady(true))
    dispatch(authSlice.actions.setUser(null))
  }
}

export const signout = () => async dispatch => {
  try {
    const res = await fetch(`${API_HOST}/web_api/auth/admin_logout`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    const response = await res.json()
    console.log(response)
    if (response.success) {
      dispatch(authSlice.actions.setUser(null))
    }
  } catch (e) {
    console.log(e)
  }
}

export const signin = (email, password) => async dispatch => {
  try {
    dispatch(authSlice.actions.setProgress(true));
    const data = new URLSearchParams({
      email: email,
      password: password
    });
    const res = await fetch(
      `${API_HOST}/web_api/auth/admin_login`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: data
      }
    );
    const response = await res.json();
    console.log(response);
    dispatch(authSlice.actions.setProgress(false));
    if (response.success) {
      dispatch(authSlice.actions.setUser(response.user));
    } else {
      dispatch(authSlice.actions.setError(response.message));
    }
  } catch (e) {
    console.error(e);
    dispatch(authSlice.actions.setProgress(false));
    dispatch(authSlice.actions.setError("Something went wrong."));
  }
};

export default authSlice;
