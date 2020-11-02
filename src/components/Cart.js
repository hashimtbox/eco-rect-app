import React from "react";
import { useDispatch, useSelector } from "react-redux";
import authSlice from "../store/auth";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button, Typography, Box } from "@material-ui/core";
import macbook from "../assets/macbook.jpg";
import { useHistory } from "react-router";
import '../assets/styles/style.css';
function Cart() {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector(state => state.auth.cart);
  return (
    <>
      <Box style={{ overflow: "hidden" }}>
        <Typography style={{ textAlign: "center", marginTop: 14, marginBottom: 10 }} variant={"h6"}>Shopping Cart</Typography>
        <Box style={{ overflow: "auto" }} width={350} maxHeight={226} display="block">
          {cart.map(item => {
            return (
              <div key={item.id}>
                <div style={{ display: "flex", margin: 13, marginRight: 0 }}>
                  <img src={item.main_image || macbook} alt={macbook} height="80px" width="80px" />
                  <div className="sprd-basket-item__info" style={{ marginLeft: 10 }}>
                    <div className="sprd-basket-item__info__col">
                      <Typography style={{ margin: 0 }} variant={"h6"}>{item.title}</Typography>
                      <p style={{ margin: 0, marginTop: 5, marginBottom: 8 }}>Price: $ {item.quantity * item.price}{" "}</p>
                      <p style={{ margin: 0, marginBottom: 8 }}>Quantity:  {item.quantity}{" "}</p>
                    </div>
                    <div className="sprd-basket-item__info__col"><Button className="cart-deleto-btn" style={{ marginLeft: "auto", color: "blue" }} onClick={() => dispatch(authSlice.actions.removeFromCart(item.id))} ><DeleteIcon /></Button></div>
                  </div>
                </div>
                <div className="border-bottom-item-cart" style={{ marginBottom: 13 }}></div>
              </div>
            );
          })}
        </Box>
        <div style={{ margin: 10 }}>
          <Button m={2} fullWidth variant="contained" color="secondary" onClick={() => history.push("/cart")}>View Cart</Button>
        </div>
      </Box>
    </>
  );
}
export default Cart;