import React, {useEffect} from "react";
import { Grid } from "@material-ui/core";
import "../assets/styles/style.css";
import Banner from "./Banner";
import MeetGrubster from "./MeetGrubster";
import AboutGrubster from "./AboutGrubster";
import ComicSlider from "./ComicSlider";
import TrendingProducts from './TrendingProducts';
import MiniLogo from "./MiniLogo";

import {useDispatch, useSelector} from "react-redux";
import {fetchProductCategories, fetchProducts} from "../store/product";

import Footer from "./Footer";

const LandingPage = () => {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.products)
  useEffect(()=> {
    dispatch(fetchProducts())
    dispatch(fetchProductCategories())
  }, [])

  return (
    <>
      <Grid container style={{ height: "100%" }} style={{ padding: 24 }}>
        <Banner />
        <MeetGrubster />
        <AboutGrubster />
        <ComicSlider />
        <TrendingProducts products={products} />
        <MiniLogo />
      </Grid>
      {/* <Footer /> */}
    </>
  );
};

export default LandingPage;
