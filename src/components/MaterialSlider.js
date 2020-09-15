import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";
import slide6 from "../assets/slide6.jpg";
import slide7 from "../assets/slide7.jpg";
function MaterialSlider(props) {
    var items = [
        {
            src: slide1
        },
        {
            src: slide2
        },
        {
            src: slide3
        },
        {
            src: slide4
        },
        {
            src: slide5
        },
        {
            src: slide6
        },
        {
            src: slide7
        },
    ]

    return (
        <Carousel>
            {
                // <Item item={items} />

                items.map((item, i) => <Item key={i} item={item} />)

            }
        </Carousel>
    )
}

function Item(props) {

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row"
        }}>
            <img style={{ width: "33%", marginLeft: 3 }} src={props.item.src} />
            <img style={{ width: "33%", marginLeft: 3 }} src={props.item.src} />
            <img style={{ width: "33%", marginLeft: 3 }} src={props.item.src} />
        </div>
    )
}
export default MaterialSlider;
