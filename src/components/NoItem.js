import React from 'react'
import Template from "./Template";
import { Typography, Grid } from "@material-ui/core";
function NoItem(props) {
    return (
        <>

            <Template>
                <Grid container style={{ height: "100%" }} style={{ padding: 35 }}>
                    <Grid container spacing={8}>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Typography style={{ fontWeight: 500, textAlign: "left", marginBottom: 20, marginTop: 20 }} variant="h4">
                                {props.text}
                            </Typography>
                            <Typography style={{ textAlign: "center", marginBottom: 150, marginTop: 150 }} variant="h4">There are no products in Shopping Cart.</Typography>

                        </Grid>
                    </Grid>
                </Grid >
            </Template >



        </>
    )
}

export default NoItem
