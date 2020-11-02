import React from 'react'
import Template from "../components/Template";
import { Button, Grid, Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { ThemeProvider, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from "react-redux";
import macbook from "../assets/macbook.jpg";

const useStyles = makeStyles((theme) => ({
    // root: {
    //     display: 'flex',
    //     flexWrap: 'wrap',
    // },
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

const countryNames = [
    { id: 1, value: "United States" },
    { id: 2, value: "United Kingdom" },
    { id: 3, value: "Portugal" },
    { id: 4, value: "France" },
    { id: 5, value: "Italy" },
    { id: 6, value: "Paris" },
    { id: 7, value: "Malaysia" },
];

function Checkout() {
    const classes = useStyles();
    const [country, setCountry] = React.useState('United States');

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const cart = useSelector(state => state.auth.cart);
    const dispatch = useDispatch();
    const totalPrice = cart.reduce(function (prev, cur) {
        return prev + cur.total;
    }, 0);
    const shippingCost = 25;

    return (
        <Template>
            <Grid container style={{ height: "100%" }} style={{ padding: 35 }}>
                <Typography style={{ marginBottom: 20, fontWeight: 500 }} variant="h4">Checkout</Typography>

                <Grid container spacing={4}>
                    <Grid className="grid-order-small" item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <form noValidate>
                            <ThemeProvider theme={theme}>
                                <Typography className="checkout-heading" variant="h6" style={{ color: "#448aff" }}>Shipping Details</Typography>
                                <div>
                                    <TextField
                                        className={`${classes.margin} ${classes.width100}`}
                                        label="Your e-mail address*"
                                        variant="outlined"
                                        id="mui-theme-provider-outlined-input"
                                        size="small"
                                    />
                                </div>
                                <Typography className="checkout-heading" variant="h6" style={{ color: "#448aff" }}>Send my Order to</Typography>

                                <div>
                                    <TextField
                                        className={`${classes.margin} ${classes.width50}`}
                                        label="First Name*"
                                        variant="outlined"
                                        id="mui-theme-provider-outlined-input"
                                        size="small"
                                    />
                                    <TextField
                                        className={`${classes.margin} ${classes.width50}`}
                                        label="Last Name*"
                                        variant="outlined"
                                        id="mui-theme-provider-outlined-input"
                                        size="small"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        className={`${classes.margin} ${classes.width100} ${classes.height60}`}
                                        label="Street Address*"
                                        variant="outlined"
                                        id="street-address"
                                        size="small"

                                    />



                                </div>
                                <div>
                                    <TextField
                                        className={`${classes.margin} ${classes.width100}`}
                                        select
                                        label="Country/Region*"
                                        variant="outlined"
                                        id="mui-theme-provider-outlined-input"
                                        size="small"
                                        value={country}
                                        onChange={handleCountryChange}
                                    >
                                        {countryNames.map((option) => (
                                            <MenuItem key={option.id} value={option.value}>
                                                {option.value}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div>
                                    <TextField
                                        className={`${classes.margin} ${classes.width100}`}
                                        label="City/Town*"
                                        variant="outlined"
                                        id="mui-theme-provider-outlined-input"
                                        size="small"
                                    />
                                </div>
                                <div>

                                    <TextField
                                        className={`${classes.margin} ${classes.width100}`}
                                        label="Zip Code*"
                                        variant="outlined"
                                        id="mui-theme-provider-outlined-input"
                                        size="small"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        className={`${classes.margin} ${classes.width100}`}
                                        label="Phone number*"
                                        variant="outlined"
                                        id="mui-theme-provider-outlined-input"
                                        size="small"
                                    />
                                </div>

                                <Button style={{ background: "#448aff" }} className={`${classes.margin} ${classes.width100}`} variant="contained" color="secondary">
                                    Checkout
                                </Button>
                            </ThemeProvider>
                        </form>
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

                                            <img src={item.image || macbook} alt={macbook} height="100" width="100" />

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
                                                    {/* <DeleteIcon className="delete-icon" /> */}
                                                </div>

                                                {/* <div className="sprd-basket-item__info__col">
                                                    <div className="sprd-quantity-control sprd-bg-m3 sprd-lbc-s2">
                                                        {(item.quantity > 1) ?
                                                            <button className="sprd-quantity-control__button" type="button" onClick={() =>
                                                                dispatch(authSlice.actions.decrementItemQuantity(item.id))}><RemoveIcon /></button>
                                                            :
                                                            <button className="sprd-quantity-control__button" type="button" onClick={() =>
                                                                dispatch(authSlice.actions.removeFromCart(item.id))
                                                            } style={{ fontSize: 0 }}><DeleteIcon style={{ color: "blue" }} /></button>
                                                        }
                                                        <span className="sprd-quantity-control__input">{item.quantity}</span>
                                                        <button className="sprd-quantity-control__button" type="button" onClick={() => dispatch(authSlice.actions.incrementItemQuantity(item.id))}><AddIcon /></button>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="border-bottom-item-cart"></div>
                                    </div>
                                );
                            })}
                        </div>


                        <div className="checkout-border">
                            <Typography className="clearfix-categories checkout-total-price" variant={"h5"}>
                                <span className="checkout-total-price-left" style={{ color: "#448aff", fontSize: 18 }}>Subtotal</span>
                                <span className="checkout-total-price-right">$ {totalPrice} </span>
                            </Typography>
                            <Typography className="clearfix-categories checkout-total-price" variant={"h5"}>
                                <span className="checkout-total-price-left" style={{ color: "#448aff", fontSize: 18 }}>Shipping</span>
                                <span className="checkout-total-price-right">$ {shippingCost} </span>
                            </Typography>
                            <Typography className="clearfix-categories checkout-total-price" variant={"h5"}>
                                <span className="checkout-total-price-left" style={{ color: "#448aff", fontSize: 18 }}>Total</span>
                                <span className="checkout-total-price-right">$ {totalPrice + shippingCost}</span>
                            </Typography>

                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <div style={{ height: 80 }}></div>
        </Template >

    );
}

export default Checkout