import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "../assets/styles/style.css";
function ProductBreadcrumbs() {
    const { category } = useParams()
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link className="breadcrumb-hover" to={"/"}>
                    Home
                </Link>
                <Link className="breadcrumb-hover" to={"/products"}>
                    Products
                </Link>
                <Link className="breadcrumb-hover" to={`/products/${category}`}>
                    <Typography color="textPrimary">{category}</Typography>
                </Link>

            </Breadcrumbs>
            <h1 style={{ marginTop: 15, marginBottom: 15 }}>
                Women - Hoodies & Sweatshirts (Hardcoded + Present in ProductBreadCrumbs Component)
            </h1>
        </div>
    )
}

export default ProductBreadcrumbs
