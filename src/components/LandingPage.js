import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Login from "./Login";
import eventsSvg from "../assets/events.svg";
import EventListView from "./EventListView";
import macbook from "../assets/macbook.jpg";
import jacket from "../assets/jacket.jpg";
import jeans from "../assets/jeans.jpg";
import Template from "./Template";

const Banner = () => {
  return (
    <div>
      <Typography
        variant={"h3"}
        style={{ fontWeight: 300 }}
        color={"textSecondary"}
      >
        Amazon Comic Book Store
      </Typography>
      <Typography
        variant={"h6"}
        style={{ fontWeight: 400 }}
        color={"textSecondary"}
      >
        Shop from millions of comic books
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

const events = [
    {
        id: 1,
        title: 'Macbook Pro',
        price: 1000,
        description: '14 inch macbook pro for latest and greatest use by smart people of America',
        image: macbook,
    },
    {
        id: 2,
        title: 'Mens Jacket',
        price: 150,
        description: 'Awesome leather jacket for men to wear in summer or winter whatever',
        image: jacket,
    },
    {
        id: 2,
        title: 'Leather Jeans',
        price: 350,
        description: 'Beautiful leather jeans for women to wear in summer or winter whatever',
        image: jeans
    },
]

const LandingPage = () => {
  return (
    <Grid container style={{ height: "100%" }}>
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        // style={{ background: props.theme.palette.primary.main }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Banner />
        </div>
      </Grid>
        <Grid item>
            <div
                style={{
                    marginBottom : 30,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <Typography variant="h4">Trending Products</Typography>
            </div>
            <EventListView events={events} />
        </Grid>
    </Grid>
  );
};

export default LandingPage;
