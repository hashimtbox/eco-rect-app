import React, {useEffect, useState} from "react";
import Template from "./Template";
import { Grid, Typography, Divider, Button, Radio } from "@material-ui/core";
import MaterialSlider from "./MaterialSlider";
import SizeChart from '../assets/size_chart.png'
import {useParams} from "react-router";

const ProductDetailPage = () => {
    const {productId} = useParams()
    console.log('productId', productId)
    const [product, setProduct] = useState(undefined)

    useEffect(()=> {
        // todo call API
        // fetch(..).then(res => setProduct(res.product))
    }, [productId])

    return (
    <Template>
        <Grid container spacing={8}>
        <Grid item xs={7} style={{ marginTop: 20, backgroundColor: 'white' }}>
          <MaterialSlider/>
        </Grid>
        <Grid item xs={5} style={{ backgroundColor: "white", marginTop: 20 }}>
          <Typography variant="h4">Enter the Dragon Fruit</Typography>
          <Typography variant="body2">
            Men's Premium Long Sleeve Shirt
          </Typography>
          <Divider style={{ marginTop: 15, marginBottom: 15 }} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Typography variant="h4">$23.99</Typography>
            <Typography variant="body2">Plus Shipping</Typography>
          </div>
          <Button
            fullWidth
            variant="contained"
            size="large"
            color="secondary"
            style={{ marginTop: 20, marginLeft: 15, marginRight: 15 }}
          >
            Add to Cart
          </Button>
            <div style={{marginTop: 20}}>
                <Radio checked style={{
                    color: 'green',
                    '&$checked': {
                        color: 'green',
                    },
                }}/>
                <Radio style={{
                    color: 'red',
                    '&$checked': {
                        color: 'red',
                    },
                }}/>
                <Radio style={{
                    color: 'blue',
                    '&$checked': {
                        color: 'blue',
                    },
                }}/>
                <Radio style={{
                    color: 'black',
                    '&$checked': {
                        color: 'black',
                    },
                }}/>
                <Radio style={{
                    color: 'orange',
                    '&$checked': {
                        color: 'orange',
                    },
                }}/>
            </div>
            <div style={{marginTop: 20}}>
                <Button variant='outlined' style={{marginRight: 5}}>XL</Button>
                <Button variant='outlined' style={{marginRight: 5}}>L</Button>
                <Button variant='outlined' disabled style={{marginRight: 5}}>SM</Button>
                <Button variant='outlined' style={{marginRight: 5}}>MD</Button>
                <Button variant='outlined' disabled style={{marginRight: 5}}>XXL</Button>
                <Button variant='outlined' style={{marginRight: 5}}>XXXL</Button>
            </div>
            <div style={{marginTop: 20}}>
                <Typography variant='body2'>
                    Men's Premium Long Sleeve T-Shirt is in stock. We will print it as soon as you order it.

                    Delivery time: 10/12/20 - 10/19/20 (Standard)
                    Men's Premium Long Sleeve T-Shirt | Fabric Content: 100% cotton (heather gray is 95% cotton/5% viscose. charcoal gray is 80% cotton/20% polyester. heather burgundy is 60% cotton/40% polyester)
                </Typography>
            </div>
        </Grid>
      </Grid>
        <Grid container>
            <Grid item xs={6}>
                <div style={{margin: 20}}>
                    <Typography variant='h4'>Product Description</Typography>
                    <Typography variant='h6'>Description</Typography>
                    <Typography variant='body2'>
                        This premium long sleeve t-shirt is as close to perfect as can be. It's optimized for all types of print and will quickly become your favorite layer. Soft, comfortable and durable, this is a definite must-own and a recommended product
                        <ul>
                            <li>Brand: Spreadshirt</li>
                            <li>100% cotton (heather gray is 95%/5% viscose. charcoal gray is 80% cotton/20% polyester. heather burgundy is 60% cotton/40% polyester) | Fabric Weight: 4.42 oz (heavyweight)</li>
                            <li>Wide range of sizes from S-3XL</li>
                            <li>Fairly produced, certified and triple audited.</li>
                            <li>Double stitched, reinforced seams at shoulder, sleeve, collar and waist</li>
                            <li>Optimized for beautiful brilliance across all printing methods</li>
                            <li>Imported; processed and printed in the U.S.A.</li>
                        </ul>
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div style={{margin: 20}}>
                    <Typography variant='h6'>Size Chart</Typography>
                    <img src={SizeChart} />
                </div>
            </Grid>
        </Grid>
        <div style={{height: 80}}></div>
    </Template>
  );
};

export default ProductDetailPage;
