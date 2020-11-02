import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import EventListView from "./EventListView";
import macbook from "../assets/macbook.png";
import jacket from "../assets/jacket.png";
import jeans from "../assets/jeans.png";


const events = [
    {
        id: 1,
        title: 'Macbook Pro',
        price: 18,
        description: '14 inch macbook pro for latest and greatest use by smart people of America',
        image: macbook,
    },
    {
        id: 2,
        title: 'Mens Jacket',
        price: 150,
        description: 'Awesome leather jacket for men to wear in summer or winter whatever',
        image: jacket,
    },
    {
        id: 3,
        title: 'Leather Jeans',
        price: 350,
        description: 'Beautiful leather jeans for women to wear in summer or winter whatever',
        image: jeans
    }

]

function TrendingProducts({ products }) {
    return (
        <>
            <Grid
                item
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                id="trending"
            >
                <div
                    style={{
                        marginTop: 70,
                        marginBottom: 50,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                    }}
                >
                    <Typography className="pseudo_border" variant="h4">Trending Products</Typography>
                </div>
                <EventListView products={products} />
            </Grid>
        </>
    )
}

export default TrendingProducts

