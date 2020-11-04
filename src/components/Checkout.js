import React from 'react'
import Template from "../components/Template";
import { Button, Grid, Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { ThemeProvider, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { useDispatch, useSelector } from "react-redux";
import macbook from "../assets/macbook.jpg";
import { countryNames } from "../utils/countries"
import MenuItem from '@material-ui/core/MenuItem';
import Paypal from "../components/Paypal";
import NoItem from "../components/NoItem";
import CheckoutForm from "../components/CheckoutForm";
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        marginLeft: 0
    },
    width50: {
        width: "calc(50% - 8px)",
        [theme.breakpoints.down('md')]: {
            width: "100%"
        },
    },
    width100: {
        width: "calc(100% - 8px)",
        [theme.breakpoints.down('md')]: {
            width: "100%"
        },
    },
}));
const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});
function Checkout() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.auth.cart);
    const totalPrice = cart.reduce(function (prev, cur) {
        return prev + cur.total;
    }, 0);
    const orderDetail = useSelector(state => state.products.orderDetail);


    return cart && cart.length ?
        (
            <Template>
                <Grid container style={{ height: "100%" }} style={{ padding: 35 }}>
                    <Typography style={{ marginBottom: 20, fontWeight: 500 }} variant="h4">Checkout</Typography>
                    <Grid container spacing={4}>
                        <Grid className="grid-order-small" item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <CheckoutForm />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <Typography style={{
                                marginTop: 10, color: "#448aff", paddingLeft: 0,
                                paddingBottom: 10
                            }} variant="h6">Your Order</Typography>
                            <div className="checkout-items checkout-items-border">
                                {cart.map(item => {
                                    return (
                                        <div key={item.id}>
                                            <div style={{ display: "flex", paddingLeft: 20, paddingTop: 20, paddingBottom: 20 }}>
                                                <img src={item.main_image || macbook} alt={macbook} height="100" width="100" />
                                                <div className="sprd-basket-item__info" style={{ marginLeft: 20 }}>
                                                    <div className="sprd-basket-item__info__col">
                                                        <Typography style={{ fontSize: 16, margin: 0 }} variant={"h6"}>
                                                            {item.title}
                                                        </Typography>
                                                        <Typography style={{ fontSize: 16, margin: 0 }} variant={"h6"}>
                                                            Size:   <span style={{ fontWeight: 400 }}>S</span>
                                                        </Typography>
                                                        <Typography style={{ fontSize: 16, margin: 0 }} variant={"h6"}>
                                                            Color:  <span style={{ fontWeight: 400 }}>black</span>
                                                        </Typography>
                                                        <Typography style={{ fontSize: 16, margin: 0 }} variant={"h6"}>
                                                            Quantity:  <span style={{ fontWeight: 400 }}>{item.quantity}{" "}</span>
                                                        </Typography>
                                                    </div>
                                                    <div className="sprd-basket-item__info__col">
                                                        <Typography className="price-checkout" style={{ fontSize: 16 }} variant={"h6"}>
                                                            ${item.quantity * item.price}{" "}
                                                        </Typography>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-bottom-item-cart"></div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="checkout-border">
                                <Typography className="clearfix-categories checkout-total-price" variant={"h5"}>
                                    <span className="checkout-total-price-left" style={{ color: "#448aff", fontSize: 18 }}>Total</span>
                                    <span className="checkout-total-price-right">$ {totalPrice} </span>
                                </Typography>
                                <Typography className="clearfix-categories checkout-total-price" variant={"h5"}>
                                    <span className="checkout-total-price-left" style={{ color: "#448aff", fontSize: 18 }}>Shipping</span>
                                    <span className="checkout-total-price-right">$ {orderDetail?.shippingPrice} </span>
                                </Typography>
                                <Typography className="clearfix-categories checkout-total-price" variant={"h5"}>
                                    <span className="checkout-total-price-left" style={{ color: "#448aff", fontSize: 18 }}>SubTotal</span>
                                    <span className="checkout-total-price-right">$ {orderDetail?.subtotal}</span>
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <div style={{ height: 80 }}></div>
            </Template >
        ) : <NoItem text="Checkout" />
}
export default Checkout