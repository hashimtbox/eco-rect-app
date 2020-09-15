import React from "react";
import { Grid } from "@material-ui/core";
import "../assets/styles/style.css";
import Banner from "./Banner";
import MeetGrubster from "./MeetGrubster";
import AboutGrubster from "./AboutGrubster";
import ComicSlider from "./ComicSlider";
import TrendingProducts from './TrendingProducts';
import MiniLogo from "./MiniLogo";
import Footer from "./Footer";
const LandingPage = () => {
  return (
    <>
      <Grid container style={{ height: "100%" }} style={{ padding: 24 }}>
        <Banner />
        <MeetGrubster />
        <AboutGrubster />
        <ComicSlider />
        <TrendingProducts />
        <MiniLogo />
      </Grid>
      {/* <Footer /> */}
    </>
  );
};

export default LandingPage;
