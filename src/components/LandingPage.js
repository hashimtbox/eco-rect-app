import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Login from "./Login";
import eventsSvg from "../assets/events.svg";

const Banner = () => {
  return (
    <div>
      <Typography
        variant={"h3"}
        style={{ fontWeight: 300 }}
        color={"textSecondary"}
      >
        Chalo Chalen
      </Typography>
      <Typography
        variant={"h6"}
        style={{ fontWeight: 400 }}
        color={"textSecondary"}
      >
        Best Event Tracking Platform
      </Typography>
      <img
        style={{ marginTop: 50 }}
        src={eventsSvg}
        alt={"events"}
        height={350}
        width={400}
      />
    </div>
  );
};

const LandingPage = () => {
  return (
    <Grid container style={{ height: "100%" }}>
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={6}
        xs={6}
        // style={{ background: props.theme.palette.primary.main }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "20%"
          }}
        >
          <Banner />
        </div>
      </Grid>
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        xs={6}
        sm={6}
        // style={{ background: props.theme.palette.background.default }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
            // color: props.theme.palette.primary.main
          }}
        >
          {/*<CustomMenu />*/}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "25%"
          }}
        >
          <Login />
        </div>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
