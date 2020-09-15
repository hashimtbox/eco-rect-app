import { createSlice } from "@reduxjs/toolkit";
import { API_HOST } from "../config/api";

const initialState = {
    products: [],
    categories: [],
    inProgress: false,
    error: null
};

const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setProgress: (state, action) => {
            state.inProgress = action.payload;
        },
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
    }
});

export const fetchProducts = () => async dispatch => {
    try {
        dispatch(productSlice.actions.setProgress(true));
        const res = await fetch(`${API_HOST}/api/product`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                'api_key': "eco-app-2SY:nPkgTTiETr-master-key",
            }
        });
        const response = await res.json();
        console.log(response);
        dispatch(productSlice.actions.setProducts(response.products));
    } catch (e) {
        console.error(e);
        dispatch(productSlice.actions.setProgress(false));
        dispatch(productSlice.actions.setError("Something gone wrong."));
    } finally {
        dispatch(productSlice.actions.setProgress(false));
    }
};

export const fetchProductCategories = () => async dispatch => {
    try {
        dispatch(productSlice.actions.setProgress(true));
        const res = await fetch(`${API_HOST}/api/product_categories`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                'api_key': "eco-app-2SY:nPkgTTiETr-master-key",
            }
        });
        const response = await res.json();
        console.log(response);
        dispatch(productSlice.actions.setCategories(response.message));
    } catch (e) {
        console.error(e);
        dispatch(productSlice.actions.setProgress(false));
        dispatch(productSlice.actions.setError("Something gone wrong."));
    } finally {
        dispatch(productSlice.actions.setProgress(false));
    }
};

export default productSlice;
