import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import Template from "../components/Template";
import EventListView from "../components/EventListView";
import comic from "../assets/comic1.png";
import comic2 from "../assets/comic2.jpg";
import jeans from "../assets/jeans.jpg";
import Header from "./Header";
import Footer from "./Footer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import drawerConfig from "../config/drawer";
import { colors } from "../utils/colors";
import SidebarFilters from "./SidebarFilters";
import { Grid } from "@material-ui/core";
import ProductBreadcrumbs from "./ProductBreadcrumbs";
import Pagination from "@material-ui/lab/Pagination";
import {fetchProducts, fetchProductsByFilter} from "../store/product";
import NoItem from "./NoItem";
import TrendingProducts from "./TrendingProducts";
import SearchBar from "material-ui-search-bar";
import Loading from "./Loading";
import ProgressDialog from "./ProgressDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerConfig.drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerConfig.drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  drawerContent: {
    marginTop: 60,
  },
  navLink: {
    color: colors.dark,
    marginLeft: 10,
    marginRight: 10,
    cursor: "pointer",
  },
}));

const products = [];
const Products = () => {
  const dispatch = useDispatch();
  const { filteredProductsData , products, inProgress } = useSelector(state => state.products);
  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchProductsByFilter());
  }, []);

  const getNoOfPages = () => {
    try {
      return Math.ceil(filteredProductsData.prducts.length / itemsPerPage);
    } catch (e) {
      return 0;
    }
  };
  const itemsPerPage = 10;
  const [page, setPage] = React.useState(1);
  const [noOfPages] = React.useState(getNoOfPages());

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Template>
      {inProgress ? <ProgressDialog open={inProgress}/> : null}
      <Grid container style={{ height: "100%" }} style={{ padding: 35 }}>
        <Grid container spacing={4}>
          <Grid item xl={3} lg={3} md={12} sm={12} xs={12}>
            <ProductBreadcrumbs
              filterData={filteredProductsData?.filterDetails}
            />

            <SearchBar
              className="searchbar"
              dataSource={filteredProductsData?.prducts}
              onChange={
                (value) => console.log(value)

                // setState({
                //   dataSource: [value, value + value, value + value + value],
                // })
              }
              onRequestSearch={() => console.log("onRequestSearch")}
            />

            <SidebarFilters filterData={filteredProductsData} />
          </Grid>

          <Grid item xl={9} lg={9} md={12} sm={12} xs={12}>
            {
              filteredProductsData &&
              filteredProductsData.prducts &&
              filteredProductsData.prducts.length ?  (
                  <>
                  <div className="pagination-height">
                <EventListView
                  products={filteredProductsData.prducts.slice(
                    (page - 1) * itemsPerPage,
                    page * itemsPerPage
                  )}
                />
                </div>
                    <div className="product-pagination">
                      <Pagination
                          count={noOfPages}
                          page={page}
                          onChange={handleChange}
                          defaultPage={1}
                          color="secondary"
                          size="large"
                          showFirstButton
                          showLastButton
                      />
                    </div>
                </>

              ) : <Typography variant="h4" style={{ textAlign: "center", marginBottom: 150, marginTop: 150}} >No Product Found</Typography>
            }
            <TrendingProducts products={products} />
          </Grid>
        </Grid>
      </Grid>
      <div style={{ height: 80 }}></div>
    </Template>
  );
};

export default Products;
