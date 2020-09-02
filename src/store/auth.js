import { createSlice } from "@reduxjs/toolkit";
import {API_HOST} from "../config/api";

export const initialState = {
  user: null,
  error: null,
  inProgress: false,
  isReady: false
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
    setReady : ((state, action) => {
      state.isReady = action.payload;
    })
  }
});

export const checkAuthorization = ()=> async dispatch => {
  try{
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
  }catch (error) {
    console.error(error)
    dispatch(authSlice.actions.setReady(true))
    dispatch(authSlice.actions.setUser(null))
  }
}

export const signout = ()=> async dispatch => {
  try{
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
  }catch (e) {
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
