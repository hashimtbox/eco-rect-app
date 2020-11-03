import { createSlice } from "@reduxjs/toolkit";
import { API_HOST } from "../config/api";
import { useSelector } from "react-redux";

const initialState = {
  products: [],
  productDetail: null,
  categories: [],
  filteredProductsData: [],
  filters: {
    category: null,
    subCategory: null,
    size: null,
    color: null
  },
  selectedProductColor : null,
  selectedProductSize : null,
  allowToAddToCart: false,
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
    setSelectedProductColor: (state, action) => {
      state.selectedProductColor = action.payload;
    },
    setAllowToAddToCart: (state, action) => {
      state.allowToAddToCart = action.payload;
    },
    resetSelectedProductData: (state, action) => {
      state.allowToAddToCart = false;
      state.selectedProductColor = null ;
      state.selectedProductSize = null ;
    },

    setSelectedProductSize: (state, action) => {
      state.selectedProductSize = action.payload;
    },
    setFilteredProductsData: (state, action) => {
      state.filteredProductsData = action.payload;
    },
    setProductDetailData: (state, action) => {
      state.productDetail = action.payload;
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
    setColorFilter: (state, action) => {
      state.filters.color = action.payload;
    },
    setSizeFilter: (state, action) => {
      state.filters.size = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.filters.category = action.payload;
      state.filters.size = null;
      state.filters.subCategory = null;
      state.filters.color = null;
    },
    setSubCategoryFilter: (state, action) => {
      state.filters.subCategory = action.payload;
      state.filters.category = action.payload.Category;
      state.filters.color = null;
      state.filters.size = null;
    },
    resetFilterState: (state, action) => {
      state.filters.subCategory = null;
      state.filters.category = null;
      state.filters.color = null;
      state.filters.size = null;
    }
  }
});
export const fetchProductById = (product_id) => async (dispatch, getState) => {
  try {
    dispatch(productSlice.actions.setProgress(true));

    // const { product_id } = getState().products;
    const res = await fetch(
      `${API_HOST}/api/product/${product_id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          api_key: "eco-app-2SY:nPkgTTiETr-master-key"
        }
      }
    );
    const response = await res.json();
    console.log("response of product detail", response);
    dispatch(productSlice.actions.setProductDetailData(response.product));
  } catch (e) {
    console.error(e);
    dispatch(productSlice.actions.setProgress(false));
    dispatch(productSlice.actions.setError("Something gone wrong."));
  } finally {
    dispatch(productSlice.actions.setProgress(false));
  }
};

export const fetchProductsByFilter = () => async (dispatch, getState) => {
  try {
    dispatch(productSlice.actions.setProgress(true));

    const { filters } = getState().products;
    const res = await fetch(
      `${API_HOST}/api/product/by_filter?category=${filters.category?.id}&subCategory=${filters.subCategory?.id}&color=${filters.color ? filters.color : "undefined"}&size=${filters.size?.id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          api_key: "eco-app-2SY:nPkgTTiETr-master-key"
        }
      }
    );
    const response = await res.json();
    console.log(response);
    dispatch(productSlice.actions.setFilteredProductsData(response.data));
  } catch (e) {
    console.error(e);
    dispatch(productSlice.actions.setProgress(false));
    dispatch(productSlice.actions.setError("Something gone wrong."));
  } finally {
    dispatch(productSlice.actions.setProgress(false));
  }
};

export const fetchProducts = () => async dispatch => {
  try {
    dispatch(productSlice.actions.setProgress(true));
    const res = await fetch(`${API_HOST}/api/product/featured`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        api_key: "eco-app-2SY:nPkgTTiETr-master-key"
      }
    });
    const response = await res.json();
    console.log(response);
    dispatch(productSlice.actions.setProducts(response.featuredProducts));
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
        api_key: "eco-app-2SY:nPkgTTiETr-master-key"
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
