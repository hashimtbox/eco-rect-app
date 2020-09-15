import React from "react";
import { Grid } from "@material-ui/core";
import EventView from "./EventView";

const EventListView = ({ products }) => {
  console.log('products', products)
  return products && products.length ? (
    <Grid container spacing={3}>
      {products.map(product => (
        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
          < EventView product={product} />
        </Grid>
      ))
      }
    </Grid >
  ) : null
};

export default EventListView;
