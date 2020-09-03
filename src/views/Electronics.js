import React from "react";
import {Typography} from "@material-ui/core";
import Template from "../components/Template";
import EventListView from "../components/EventListView";
import macbook from "../assets/macbook.jpg";
import jacket from "../assets/jacket.jpg";
import jeans from "../assets/jeans.jpg";

const events = [
    {
        id: 1,
        title: 'Macbook Pro',
        price: 1000,
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
        id: 2,
        title: 'Leather Jeans',
        price: 350,
        description: 'Beautiful leather jeans for women to wear in summer or winter whatever',
        image: jeans
    },
]

const Electronics = () => {
    return (
        <Template>
            <Typography variant="h5">Electronics</Typography>
            <div style={{ height: 20 }} />
            <EventListView events={events} />
        </Template>
    )
}

export default Electronics