import React from "react";
import { Typography } from "@material-ui/core";
import "../assets/styles/style.css";
import { fetchProductsByFilter } from "../store/product";
import { useDispatch, useSelector } from "react-redux";
import productSlice from "../store/product";

function CategoriesFilters({ categories }) {
  const dispatch = useDispatch();
  // const { filters } = useSelector(state => state.products);
  return (
    <>
      <ul className="nav-categories-ul">

        <li><a onClick={() => {
          dispatch(productSlice.actions.resetFilterState());
          dispatch(fetchProductsByFilter())
        }}>All Products</a></li>

        {categories &&
          categories.length &&
          categories.map(category => (
            <li class="nav-category-parent">
              <a onClick={() => {
                dispatch(productSlice.actions.setCategoryFilter(category));
                dispatch(fetchProductsByFilter());

              }}> {category.name}</a>
              <ul class="nav-subcategories-ul">
                {category.sub_categories.map(subcategory => (
                  <li><a onClick={() => {
                    dispatch(productSlice.actions.setSubCategoryFilter(subcategory));
                    dispatch(fetchProductsByFilter());

                  }}>{subcategory.name}</a></li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </>
  );
}
export default CategoriesFilters;
