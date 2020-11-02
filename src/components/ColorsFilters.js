import React from "react";
import Radio from "@material-ui/core/Radio";
import { useDispatch } from "react-redux";
import productSlice, { fetchProductsByFilter } from "../store/product";
const Colors = [
  { id: 1, color: "green", Val: "green" },
  { id: 2, color: "red", Val: "red" },
  { id: 3, color: "yellow", Val: "yellow" },
  { id: 4, color: "purple", Val: "purple" },
  { id: 5, color: "black", Val: "black" },
  { id: 6, color: "orange", Val: "orange" }
];

export default function ColorsFilters({ Colors }) {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = React.useState(null);
  const handleChange = event => {
    setSelectedValue(event.target.value);
    dispatch(productSlice.actions.setColorFilter(event.target.value));
    dispatch(fetchProductsByFilter());
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
                  color: `${coloritem.name}`,
                  "&$checked": `${coloritem.name}`
                }}
                checked={selectedValue === `${coloritem.name}`}
                onChange={handleChange}
                value={coloritem.name}
              />
            );
          })}
      </ul>
    </>
  );
}
