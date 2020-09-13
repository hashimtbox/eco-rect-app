import { createSlice } from "@reduxjs/toolkit";
import { API_HOST } from "../config/api";

const initialState = {
  events: [],
  inProgress: false,
  error: null
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setProgress: (state, action) => {
      state.inProgress = action.payload;
    }
  }
});

export const fetchEvents = () => async dispatch => {
  try {
    dispatch(eventSlice.actions.setProgress(true));
    const res = await fetch(`${API_HOST}/web_api/event`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    const response = await res.json();
    console.log(response);
    dispatch(eventSlice.actions.setProgress(false));
    if (response.success) {
      dispatch(eventSlice.actions.setEvents(response.events));
    }
  } catch (e) {
    console.error(e);
    dispatch(eventSlice.actions.setProgress(false));
    dispatch(eventSlice.actions.setError("Something gone wrong."));
  }
};

export default eventSlice;
