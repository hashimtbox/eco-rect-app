import React from 'react'
import { Button } from "@material-ui/core";
function SizesFilters() {
    return (
        <div>
            <Button variant='outlined' style={{ marginBottom: 7, marginRight: 7 }}>XL</Button>
            <Button variant='outlined' style={{ marginBottom: 7, marginRight: 7 }}>L</Button>
            <Button variant='outlined' style={{ marginBottom: 7, marginRight: 7 }}>SM</Button>
            <Button variant='outlined' style={{ marginBottom: 7, marginRight: 7 }}>MD</Button>
            <Button variant='outlined' style={{ marginBottom: 7, marginRight: 7 }}>XXL</Button>
            <Button variant='outlined' style={{ marginBottom: 7, marginRight: 7 }}>XXXL</Button>
        </div>
    )
}
export default SizesFilters