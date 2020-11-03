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
import { Link } from "react-router-dom";

const EventView = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <Card>
      <Link style={{ textDecoration: "none", color: "black" }} to={`/products/detail/${product.id}`}>
        <CardMedia
          style={{ height: 150, minWidth: 200 }}
          image={product.main_image || jeans}
          title={product.title}
        />
      </Link>

      <CardContent>
        <div style={{ display: "flex", height: 60, flexGrow: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Typography gutterBottom variant="h5" component="h2">
              <Link style={{ textDecoration: "none", color: "black" }} to={`/products/detail/${product.id}`}>{product.title}</Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description.slice(0, 100).toLowerCase()}
            </Typography>

            <div style={{ marginTop: 33 }}>
              <Typography variant='h5' style={{ fontSize: 13.5, fontWeight: 500 }}>
                {`Price: ${product.price}.00`}
              </Typography>
            </div>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <div style={{ flexGrow: 1 }} />

        {/*<Button size="small" color="secondary" onClick={() => dispatch(authSlice.actions.addToCart(product))}>*/}
        {/*  Add to Cart*/}
        {/*</Button>*/}

      </CardActions>
    </Card >
  );
};

export default EventView;
