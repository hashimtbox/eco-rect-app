import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import eventsSvg from "../assets/logo.png";
import "../assets/styles/style.css";
function Banner() {
    return (
        <>
            <Grid item
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
            >
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Typography variant={"h3"} style={{ fontWeight: 300 }} color={"textSecondary"}>
                        Amazon Comic Book Store
                        </Typography>
                    <Typography variant={"h6"} style={{ fontWeight: 400 }} color={"textSecondary"}>
                        Shop from millions of comic books
                        </Typography>
                    <img
                        className="site-logo"
                        src={eventsSvg}
                        alt={"events"}
                    />
                </div>
            </Grid>
        </>
    )
}

export default Banner
