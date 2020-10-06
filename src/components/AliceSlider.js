import React, { Component } from 'react';
import axios from 'axios'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";
import slide6 from "../assets/slide6.jpg";
import slide7 from "../assets/slide7.jpg";


export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      galleryItems: [
        <img src={slide1} alt="" />,
        <img src={slide2} alt="" />,
        <img src={slide3} alt="" />,
        <img src={slide4} alt="" />,
        <img src={slide5} alt="" />,
        <img src={slide6} alt="" />,
        <img src={slide7} alt="" />,

      ]
    };
  }
  // getData() {
  //   axios.get(`https://picsum.photos/v2/list?limit=6`, {})
  //     .then(res => {
  //       const data = res.data
  //       const img = data.map(m =>
  //         <img src={m.download_url} alt="" />
  //       )
  //       this.setState({
  //         galleryItems: img
  //       })
  //     }).catch((error) => {
  //       console.log(error)
  //     })
  // }
  responsive = {
    0: { items: 1 },
    1024: { items: 3 },
  }
  // componentDidMount() {
  //   this.getData()
  // }

  render() {
    return (
      <div >
        <AliceCarousel
          items={this.state.galleryItems}
          responsive={this.responsive}
          autoPlayInterval={2000}
          autoPlayDirection="rtl"
          autoPlay={true}
          fadeOutAnimation={true}
          mouseTrackingEnabled={true}
          disableAutoPlayOnAction={true}

        />
      </div>
    )
  }
}