import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Grid } from "@material-ui/core";
import macbook from "../assets/macbook.jpg";
import authSlice from "../store/auth";
import productSlice from "../store/product";
import Template from "./Template";
import DeleteIcon from "@material-ui/icons/Delete";
import '../assets/styles/style.css';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import NoItem from './NoItem';
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
const CartDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const cart = useSelector(state => state.auth.cart);

  const { filteredProductsData } = useSelector(state => state.products);

  const orderDetail = useSelector(state => state.products.orderDetail);


  const totalPrice = cart.reduce(function (prev, cur) {
    return prev + cur.total;
  }, 0);

  dispatch(productSlice.actions.setorderDetail(totalPrice));




  return cart && cart.length ?
    (
      <Template>
        <Grid container style={{ height: "100%" }} style={{ padding: 35 }}>
          <Grid container spacing={4}>
            <Grid item xl={7} lg={7} md={12} sm={12} xs={12}>
              <Typography style={{ fontWeight: 500, textAlign: "left", marginBottom: 20, marginTop: 20 }} variant="h4">Shopping cart</Typography>
              <div>
                {cart.map(item => {
                  console.log("cart" + item.id);
                  return (
                    <div key={item.id}>
                      <div style={{ display: "flex", paddingTop: 20, paddingBottom: 20 }}>
                        <div>
                          <Link style={{ textDecoration: "none", color: "black" }} to={`/products/detail/${item.id}`}>
                            <img src={item.main_image || macbook} alt={macbook} height="150" width="150" />
                          </Link>
                        </div>
                        <div className="sprd-basket-item__info" style={{ marginLeft: 20 }}>
                          <div className="sprd-basket-item__info__col">
                            <Typography style={{ fontSize: 16, margin: 0 }} variant={"h6"}>
                              <Link style={{ textDecoration: "none", color: "black" }} to={`/products/detail/${item.id}`}>{item.title}</Link>
                            </Typography>
                            <Typography style={{ fontSize: 16, margin: 0 }} variant={"h6"}>
                              Size:   <span style={{ fontWeight: 400 }}>{item.selectedSize}</span>
                            </Typography>
                            <Typography style={{ fontSize: 16, margin: 0 }} variant={"h6"}>
                              Color:  <span style={{ fontWeight: 400 }}>{item.selectedColor}</span>
                            </Typography>
                          </div>
                          <div className="sprd-basket-item__info__col">
                            <Typography style={{ fontSize: 16, margin: 0 }} variant={"h6"}>
                              ${item.quantity * item.price}{" "}
                            </Typography>
                            {/* <DeleteIcon className="delete-icon" /> */}
                          </div>

                          <div className="sprd-basket-item__info__col">
                            <div className="sprd-quantity-control sprd-bg-m3 sprd-lbc-s2">
                              {(item.quantity > 1) ?
                                <button className="sprd-quantity-control__button" type="button" onClick={() =>
                                  dispatch(authSlice.actions.decrementItemQuantity(item))}><RemoveIcon /></button>
                                :
                                <button className="sprd-quantity-control__button" type="button" onClick={() =>
                                  dispatch(authSlice.actions.removeFromCart(item))
                                } style={{ fontSize: 0 }}><DeleteIcon style={{ color: "blue" }} /></button>
                              }
                              <span className="sprd-quantity-control__input">{item.quantity}</span>
                              <button className="sprd-quantity-control__button" type="button" onClick={() => {

                                dispatch(authSlice.actions.incrementItemQuantity(item))



                              }
                              }><AddIcon /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom-item-cart"></div>
                    </div>
                  );
                })}
              </div>
            </Grid>
            <Grid item xl={5} lg={5} md={12} sm={12} xs={12} >
              <div className="checkout-border-cart">
                <div style={{ display: "flex", marginBottom: 10 }}>
                  <Typography style={{ color: "black", fontSize: 16, margin: 0 }} variant={"h6"}>Total:</Typography>
                  <Typography style={{ color: "black", marginLeft: "auto", fontWeight: 400, fontSize: 15 }} variant={"h6"}> $ {totalPrice} </Typography>
                </div>
                <div style={{ display: "flex", marginBottom: 10 }}>
                  <Typography style={{ color: "black", fontSize: 16, margin: 0 }} variant={"h6"}>Shipping Costs:</Typography>
                  <Typography style={{ color: "black", marginLeft: "auto", fontWeight: 400, fontSize: 15 }} variant={"h6"}> $ {orderDetail?.shippingPrice} </Typography>
                </div>
                <div style={{ display: "flex", marginBottom: 10 }}>
                  <div>
                    <Typography style={{ color: "black", fontSize: 16, margin: 0 }} variant={"h6"}>Only 5 days Left</Typography>
                    <Typography style={{ color: "black", fontWeight: 400, fontSize: 16, margin: 0, marginTop: -6 }} variant={"h6"}>15% Off Everything</Typography>
                  </div>
                  <Typography className="redeem-background" style={{ marginTop: 14, marginLeft: "auto", fontWeight: 400, fontSize: 15 }} variant={"h6"}>Redeem</Typography>
                </div>
                <div className="sticky">
                  <div style={{ display: "flex" }}>
                    <div>
                      <Typography style={{ fontWeight: 500, fontSize: 25, margin: 0 }} variant={"h5"}>
                        SubTotal:
                      </Typography>
                      <Typography style={{ fontWeight: 400, fontSize: 13, margin: 0, marginTop: -3 }} variant={"h6"}>
                        incl. delivery
                      </Typography>
                    </div>
                    <Typography style={{ marginLeft: "auto", fontWeight: 400, fontSize: 25 }} variant={"h5"}>
                      $ {orderDetail?.subtotal}
                    </Typography>

                  </div>
                  <button className="checkout-btn" onClick={() => history.push("/checkout")}>Checkout</button>
                </div>
                <div className="sprd-basket__payment__sprd-lbc-m3"><svg className="sprd-basket__payment__icon" viewBox="0 0 800 213.18" fill="currentColor"><path d="M440.69,57.57A5.19,5.19,0,0,1,445,65.71l-99.6,143.76a8.69,8.69,0,0,1-7.11,3.71H308.32a5.19,5.19,0,0,1-4.24-8.18l31-43.77-33-96.81A5.19,5.19,0,0,1,307,57.57h29.44a8.66,8.66,0,0,1,8.29,6.17l17.5,58.47,41.32-60.85a8.65,8.65,0,0,1,7.15-3.79h30Zm-200.23,58c1.3-8.24-.49-15.72-5.06-21.07s-11.4-8.12-19.86-8.12c-17,0-30.71,11.79-33.39,28.67-1.39,8.27.26,15.71,4.67,20.93s11.37,8,20,8c17.24,0,30.75-11.43,33.63-28.46Zm41.53-58a5.19,5.19,0,0,1,5.13,6L271,165.56a8.64,8.64,0,0,1-8.54,7.3H235.63a5.19,5.19,0,0,1-5.13-6l1.33-8.28s-14.71,17-41.26,17c-15.46,0-28.43-4.45-37.52-15.14-9.9-11.64-13.94-28.32-11.1-45.78,5.47-35,33.59-59.94,66.51-59.94,14.37,0,28.75,3.14,35.21,12.5l2.08,3,1.3-8.32a5.19,5.19,0,0,1,5.13-4.38H282Zm-178.82.71c1.24-7.84.25-13.52-3-17.35-5.47-6.39-16.08-6.39-27.31-6.39H68.53a5.18,5.18,0,0,0-5.12,4.38l-6.58,41.7h9.39c16.5,0,33.56,0,37-22.34ZM96,0c20.82,0,36.5,5.5,45.34,15.9,8,9.46,10.72,23,7.94,40.15-6.17,39.32-29.83,59.15-70.82,59.15H58.77a8.64,8.64,0,0,0-8.54,7.3l-6.79,43a8.64,8.64,0,0,1-8.54,7.3H5.18a5.19,5.19,0,0,1-5.12-6L25.22,7.3A8.64,8.64,0,0,1,33.77,0H96ZM760.94,4.39A5.19,5.19,0,0,1,766.07,0h28.74a5.19,5.19,0,0,1,5.13,6L774.75,165.55a8.64,8.64,0,0,1-8.54,7.3H740.53a5.19,5.19,0,0,1-5.12-6L760.94,4.38ZM684.3,115.57c1.3-8.24-.49-15.72-5.06-21.07s-11.4-8.12-19.86-8.12c-17,0-30.71,11.79-33.39,28.67-1.39,8.27.26,15.71,4.67,20.93s11.37,8,20,8c17.24,0,30.75-11.43,33.63-28.46Zm41.53-58a5.19,5.19,0,0,1,5.13,6l-16.11,102a8.64,8.64,0,0,1-8.54,7.3H679.46a5.19,5.19,0,0,1-5.13-6l1.33-8.28s-14.71,17-41.26,17c-15.46,0-28.43-4.45-37.52-15.14-9.9-11.64-13.94-28.32-11.1-45.78,5.47-35,33.59-59.94,66.51-59.94,14.37,0,28.75,3.14,35.2,12.5l2.09,3L690.9,62A5.19,5.19,0,0,1,696,57.57h29.8ZM547,58.28c1.24-7.84.25-13.52-3-17.35-5.47-6.39-16.08-6.39-27.31-6.39h-4.31a5.18,5.18,0,0,0-5.12,4.38l-6.58,41.7H510c16.5,0,33.56,0,37-22.34ZM539.83,0c20.82,0,36.5,5.5,45.34,15.9,8,9.46,10.72,23,7.94,40.15-6.17,39.32-29.83,59.15-70.82,59.15H502.6a8.64,8.64,0,0,0-8.54,7.3l-7.14,45.24a6.05,6.05,0,0,1-6,5.1H449a5.19,5.19,0,0,1-5.12-6L469.06,7.3A8.64,8.64,0,0,1,477.6,0h62.23Z"></path></svg><svg className="sprd-basket__payment__icon" viewBox="0 0 800 258.6" fill="currentColor"><path d="M134.77,25.4l22.66,115.23C130.86,66.8,71.86,27.74,0,9.37L.77,4.3h104.7c14.06,0,26.16,5.06,29.3,21.1Zm29.3,150L227.34,4.3H296.1l-102,250.4H125.77L73,55.46c37.5,15.24,70.7,48.83,84.4,85.17l6.63,34.77ZM346.5,255.07H281.63L322.26,4.3H387.1L346.5,255.07ZM523.43,0a161.14,161.14,0,0,1,58.2,10.55l-9,54.3-5.86-3.1c-11.73-5.47-27.34-9.77-48.43-9.4-25.4,0-37.1,11-37.1,21.5,0,11.7,13.66,19.93,36.3,31.23,37.13,18,54.7,39.46,54.7,68C571.5,225,527.34,259,459.37,258.6c-29.3,0-57-6.26-72.26-13.3l9-56.24,8.6,4.3c20.7,9.76,34.77,12.9,60.94,12.9,18.36,0,38.66-7.43,38.66-24.23,0-10.93-8.2-19.13-33.6-31.23-24.6-12.13-57-32-56.63-68C414.46,34,459.37,0,523.43,0ZM747.66,4.3,800,255.07H739.83c-5.83-28.9-7.8-37.5-7.8-37.5h-82.8s-2.74,6.66-13.7,37.5h-68L663.66,25.4C670.3,9,682,4.3,697.66,4.3ZM667.57,166H721.5s-2.76-12.5-14.86-72.26L702,72.27c-3.14,9.37-9,24.23-8.6,23.83C673,151.57,667.57,166,667.57,166Z"></path></svg><svg className="sprd-basket__payment__icon" viewBox="0 0 800 480" fill="currentColor"><path d="M560,0C692.55,0,800,107.45,800,240S692.55,480,560,480a239.06,239.06,0,0,1-160-61.16A239.09,239.09,0,0,1,240,480C107.45,480,0,372.54,0,240S107.45,0,240,0A239.06,239.06,0,0,1,400,61.16,239.05,239.05,0,0,1,560,0ZM99,297.42h23.78l19.8-114.85H105L79.23,253.86V182.57H43.58L23.78,297.43H47.54L63.38,210.3v87.13H81.2l31.68-87.13L99,297.43ZM209.9,273.66c1.29-7.93,2.63-16.5,4-25.75a94.24,94.24,0,0,0,2-17.82q0-27.72-33.67-27.72-11.88,0-27.72,5.94c-1.33,7.92-2.68,14.54-4,19.8,10.56-2.64,19.11-4,25.75-4,10.55,0,15.84,2.66,15.84,7.92V238h-9.9c-13.21,0-24.46,3.3-33.67,9.9-6.63,5.29-9.9,13.86-9.9,25.75,0,7.92,2,14.54,5.94,19.8,4,4,9.21,5.94,15.84,5.94q17.81,0,25.74-11.88v9.91h19.8v-5.94a130,130,0,0,0,4-17.82Zm71.29-47.53,4-21.76c-4-1.3-11.88-2-23.76-2q-35.64,0-35.64,31.68,0,17.81,17.82,25.74a25.24,25.24,0,0,1,9.9,5.94,8.24,8.24,0,0,1,2,5.94c0,5.29-4.66,7.92-13.86,7.92-4,0-11.23-1.3-21.78-4-1.33,9.24-2.68,16.52-4,21.78,5.24,1.32,13.85,2,25.74,2q37.57,0,37.62-31.68,0-15.84-17.82-25.75l-7.92-4c-1.32-1.3-2-3.28-2-5.94,0-5.26,4-7.92,11.88-7.92s13.85.68,17.82,2Zm51.49,2,2-23.78H322.77l2-13.86H301l-9.9,63.37a93.09,93.09,0,0,0-4,25.75q0,19.81,19.8,19.8,11.88,0,17.82-2l4-21.78a17.63,17.63,0,0,1-7.92,2c-5.29,0-7.92-2.63-7.92-7.92v-7.92c1.29-1.3,2.27-4,3-7.92a61.72,61.72,0,0,0,1-7.92,75,75,0,0,0,2-17.82h13.86ZM409.9,259.8a124.85,124.85,0,0,0,2-23.77c0-10.55-2.67-18.47-7.92-23.76q-9.95-9.89-25.75-9.9-17.83,0-29.7,15.84-11.89,13.87-11.88,39.6,0,41.59,41.59,41.59c10.56,0,19.11-1.3,25.75-4l4-23.76q-13.87,7.93-25.74,7.92t-17.82-5.94c-2.68-2.63-4-7.24-4-13.86H409.9ZM449.51,242c4-7.92,8.57-11.19,13.87-9.9,5.24-17.14,8.57-26.4,9.9-27.72q-5.95-4-11.88,2-5.95,2-11.88,11.88l2-13.86H427.73q-4,31.69-11.88,87.13l-2,5.94h25.75q3.95-33.65,9.9-55.45Zm89.11,53.47,4-25.76q-11.88,5.95-21.78,5.94a18.76,18.76,0,0,1-15.84-7.92q-5.95-5.95-5.94-19.8,0-21.77,7.92-31.68,7.86-11.88,23.76-11.88,9.89,0,21.78,5.94l4-23.76q-17.83-5.95-27.72-5.94-25.75,0-39.6,19.8-15.88,19.81-15.84,49.51,0,23.76,11.88,35.64Q497,299.41,516.83,299.4c9.21,0,16.49-1.3,21.78-4ZM626.74,238a57.44,57.44,0,0,0,1-7.93q0-27.72-33.67-27.72-11.88,0-27.72,5.94c-2.68,7.92-4,14.54-4,19.8,10.56-2.64,19.11-4,25.75-4,10.55,0,15.84,2.66,15.84,7.92,0,2.67-.69,4.65-2,5.94h-9.9a53.1,53.1,0,0,0-31.68,9.9c-6.63,5.29-9.9,13.86-9.9,25.75,0,7.92,2,14.54,5.94,19.8,4,4,9.21,5.94,15.84,5.94q17.83,0,25.75-11.88v9.91h19.8c1.3-4,2.64-11.54,4-22.77s2.64-20.11,4-26.74a58.87,58.87,0,0,1,1-9.9Zm38.61,4c4-7.92,8.57-11.19,13.87-9.9,1.29-11.88,4.61-21.1,9.9-27.72-2.68-1.3-6.63-.65-11.88,2q-5.95,2-11.88,11.88a44.83,44.83,0,0,0,2-13.86H643.56q-4,43.57-11.88,87.13l-2,5.94h25.75q5.93-43.53,9.9-55.45Zm67.32,55.45h23.77l19.8-114.85H750.49l-4,33.67q-11.88-11.88-23.76-11.88-17.83,0-27.72,15.84-13.87,15.88-13.86,41.59c0,9.24,3.26,18.51,9.9,27.72,4,6.62,11.18,9.9,21.78,9.9,9.21,0,16.49-3.27,21.78-9.9l-2,7.92ZM162.38,269.7c0-9.22,6.59-13.86,19.8-13.86h6q0,11.88-5.94,17.82-4,5.95-11.88,5.94c-5.29,0-7.92-3.27-7.92-9.9Zm223.76-43.57a6,6,0,0,1,2,4l2,4V240H362.38q3.95-15.83,15.84-15.84h4a5.6,5.6,0,0,0,4,2ZM574.26,269.7c0-9.22,6.6-13.86,19.8-13.86H600q0,11.88-5.94,17.82-4,5.95-11.88,5.94c-5.29,0-7.92-3.27-7.92-9.9Zm152.48-43.57c9.21,0,13.86,5.94,13.87,17.82q0,15.87-5.94,23.76c-4,5.29-8.61,7.92-13.86,7.92q-11.89,0-11.88-17.82c0-10.55,1.29-17.82,4-21.78q5.95-9.89,13.86-9.9Z"></path></svg><svg className="sprd-basket__payment__icon" viewBox="0 0 800 440" fill="currentColor"><path d="M0,440H800V360.62c-10.08,4.86-21.88,5.9-33,5.9H708.66v-8.33c-8,6.25-20.48,8.33-30.55,8.33H494.43V336.32c0-3.82-.7-4.17-4.17-4.17h-2.78v34.38H427.07V331.11c-10.07,4.17-20.83,4.51-31.25,4.51h-7.29v30.91H315.27L297.22,346l-19.1,20.49H159V235.27H280.22l17.36,20.13,18.74-20.13h81.25c9.37,0,24.31.7,31.59,7.64v-7.64h72.57c9.72,0,21.88,1.74,30.2,7.64v-7.64H641.66v7.64c6.6-6.26,18.41-7.64,27.09-7.64h61.46v7.64c8-5.91,18.4-7.64,28.12-7.64H800V0H0V135.62L27.09,73.47H85.76L93.4,88.75V73.47h68.75l14.93,33.68L192,73.47H410.07c9,0,18.4,1.39,25.34,7.64V73.47h59.73v7.64c11.46-6.25,25-7.64,37.85-7.64h86.46l8,15.28V73.47h64.24l8.68,15.28V73.47h62.48V204.72H699.63l-11.8-20.13v20.13H609l-8.68-21.18H580.88l-8.68,21.18c-23.61,0-54.51,3.82-77.08-8v8H398.25V174.86c0-2.43-.34-4.87-3.47-4.87l-3.48.35v34.37H203.46V188.41l-7,16.32H157.28l-6.6-16v16H75l-8.68-21.18H47.21l-8.68,21.18H0V440ZM242.71,186V91.87h-37.5l-26.73,63.89L149,91.87H112.15v89.24L74,91.87H40.63L.35,186H24.66l8.68-20.84H80.22L88.9,186h45.84V112.36L167.37,186h19.79l32.64-73.61V186h22.91ZM72.23,145.69H41.33L56.6,108.2l15.63,37.5ZM368.75,316.53c25.69,0,67,6.25,67-31.59,0-23.61-16.67-30.91-37.85-30.91H326l-28.48,30.91L269.79,254H179.52v94.1h88.89l28.82-31.25L325,348.13h43.75v-31.6ZM282.64,300.9,257,328.33H201.74V309.58H251v-19.1H201.74v-17h56.59l24.31,27.43Zm52.09-134.37H281.94V147.78h51.39v-19.1H281.94v-17h52.78V91.87H259.38V186h75.34ZM311.8,301.25l34.38-37.15v75.34ZM424.65,142.57c10.08-4.17,16-14.58,16-25.34,0-22.23-19.09-25-37.14-25l-53.13-.35V186h22.22v-34h24.31c25,0,19.78,13.9,20.13,34h22.57V167.57c0-12.5-2.09-20.49-14.93-25Zm-26.73,130.9c7.65,0,13.89,3.12,13.89,11.46,0,8.69-6.24,12.5-14.23,12.5H368.75v-24h29.16ZM401,111.66c7,0,14.59,1.39,14.59,10.08,0,9-7.3,10.76-14.93,10.76H372.57V111.66H401ZM520.83,304.37c10.42-4.16,16-14.58,16-25,0-22.22-19.1-25.35-36.81-25.35H446.53v94.1H469.1V313.74h24c14.92,0,20.13,2.77,20.13,18.75v15.63h22.57V329.37c0-12.15-2.43-20.49-14.93-25ZM476.38,91.87H453.47V186h22.91Zm21.19,181.59c6.94,0,14.57,1.39,14.57,10.07,0,9.38-7.29,11.11-14.92,11.11H469.1V273.47h28.48ZM742.71,186V92.22H719.79V157.5L680.21,92.22H645.84v88.9L608,92.23H574.3l-31.94,74H532.29c-18.06,0-21.88-11.11-21.88-27.09,0-32.29,21.52-27.09,45.13-26.73V91.87H533.67c-31.94,0-46.18,16.32-46.18,47.92,0,30.2,13.9,46.18,44.8,46.18h26L567,165.13h46.53l9,20.84H668.4V115.48L710.76,186h31.94ZM624.3,328.69l-52.43-.34V309.59h51.39v-19.1H571.87v-17H624.3V254h-75v94.1h75Zm-18.4-183H575l15.63-37.5,15.28,37.5Zm75.7,202.43c20.13,0,35.42-7.65,35.41-29.86,0-45.13-58.33-15.28-58.33-35.76,0-7.63,6.6-8.68,12.5-8.68H712.5V254H667.36c-17.36,0-31.94,9-31.94,28.12,0,44.79,58,17,58,37.15,0,7.29-6.25,8.68-11.8,8.68H637.84v20.13H681.6ZM800,336V300.9c-14.23-18.74-53.47-1.73-53.47-18.4,0-7.63,6.26-8.68,12.5-8.68h41V254H755.21c-17.36,0-32.3,9-32.3,28.12,0,44.79,58,17.36,58,37.15,0,6.94-5.9,8.68-11.46,8.68H726v20.13h43.41c11.11,0,24-2.43,30.55-12.15Z"></path></svg></div>
              </div>
            </Grid>
          </Grid>
        </Grid >
        <div style={{ height: 80 }}></div>
      </Template >
    ) : <NoItem text="Shopping Cart" />
};

export default CartDetail;
