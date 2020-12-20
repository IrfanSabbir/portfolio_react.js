import React, { Component } from "react";
import Slider from "react-slick";



export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <h2>Auto Play</h2>
        <Slider {...settings}>
          <div style={{width:"100px", height:"100px"}}>
            <h3 syle={{color:"black"}}>45435435</h3>
          </div >
          <div style={{width:"100px", height:"100px"}}>
            <h3>34534545</h3>
          </div>
          <div style={{width:"100px", height:"100px"}}>
            <h3>345435435</h3>
          </div>
          <div style={{color:"black"}}>
            <h3>345345435</h3>
          </div>
          <div style={{color:"black"}}>
            <h3>3454354</h3>
          </div>
          <div style={{color:"black"}}>
            <h3>456546546</h3>
          </div>
        </Slider>
      </div>
    );
  }
}