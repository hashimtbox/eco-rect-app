import React from "react";
import Skeleton from '@material-ui/lab/Skeleton';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import authSlice from "../store/auth";
import jeans from "../assets/jeans.jpg";
import {Link} from "react-router-dom";

const EventView = ({ product }) => {
  const dispatch = useDispatch()
  const Loading = false;
  return (
    <Card>
      <CardMedia
        style={Loading ? { height: 150, minWidth: 200, background: "#e9e9e9" } : { height: 150, minWidth: 200 }}
        image={product.image || jeans }
        title={product.title}
      />

      <CardContent>
        <div style={{ display: "flex", height: 60, flexGrow: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Typography gutterBottom variant="h5" component="h2">
                {Loading ? <Skeleton width="100%" /> : <Link to={`/products/detail/${product.id}`}>{product.title}</Link>}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {Loading ? <Skeleton width="90%" /> : product.description.slice(0, 100).toLowerCase()}
            </Typography>

            <div style={{ marginTop: 10 }}>
              <Typography variant='body2'>
                {Loading ? <Skeleton width="40%" /> : `Price: ${product.price}.00`}
              </Typography>
            </div>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <div style={{ flexGrow: 1 }} />
        {Loading ?
          <Skeleton width="30%" style={{ height: 30 }} /> :
          <Button size="small" color="secondary" onClick={() => dispatch(authSlice.actions.addToCart(product))}>
            Add to Cart
        </Button>
        }
      </CardActions>
    </Card >
  );
};

export default EventView;
