import React, {useEffect} from 'react'
import Template from "../components/Template";
import { Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import authSlice, {placeOrder} from "../store/auth";
import productSlice from "../store/product";

function OrderConfirmed() {
    const {checkout , orderDetail} = useSelector(state => state.products);
    const { error, user  , apiResponse} = useSelector((state) => state.auth);

    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let todayDate = new Date();
    let dd = String(todayDate.getDate()).padStart(2, '0');
    let mm = monthNames[todayDate.getMonth()];
    let yyyy = todayDate.getFullYear();
    todayDate = mm + ' ' + dd + ', ' + yyyy;
    const cart = useSelector(state => state.auth.cart);
    const totalPrice = cart.reduce(function (prev, cur) {
        return prev + cur.total;
    }, 0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authSlice.actions.resetCart());
        return () => {
            dispatch(productSlice.actions.resetCheckout());
        }
    },[])

    return (
        <Template>
            <Grid container style={{ height: "100%" }} style={{ padding: 35 }}>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className="order-confirm-top-description">
                        <Typography style={{ color: "#448AFF", marginBottom: 20, fontWeight: 500 }} variant="h4">
                            🎉 Thanks for Your Order Placement 🎉
                        </Typography>
                        <Typography className="order-confirm-bottom-description" variant="h6">
                            Your Order has been confirmed. We are processing your Order. Here are the Order Details
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container style={{ marginBottom: 20 }} >
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="order-confirm-top">
                        <Typography style={{ color: "#448AFF" }} className="order-confirm-top-heading" variant="h6">
                            Order Confirmation Email sent to
                        </Typography>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="order-confirm-bottom">
                        <Typography className="order-confirm-bottom-para" variant="h6">
                            {checkout?.userdata?.email}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container style={{ marginBottom: 20 }} >
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="order-confirm-top">
                        <Typography style={{ color: "#448AFF" }} className="order-confirm-top-heading" variant="h6">
                            Customer Name
                        </Typography>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="order-confirm-bottom">
                        <Typography className="order-confirm-bottom-para" variant="h6">
                            {`${checkout?.userdata.firstName} ${checkout?.userdata.lastName}`}
                        </Typography>
                    </Grid>
                </Grid>
                {/* <Grid container style={{ marginBottom: 20 }} >
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="order-confirm-top">
                        <Typography className="order-confirm-top-heading" variant="h6">
                            Order Number
                        </Typography>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="order-confirm-bottom">
                        <Typography className="order-confirm-bottom-para" variant="h6">
                            GC-1339
                        </Typography>
                    </Grid>
                </Grid> */}
                <Grid container style={{ marginBottom: 20 }} >
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="order-confirm-top">
                        <Typography style={{ color: "#448AFF" }} className="order-confirm-top-heading" variant="h6">
                            Order Date
                        </Typography>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="order-confirm-bottom">
                        <Typography className="order-confirm-bottom-para" variant="h6">
                            {todayDate}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container style={{ marginBottom: 20 }} >
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="order-confirm-top">
                        <Typography style={{ color: "#448AFF" }} className="order-confirm-top-heading" variant="h6">
                            Billing Address
                        </Typography>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="order-confirm-bottom">
                        <Typography className="order-confirm-bottom-para" variant="h6">
                            {checkout?.userdata.streetAddress}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container style={{ marginBottom: 20 }} >
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="order-confirm-top">
                        <Typography style={{ color: "#448AFF" }} className="order-confirm-top-heading" variant="h6">
                            Summary
                        </Typography>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="order-confirm-bottom">
                        {/* No 1*/}
                        <Grid container style={{ marginBottom: 20 }} >
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6} className="order-double-confirm-top">
                                <Typography className="order-confirm-top-heading" variant="h6">
                                    Total
                                </Typography>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6} className="order-double-confirm-bottom">
                                <Typography className="order-confirm-bottom-para" variant="h6">
                                    {totalPrice} $
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* No 2*/}
                        <Grid container style={{ marginBottom: 20 }} >
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6} className="order-double-confirm-top">
                                <Typography className="order-confirm-top-heading" variant="h6">
                                    Shipping Cost
                                </Typography>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6} className="order-double-confirm-bottom">
                                <Typography className="order-confirm-bottom-para" variant="h6">
                                    $ {checkout?.orderdata?.shippingPrice}
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* No 3*/}
                        <Grid container style={{ marginBottom: 20 }} >
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6} className="order-double-confirm-top">
                                <Typography className="order-confirm-top-heading" variant="h6">
                                    SubTotal
                                </Typography>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6} className="order-double-confirm-bottom">
                                <Typography className="order-confirm-bottom-para" variant="h6">
                                    $ {checkout?.orderdata?.subtotal}
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>
            <div style={{ height: 80 }}></div>
        </Template>

    );
}

export default OrderConfirmed