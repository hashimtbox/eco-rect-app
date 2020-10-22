import React from "react";
import { Typography } from "@material-ui/core";
import "../assets/styles/style.css";
import { fetchProductsByFilter } from "../store/product";
import {useDispatch, useSelector} from "react-redux";
import productSlice from "../store/product";

function CategoriesFilters({ categories }) {
  const dispatch = useDispatch();
  // const { filters } = useSelector(state => state.products);
    return (
    <>
      <ul className="nav-categories-ul">
        <li>
          <Typography onClick={() => {
              dispatch(productSlice.actions.resetFilterState());
              dispatch(fetchProductsByFilter())
          }}>
            All Products
          </Typography>
        </li>
        {categories &&
          categories.length &&
          categories.map(category => (
            <li>
              <Typography
                onClick={() => {
                  dispatch(productSlice.actions.setCategoryFilter(category));
                  dispatch(fetchProductsByFilter());

                }}
              >
                {category.name}
              </Typography>
              <ul class="nav-subcategories-ul">
                {category.sub_categories.map(subcategory => (
                  <li>
                    <Typography
                      onClick={() => {
                        dispatch(productSlice.actions.setSubCategoryFilter(subcategory));
                        dispatch(fetchProductsByFilter());

                      }}
                    >
                      {subcategory.name}
                    </Typography>
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </>
  );
}
export default CategoriesFilters;
