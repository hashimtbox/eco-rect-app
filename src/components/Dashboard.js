import React, { useEffect } from "react";
import {
  CircularProgress,
  LinearProgress,
  Typography
} from "@material-ui/core";
import EventListView from "./EventListView";
import Template from "./Template";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../store/event";
import Loading from "./Loading";
import {dashboard} from "../config/drawer";
import macbook from '../assets/macbook.jpg'
import jeans from '../assets/jeans.jpg'
import jacket from '../assets/jacket.jpg'
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

const Dashboard = () => {
  const dispatch = useDispatch();
  const inProgress = false;
  //const { events, inProgress, error } = useSelector(state => state.event);
  // useEffect(() => {
  //   dispatch(fetchEvents());
  // }, []);

  return (
    <Template selected={dashboard}>
      {inProgress ? (
        <Loading />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Typography variant="h5">Trending Products</Typography>
          <div style={{ height: 20 }} />
          <EventListView events={events} />
        </div>
      )}
    </Template>
  );
};

export default Dashboard;
