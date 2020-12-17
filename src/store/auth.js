import { createSlice } from "@reduxjs/toolkit";
import { API_HOST } from "../config/api";
import {useSelector} from "react-redux";

export const initialState = {
  user: null,
  error: null,
  inProgress: false,
  isReady: false,
  apiResponse : null ,
  cart: [],
  myOrders : null,
  orderDetailById: null
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setOrderData: (state, action) => {
      state.orderDetailById = action.payload;
    },
    setMyOrders: (state, action) => {
      state.myOrders = action.payload;
    },
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
    setApiResponse: (state, action) => {
      state.apiResponse = action.payload;
    },
    resetCart: (state, action) => {
      state.cart = [];
    },
    incrementItemQuantity: (state, action) => {
      console.log('cartttttt', JSON.stringify(state.cart, undefined, 2));
      const updatedCart = [...state.cart];


      const updatedItemIndex = updatedCart.findIndex((item) => item.id === action.payload.id &&
        (item.selectedColor === action.payload.selectedColor &&
          item.selectedSize === action.payload.selectedSize));


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

      const updatedItemIndex = updatedCart.findIndex((item) => item.id === action.payload.id &&
        (item.selectedColor === action.payload.selectedColor &&
          item.selectedSize === action.payload.selectedSize));

      const decrementedItem = {
        ...updatedCart[updatedItemIndex]
      };

      decrementedItem.quantity--;
      decrementedItem.total = decrementedItem.price * decrementedItem.quantity;

      updatedCart[updatedItemIndex] = decrementedItem;

      return { ...state, cart: updatedCart };
    },
    addToCart: (state, action) => {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex((item) => item.id === action.payload.id &&
        (item.selectedColor === action.payload.selectedColor &&
          item.selectedSize === action.payload.selectedSize));

      if (updatedItemIndex < 0) {

        updatedCart.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price
        });
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
      const updatedItemIndex = updatedCart.findIndex((item) => item.id === action.payload.id &&
        (item.selectedColor === action.payload.selectedColor &&
          item.selectedSize === action.payload.selectedSize));
      updatedCart.splice(updatedItemIndex, 1);
      return { ...state, cart: updatedCart };
    },
  }
});
export const checkAuthorization = () => async dispatch => {
  try {
    const {  user  } = useSelector(state => state.auth);
    console.log("user user ",user)
    dispatch(authSlice.actions.setReady(true))
    dispatch(user ? authSlice.actions.setUser(user) : authSlice.actions.setUser(null))
  } catch (error) {
    console.error(error)
    dispatch(authSlice.actions.setReady(true))
    dispatch(authSlice.actions.setUser(null))
  }
}
export const signUp = (first_name,last_name,email, password) => async dispatch => {
  try {
    dispatch(authSlice.actions.setProgress(true));
    const data = new URLSearchParams({
      first_name : first_name ,
      last_name : last_name,
      email: email,
      password: password
    });
    const res = await fetch(
        `${API_HOST}/api/user/sign_up`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            api_key: "eco-app-2SY:nPkgTTiETr-master-key"
          },
          body: data
        }
    );
    const response = await res.json();
    console.log(response);
    dispatch(authSlice.actions.setProgress(false));
    if (response.success) {
      dispatch(authSlice.actions.setUser(response.user));
      dispatch(authSlice.actions.setApiResponse(response));
    } else {
      dispatch(authSlice.actions.setError(response.message));
      dispatch(authSlice.actions.setApiResponse(response));

    }
  } catch (e) {
    console.error(e);
    dispatch(authSlice.actions.setProgress(false));
    dispatch(authSlice.actions.setError("Something went wrong."));
  }
};
export const signin = (email, password) => async dispatch => {
  try {
    dispatch(authSlice.actions.setProgress(true));
    const data = new URLSearchParams({
      email: email,
      password: password
    });
    const res = await fetch(
      `${API_HOST}/api/user/sign_in`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
          api_key: "eco-app-2SY:nPkgTTiETr-master-key"
        },
        body: data
      }
    );
    const response = await res.json();
    console.log(response);
    dispatch(authSlice.actions.setProgress(false));
    if (response.success) {
      dispatch(authSlice.actions.setUser(response.user));
      dispatch(authSlice.actions.setApiResponse(response));
    } else {
      dispatch(authSlice.actions.setError(response.message));
      dispatch(authSlice.actions.setApiResponse(response));
    }
  } catch (e) {
    console.error(e);
    dispatch(authSlice.actions.setProgress(false));
    dispatch(authSlice.actions.setError("Something went wrong."));
  }
};
export const signInWithGoogle = (first_name,last_name,email, google_id) => async dispatch => {
  try {
    dispatch(authSlice.actions.setProgress(true));
    const data = new URLSearchParams({
      first_name : first_name ,
      last_name : last_name,
      email: email,
      google_id: google_id
    });
    const res = await fetch(
        `${API_HOST}/api/user/login_with_google`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            api_key: "eco-app-2SY:nPkgTTiETr-master-key"
          },
          body: data
        }
    );
    const response = await res.json();
    console.log(response);
    dispatch(authSlice.actions.setProgress(false));
    if (response.success) {
      dispatch(authSlice.actions.setUser(response.user));
      dispatch(authSlice.actions.setApiResponse(response));
    } else {
      dispatch(authSlice.actions.setError(response.message));
      dispatch(authSlice.actions.setApiResponse(response));

    }
  } catch (e) {
    console.error(e);
    dispatch(authSlice.actions.setProgress(false));
    dispatch(authSlice.actions.setError("Something went wrong."));
  }
};
export const signInWithFacebook = (first_name,last_name,email, facebook_id) => async dispatch => {
  try {
    dispatch(authSlice.actions.setProgress(true));
    const data = new URLSearchParams({
      first_name : first_name ,
      last_name : last_name,
      email: email,
      facebook_id: facebook_id
    });
    const res = await fetch(
        `${API_HOST}/api/user/login_with_facebook`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            api_key: "eco-app-2SY:nPkgTTiETr-master-key"
          },
          body: data
        }
    );
    const response = await res.json();
    console.log(response);
    dispatch(authSlice.actions.setProgress(false));
    if (response.success) {
      dispatch(authSlice.actions.setUser(response.user));
      dispatch(authSlice.actions.setApiResponse(response));
    } else {
      dispatch(authSlice.actions.setError(response.message));
      dispatch(authSlice.actions.setApiResponse(response));

    }
  } catch (e) {
    console.error(e);
    dispatch(authSlice.actions.setProgress(false));
    dispatch(authSlice.actions.setError("Something went wrong."));
  }
};

export const signout = () => async dispatch => {
  try {
    dispatch(authSlice.actions.setUser(null));
    dispatch(authSlice.actions.setApiResponse(null));
    dispatch(authSlice.actions.setOrderData(null));
    dispatch(authSlice.actions.setMyOrders(null));
    dispatch(authSlice.actions.setApiResponse(null));
    dispatch(authSlice.actions.resetCart(null));
    dispatch(authSlice.actions.setError(null));

  } catch (e) {
    console.log(e)
  }
}
export const editProfile = (first_name, last_name, address, zip_code, city, country,phone_num,user_id,profile_pic) => async dispatch => {
  try {
    dispatch(authSlice.actions.setProgress(true));
    let formdata = new FormData();
    formdata.append("first_name", first_name);
    formdata.append("last_name", last_name);
    formdata.append("address", address);
    formdata.append("zip_code", zip_code);
    formdata.append("city", city);
    formdata.append("country", country);
    formdata.append("phone_num", phone_num);
    formdata.append("user_id", user_id);
    formdata.append("profile_pic", profile_pic);

    const res = await fetch(
        `${API_HOST}/api/user/edit_profile`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            Accept: "application/json",
            api_key: "eco-app-2SY:nPkgTTiETr-master-key"
          },
          body: formdata
        }
    );
    const response = await res.json();
    console.log(response);
    dispatch(authSlice.actions.setProgress(false));
    if (response.success) {
      dispatch(authSlice.actions.setUser(response.user));
      dispatch(authSlice.actions.setApiResponse(response));
    } else {
      dispatch(authSlice.actions.setError(response.message));
      dispatch(authSlice.actions.setApiResponse(response));
    }
  } catch (e) {
    console.error(e);
    dispatch(authSlice.actions.setProgress(false));
    dispatch(authSlice.actions.setError("Something went wrong."));
  }
};
export const changePassword = (email, old_password , new_password) => async dispatch => {
  try {
    dispatch(authSlice.actions.setProgress(true));
    const data = new URLSearchParams({
      email: email,
      old_password: old_password ,
      new_password : new_password
    });
    const res = await fetch(
        `${API_HOST}/api/user/change_password`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            api_key: "eco-app-2SY:nPkgTTiETr-master-key"
          },
          body: data
        }
    );
    const response = await res.json();
    console.log(response);
    dispatch(authSlice.actions.setProgress(false));
    if (response.success) {
      dispatch(authSlice.actions.setApiResponse(response));
    } else {
      dispatch(authSlice.actions.setError(response.message));
      dispatch(authSlice.actions.setApiResponse(response));
    }
  } catch (e) {
    console.error(e);
    dispatch(authSlice.actions.setProgress(false));
    dispatch(authSlice.actions.setError("Something went wrong."));
  }
};
export const placeOrder = (user_data, order_data , cart_data) => async dispatch => {
  try {
    dispatch(authSlice.actions.setProgress(true));
    const data = new URLSearchParams({
      user_data: user_data,
      order_data: order_data,
      cart_data : cart_data
    });
    const res = await fetch(
        `${API_HOST}/api/user/place_order`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            api_key: "eco-app-2SY:nPkgTTiETr-master-key"
          },
          body: data
        }
    );
    const response = await res.json();
    console.log(response);
    dispatch(authSlice.actions.setProgress(false));
    if (response.success) {
      dispatch(authSlice.actions.setApiResponse(response));
    } else {
      dispatch(authSlice.actions.setError(response.message));
      dispatch(authSlice.actions.setApiResponse(response));
    }
  } catch (e) {
    console.error(e);
    dispatch(authSlice.actions.setProgress(false));
    dispatch(authSlice.actions.setError("Something went wrong."));
  }
};
export const getMyOrders = (email) => async dispatch => {
  try {
    dispatch(authSlice.actions.setProgress(true));

    const res = await fetch(
        `${API_HOST}/api/user/my_orders/${email}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            api_key: "eco-app-2SY:nPkgTTiETr-master-key"
          }
        }
    );
    const response = await res.json();
    console.log(response);
    dispatch(authSlice.actions.setProgress(false));
    if (response.success) {
      dispatch(authSlice.actions.setMyOrders(response.orders));
    } else {
      dispatch(authSlice.actions.setError(response.message));
      dispatch(authSlice.actions.setApiResponse(response));
    }
  } catch (e) {
    console.error(e);
    dispatch(authSlice.actions.setProgress(false));
    dispatch(authSlice.actions.setError("Something went wrong."));
  }
};
export const getOrder = (id) => async dispatch => {
  try {
    dispatch(authSlice.actions.setProgress(true));

    const res = await fetch(
        `${API_HOST}/api/user/order/${id}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            api_key: "eco-app-2SY:nPkgTTiETr-master-key"
          }
        }
    );
    const response = await res.json();
    console.log(response);
    dispatch(authSlice.actions.setProgress(false));
    if (response.success) {
      dispatch(authSlice.actions.setOrderData(response.order));
    } else {
      dispatch(authSlice.actions.setError(response.message));
      dispatch(authSlice.actions.setApiResponse(response));
    }
  } catch (e) {
    console.error(e);
    dispatch(authSlice.actions.setProgress(false));
    dispatch(authSlice.actions.setError("Something went wrong."));
  }
};

export default authSlice;
