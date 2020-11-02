import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import eventsSvg from "../assets/logo.png";
import "../assets/styles/style.css";
function Banner() {
    return (
        <>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} id="home">
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant={"h3"} style={{ fontWeight: 300, textAlign: "center" }} color={"textSecondary"}>
                        GRUBSTERS COMICS WE ARE #GRUBSTERS
                    </Typography>
                    <Typography variant={"h6"} style={{ fontWeight: 400 }} color={"textSecondary"}>
                        Creative. Fun. Healthy.
                    </Typography>
                    <Typography variant={"h6"} style={{ fontWeight: 400, textAlign: "center" }} color={"textSecondary"}>
                        Eating Healthy and beyond. Helping kids live healthy lives
                    </Typography>
                    <img className="site-logo" src={eventsSvg} alt={"events"} />
                </div>
            </Grid>
        </>
    )
}

export default Banner
