import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from "react-router-dom";
function ProductBreadcrumbs() {
    return (
        <div style={{ marginBottom: 30 }}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link style={{ textDecoration: "none", color: "inherit" }} to={"/"}>
                    Home
                </Link>
                <Link style={{ textDecoration: "none", color: "inherit" }} to={"/products"}>
                    Products
                </Link>
                <Typography color="textPrimary">Category</Typography>
            </Breadcrumbs>
        </div>
    )
}

export default ProductBreadcrumbs
