import React from 'react'
import Template from "../components/Template";
import { Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

function PaymentError() {
    return (
        <Template>
            <Grid container style={{ height: "100%" }} style={{ padding: 35 }}>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className="order-confirm-top-description">
                        <Typography style={{ marginTop: 100, marginBottom: 20, fontWeight: 500 }} variant="h4">
                            There is a issue in Paypal Payment !!!   Checkout Again
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
            <div style={{ height: 80 }}></div>
        </Template>

    );
}

export default PaymentError