import React from "react";
import Carousel from "react-material-ui-carousel";
//import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Paper, Button } from "@material-ui/core";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";
import slide6 from "../assets/slide6.jpg";
import slide7 from "../assets/slide7.jpg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function MaterialSlider({ mainimage, variantimages }) {
  var imagesArrNewB = [
    {
      src: slide1,
    },
    {
      src: slide2,
    },
    {
      src: slide3,
    },
    {
      src: slide4,
    },
    {
      src: slide5,
    },
    {
      src: slide6,
    },
    {
      src: slide7,
    },
  ];

  console.log("we are receving", variantimages);
  const variantimagesArr = variantimages?.map((item) => item.image);
  console.log("variantimagesArr", variantimagesArr);
  let imagesArr = [];
  if (variantimagesArr) {
    imagesArr = [mainimage, ...variantimagesArr];
  }

  let imagesArrNew = [];

  for (var i = 0; i < imagesArr.length; i++) {
    imagesArrNew.push({ src: imagesArr[i] });
  }

  console.log("final image array", imagesArrNew);

  return (
    <Carousel autoPlay={false}>
      {imagesArrNew &&
        imagesArrNew.length &&
        imagesArrNew.map((item, i) => <Item key={i} item={item} />)}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: "70%",
        width: "70%",
        margin: "auto",
      }}
    >
      <img
        style={{
          height: "90%",
          width: "90%",
        }}
        src={props.item.src}
      />
    </div>
  );
}
export default MaterialSlider;
