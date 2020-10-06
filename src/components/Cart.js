import React from "react";
import { useDispatch, useSelector } from "react-redux";
import authSlice from "../store/auth";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button, Typography, Box } from "@material-ui/core";
import macbook from "../assets/macbook.jpg";
import { useHistory } from "react-router";
function Cart() {
  const dispatch = useDispatch();
  const history = useHistory();

  const cart = useSelector(state => state.auth.cart);
  console.log(cart);

  return (
    <div>
      <Box m={2}>
        <Typography
          style={{ textAlign: "center", marginBottom: 20 }}
          variant={"h6"}
        >
          Cart
        </Typography>
        <Box m={2} width={350} maxHeight={190} display="block">
          {cart.map(item => {
            return (
              <div key={item.id}>
                <div style={{ display: "flex" }}>
                  <img
                    src={item.image || macbook}
                    alt={macbook}
                    height="80px"
                    width="80px"
                  />
                  <div style={{ marginLeft: 10 }}>
                    <Typography style={{ margin: 0 }} variant={"h6"}>
                      {item.title}
                    </Typography>
                    <p style={{ margin: 0, marginBottom: 8 }}>
                      Price: $ {item.price}{" "}
                    </p>
                  </div>

                  <Button
                    style={{ marginLeft: "auto", color: "red" }}
                    onClick={() =>
                      dispatch(authSlice.actions.deleteFromCart(item.id))
                    }
                  />
                </div>
                <hr style={{ borderColor: "#eee" }} />
              </div>
            );
          })}
        </Box>

        <br />
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => history.push("/cart")}
        >
          View Cart
        </Button>
      </Box>
    </div>
  );
}

export default Cart;
