import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Typography, Grid } from "@material-ui/core";
import macbook from "../assets/macbook.jpg";
import authSlice from "../store/auth";
import { useHistory } from "react-router";
import Template from "./Template";
import DeleteIcon from "@material-ui/icons/Delete";
const CartDetail = () => {
  const cart = useSelector(state => state.auth.cart);
  const dispatch = useDispatch();
  return (
    <Template>
      <Grid container spacing = {8}>
        <Grid item xs={8} >
          <Typography
            style={{ textAlign: "center", marginBottom: 20, marginTop: 20 }}
            variant="h4"
          >
            Shopping Cart
          </Typography>
          <div style={{marginLeft : 20 }}>
            {cart.map(item => {
              return (
                  <div key={item.id}>
                    <div style={{ display: "flex" }}>
                      <img
                          src={item.image || macbook}
                          alt={macbook}
                          height="150"
                          width="150"
                      />
                      <div style={{ marginLeft: 10 }}>
                        <Typography style={{ margin: 0 }} variant={"h6"}>
                          {item.title}
                        </Typography>
                        <p style={{ margin: 0, marginBottom: 8 }}>
                          Price: $ {item.price}{" "}
                        </p>
                      </div>

                      <div style={{marginLeft: "auto"}}>
                        <div>
                          <Button size="small" variant='outlined' style={{marginRight: 5}}>-</Button>
                          <Typography variant="body2"> 1 </Typography>
                          <Button size="small" variant='outlined' style={{marginRight: 5}}>+</Button>
                        </div>

                        <DeleteIcon
                            style={{ color: "red" }}
                            onClick={() =>
                                dispatch(authSlice.actions.deleteFromCart(item.id))
                            }
                        />
                      </div>
                    </div>

                    <hr style={{ borderColor: "#eee" }} />
                    <div style={{height: 30}}></div>
                  </div>
              );
            })}

          </div>

        </Grid>
        <Grid item xs={4}>
          <div style={{marginTop : 20 ,  borderColor: "#eee" }}>
            <Box m={2} width={350} maxHeight={190} border={0} borderColor="secondary">
              <Typography variant='h5'>Sub Total : </Typography>
              <Typography variant='h5'>Shipping Cost : </Typography>
              <Typography variant='h5'>Total : </Typography>
            </Box>

          </div>
        </Grid>
      </Grid>
      <div style={{height: 80}}></div>
    </Template>
  );
};

export default CartDetail;
