import React from 'react'
import { Button } from "@material-ui/core";
import "../assets/styles/style.css";

const buttonSizes = [
    { id: 1, size: "XL" },
    { id: 2, size: "L" },
    { id: 3, size: "SM" },
    { id: 4, size: "MD" },
    { id: 5, size: "XXL" },
    { id: 6, size: "XXXL" },
]
function SizesFilters() {
    return (
        <>
            <ul className="nav-categories-ul">
                {buttonSizes.map(buttonitem => {
                    return (
                        <Button key={buttonitem.id} variant='outlined' className="button-size-filter">{buttonitem.size}</Button>
                    )
                })}
            </ul>
        </>
    )
}
export default SizesFilters