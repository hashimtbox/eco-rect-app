import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from "react-router-dom";
import { useParams } from "react-router";
function ProductBreadcrumbs() {
    const { category } = useParams()
    return (
        <div style={{ marginBottom: 30 }}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link style={{ textDecoration: "none", color: "inherit" }} to={"/"}>
                    Home
                </Link>
                <Link style={{ textDecoration: "none", color: "inherit" }} to={"/products"}>
                    Products
                </Link>
                <Link style={{ textDecoration: "none", color: "inherit" }} to={`/products/${category}`}>
                    <Typography color="textPrimary">{category}</Typography>
                </Link>

            </Breadcrumbs>
        </div>
    )
}

export default ProductBreadcrumbs
