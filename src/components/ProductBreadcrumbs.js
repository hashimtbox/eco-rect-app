import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "../assets/styles/style.css";
import { useSelector } from "react-redux";
import productSlice, { fetchProductsByFilter } from "../store/product";
import { Button } from "@material-ui/core";
function ProductBreadcrumbs({ filterData }) {
  const { category } = useParams();
  const { filters } = useSelector(state => state.products);
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link className="breadcrumb-hover" to={"/"}>
          Home
        </Link>
        <Link className="breadcrumb-hover" to={"/products"}>
          Products
        </Link>
        <Typography color="textPrimary">
          {(filterData && filterData.category) || "All"}
        </Typography>
      </Breadcrumbs>
      <h1 style={{ marginTop: 15, marginBottom: 15 }}>
        {(filterData && filterData.category) || "All Products"}
      </h1>
      <h3>Filters : </h3>
      <Button variant="outlined" style={{ marginRight: 5, marginBottom: 5 }}>
        {filters.category?.name}
      </Button>
      <Button variant="outlined" style={{ marginRight: 5, marginBottom: 5 }}>
        {filters.subCategory?.name}
      </Button>
      <Button variant="outlined" style={{ marginRight: 5, marginBottom: 5 }}>
        {filters.color}
      </Button>
      <Button variant="outlined" style={{ marginRight: 5, marginBottom: 5 }}>
        {filters.size?.name}
      </Button>
    </div>
  );
}

export default ProductBreadcrumbs;
