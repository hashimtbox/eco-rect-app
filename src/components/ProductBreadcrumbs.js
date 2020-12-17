import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "../assets/styles/style.css";
import { useDispatch, useSelector } from "react-redux";
import productSlice, { fetchProductsByFilter } from "../store/product";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

function ProductBreadcrumbs({ filterData }) {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.products);

  return (
    <div className="product-breadcrumbs">
      <Breadcrumbs aria-label="breadcrumb">
        <Link className="breadcrumb-hover" to={"/"}>
          Home
        </Link>
        <Link className="breadcrumb-hover" to={"/products"}>
          Products
        </Link>
        <Typography color="textPrimary">
          {filterData && filterData?.category === "Products"
            ? "All Products"
            : filterData?.category}
        </Typography>
      </Breadcrumbs>
      <h1 style={{ marginTop: 15, marginBottom: 15, fontSize: 25 }}>
        {filterData && filterData?.category
          ? ` ${filterData.category} - ${filterData.subCategory}`
          : "All Products"}
      </h1>

      {(filters.category?.name ||
        filters.subCategory?.name ||
        filters.color?.name ||
        filters.size?.name) && <h3 style={{ fontSize: 17 }}>Filters : </h3>}

      {filters.category?.name && (
        <Button variant="outlined" style={{ marginRight: 5, marginBottom: 5 }}>
          {filters.category?.name}
        </Button>
      )}
      {filters.subCategory?.name && (
        <Button variant="outlined" style={{ marginRight: 5, marginBottom: 5 }}>
          {filters.subCategory?.name}
        </Button>
      )}
      {filters?.color && (
        <Button variant="outlined" style={{ marginRight: 5, marginBottom: 5 }}>
          {filters?.color}
        </Button>
      )}
      {filters.size?.name && (
        <Button variant="outlined" style={{ marginRight: 5, marginBottom: 5 }}>
          {filters.size?.name}
        </Button>
      )}
      {(filters.category?.name ||
        filters.subCategory?.name ||
        filters.color ||
        filters.size?.name) && (
        <Button
          onClick={() => {
            dispatch(productSlice.actions.resetFilterState());
            dispatch(fetchProductsByFilter());
          }}
          className="cart-deleto-btn"
          style={{ marginBottom: 5, marginLeft: "auto", color: "blue" }}
        >
          <DeleteIcon />
        </Button>
      )}
    </div>
  );
}

export default ProductBreadcrumbs;
