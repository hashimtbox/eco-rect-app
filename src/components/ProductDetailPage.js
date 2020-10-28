import React, { useEffect, useState } from "react";
import Template from "./Template";
import { Grid, Typography, Divider, Button, Radio } from "@material-ui/core";
import MaterialSlider from "./MaterialSlider";
import SizeChart from '../assets/size_chart.png'
import { useParams } from "react-router";
import authSlice from "../store/auth";
import {fetchProductById, fetchProductsByFilter} from "../store/product";
import {useDispatch, useSelector} from "react-redux";

const ProductDetailPage = () => {
    const { productId } = useParams()
    const dispatch = useDispatch();
    const { productDetail  } = useSelector(state => state.products);
    useEffect(() => {
        // todo call API
        dispatch(fetchProductById(productId));
    }, [productId])

    return (
        <Template>
            <Grid container style={{ height: "100%" }} style={{ padding: 35 }}>
                <Grid container spacing={4}>
                    <Grid item xl={7} lg={7} md={12} sm={12} xs={12} style={{ marginTop: 20, backgroundColor: 'white' }}>
                        <MaterialSlider />
                    </Grid>
                    <Grid item xl={5} lg={5} md={12} sm={12} xs={12} style={{ backgroundColor: "white", marginTop: 20 }}>
                        <Typography variant="h4">{productDetail?.title}</Typography>
                        <Typography variant="body2">Men's Premium Long Sleeve Shirt</Typography>
                        <Divider style={{ marginTop: 15, marginBottom: 15 }} />
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                            <Typography variant="h4">${productDetail?.price}</Typography>
                            <Typography variant="body2">Plus Shipping</Typography>
                        </div>
                        <Button fullWidth variant="contained" size="large" color="secondary" style={{ marginTop: 20 }} onClick={() => dispatch(authSlice.actions.addToCart(productDetail))} >Add to Cart</Button>
                        <div style={{ marginTop: 20 }}>
                            <Radio style={{ color: 'green', '&$checked': { color: 'green' } }} />
                            <Radio style={{ color: 'red', '&$checked': { color: 'red' } }} />
                            <Radio style={{ color: 'blue', '&$checked': { color: 'blue' } }} />
                            <Radio style={{ color: 'black', '&$checked': { color: 'black' } }} />

                        </div>
                        <div style={{ marginTop: 20 }}>
                            <Button variant='outlined' style={{ marginRight: 5 }}>XL</Button>
                            <Button variant='outlined' style={{ marginRight: 5 }}>L</Button>
                            <Button variant='outlined' disabled style={{ marginRight: 5 }}>SM</Button>
                            <Button variant='outlined' style={{ marginRight: 5 }}>MD</Button>
                            <Button variant='outlined' disabled style={{ marginRight: 5 }}>XXL</Button>
                            <Button variant='outlined' style={{ marginRight: 5 }}>XXXL</Button>
                        </div>
                        <div>
                            <Typography variant='body2' style={{ marginTop: 30 }}>
                                Men's Premium Long Sleeve T-Shirt is in stock. We will print it as soon as you order it.
                                Delivery time: 10/12/20 - 10/19/20 (Standard)
                                Men's Premium Long Sleeve T-Shirt | Fabric Content: 100% cotton (heather gray is 95% cotton/5% viscose. charcoal gray is 80% cotton/20% polyester. heather burgundy is 60% cotton/40% polyester)
                        </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container style={{ height: "100%" }} style={{ padding: 35 }}>
                <Grid container spacing={4}>
                    <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div>
                            <Typography variant='h4'>Product Description</Typography>
                            <Typography variant='h6'>Description</Typography>
                            <Typography variant='body2'>
                                {productDetail?.description}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div>
                            <Typography variant='h6'>Size Chart</Typography>
                            <img src={productDetail?.sizeChart} style={{ width: "100%", height: "auto" }} />
                        </div>
                    </Grid>
                </Grid>
            </Grid >
            <div style={{ height: 80 }}></div>
        </Template >
    );
};

export default ProductDetailPage;
