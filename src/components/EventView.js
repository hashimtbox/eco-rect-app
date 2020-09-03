import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { MoreVertOutlined } from "@material-ui/icons";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import { formatDate, getDayFromDate } from "../utils/helper";
import {useDispatch} from "react-redux";
import authSlice from "../store/auth";

const EventView = ({ event }) => {
    const dispatch = useDispatch()
  return (
    <Card>
      <CardMedia
        style={{ height: 150, minWidth: 200 }}
        image={event.image}
        title={event.title}
      />
      <CardContent>
        <div style={{ display: "flex", height: 60 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography gutterBottom variant="h5" component="h2">
              {event.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {event.description.slice(0, 100).toLowerCase()}
            </Typography>
              <div style={{marginTop: 10, marginBottom: 20}}>
                  <Typography variant='body2'>Price: ${event.price}.00</Typography>
              </div>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <div style={{ flexGrow: 1 }} />
        <Button size="small" color="secondary" onClick={()=> dispatch(authSlice.actions.addToCart(event))}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventView;
