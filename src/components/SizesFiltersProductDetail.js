import React from "react";
import { Button, Typography } from "@material-ui/core";
import "../assets/styles/style.css";
import { useDispatch, useSelector } from "react-redux";
import productSlice, { fetchProductsByFilter } from "../store/product";

const buttonSizes = [
  { id: 1, size: "XL" },
  { id: 2, size: "L" },
  { id: 3, size: "SM" },
  { id: 4, size: "MD" },
  { id: 5, size: "XXL" },
  { id: 6, size: "XXXL" },
];
function SizesFiltersProductDetail({ buttonSizes }) {
  console.log("button Sizes", buttonSizes);
  const UniqueSizes = buttonSizes?.reduce((acc, current) => {
    const x = acc.find((item) => item.Size.id === current.Size.id);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  const dispatch = useDispatch();
  const { selectedProductColor, selectedProductSize } = useSelector(
    (state) => state.products
  );
  return (
    <>
      <ul className="nav-categories-ul">
        {UniqueSizes &&
          UniqueSizes.map((buttonitem) => {
            return (
              <Button
                onClick={() => {
                  if (selectedProductColor !== null) {
                    dispatch(productSlice.actions.setAllowToAddToCart(true));
                  }
                  dispatch(
                    productSlice.actions.setSelectedProductSize(
                      buttonitem?.Size
                    )
                  );
                }}
                key={buttonitem.id}
                variant="outlined"
                style={{ marginRight: 5, marginBottom: 5 }}
              >
                {buttonitem?.Size?.name}
              </Button>
            );
          })}
      </ul>
      <Typography style={{ marginBottom: 10, marginTop: 10 }}>
        Selected Color : {selectedProductColor}{" "}
      </Typography>
      <Typography style={{ marginBottom: 10, marginTop: 10 }}>
        Selected Size : {selectedProductSize?.name}{" "}
      </Typography>
    </>
  );
}
export default SizesFiltersProductDetail;
