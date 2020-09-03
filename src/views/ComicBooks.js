import React from "react";
import {Typography} from "@material-ui/core";
import Template from "../components/Template";
import EventListView from "../components/EventListView";
import comic from "../assets/comic1.png";
import comic2 from "../assets/comic2.jpg";
import jeans from "../assets/jeans.jpg";

const events = [
    {
        id: 1,
        title: 'Macbook Pro',
        price: 1000,
        description: '14 inch macbook pro for latest and greatest use by smart people of America',
        image: comic,
    },
    {
        id: 2,
        title: 'Logo Bandana',
        price: 150,
        description: 'Awesome leather jacket for men to wear in summer or winter whatever',
        image: comic2,
    },
    {
        id: 2,
        title: 'Leather Jeans',
        price: 350,
        description: 'Beautiful leather jeans for women to wear in summer or winter whatever',
        image: jeans
    },
]

const ComicBooks = () => {
    return (
        <Template>
            <Typography variant="h5">ComicBooks</Typography>
            <div style={{ height: 20 }} />
            <EventListView events={events} />
        </Template>
    )
}

export default ComicBooks