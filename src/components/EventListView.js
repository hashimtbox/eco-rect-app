import React from "react";
import { Grid } from "@material-ui/core";
import EventView from "./EventView";

const EventListView = ({ events }) => {
  return (
    <Grid container spacing={3}>
      {events.map(event => (
        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
          <EventView event={event} />
        </Grid>
      ))
      }
    </Grid >
  );
};

export default EventListView;
