import React from "react";
import Radio from "@material-ui/core/Radio";
import {useDispatch, useSelector} from "react-redux";
import productSlice, { fetchProductsByFilter } from "../store/product";
import authSlice from "../store/auth";
const Colors = [
  { id: 1, color: "green", Val: "green" },
  { id: 2, color: "red", Val: "red" },
  { id: 3, color: "yellow", Val: "yellow" },
  { id: 4, color: "purple", Val: "purple" },
  { id: 5, color: "black", Val: "black" },
  { id: 6, color: "orange", Val: "orange" }
];

export default function ColorsFiltersProductDetail({ Colors }) {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = React.useState(null);
  const { productDetail , selectedProductColor , selectedProductSize } = useSelector(state => state.products);

  const handleChange = event => {
    setSelectedValue(event.target.value);
    if(selectedProductSize !== null) {
      dispatch(productSlice.actions.setAllowToAddToCart(true));
    }
    dispatch(productSlice.actions.setSelectedProductColor(event.target.value));
  };

  return (
    <>
      <ul className="nav-categories-ul">
        {Colors &&
          Colors.length &&
          Colors.map(coloritem => {
            return (
              <Radio
                style={{
                  color: `${coloritem.Color.name}`,
                  "&$checked": `${coloritem.Color.name}`
                }}
                checked={selectedValue === `${coloritem.Color.name}`}
                onChange={handleChange}
                value={coloritem.Color.name}
              />
            );
          })}
      </ul>
    </>
  );
}
