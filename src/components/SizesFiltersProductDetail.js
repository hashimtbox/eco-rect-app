import React from "react";
import { Button } from "@material-ui/core";
import "../assets/styles/style.css";
import { useDispatch } from "react-redux";
import productSlice, { fetchProductsByFilter } from "../store/product";

const buttonSizes = [
  { id: 1, size: "XL" },
  { id: 2, size: "L" },
  { id: 3, size: "SM" },
  { id: 4, size: "MD" },
  { id: 5, size: "XXL" },
  { id: 6, size: "XXXL" }
];
function SizesFiltersProductDetail({ buttonSizes }) {
  const dispatch = useDispatch();

  return (
    <>
      <ul className="nav-categories-ul">
        {buttonSizes &&
          buttonSizes.map(buttonitem => {
            return (
              <Button
                onClick={() => {
                  dispatch(productSlice.actions.setSizeFilter(buttonitem));
                  dispatch(fetchProductsByFilter());
                }}
                key={buttonitem.id}
                variant="outlined"
                style={{ marginRight: 5, marginBottom: 5 }}
              >
                {buttonitem.Size.name}
              </Button>
            );
          })}
      </ul>
    </>
  );
}
export default SizesFiltersProductDetail;
