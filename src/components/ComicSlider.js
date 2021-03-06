import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import "../assets/styles/style.css";


import MaterialSliderHome from "./MaterialSliderHome";

function ComicSlider() {
    return (
        <>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} id="comix">
                <div style={{ marginTop: 70, marginBottom: 50, display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <Typography className="pseudo_border" variant="h4" style={{ marginBottom: 30 }}>Comic Book Highlights</Typography>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <MaterialSliderHome />
                </div>
            </Grid>
        </>
    )
}

export default ComicSlider
