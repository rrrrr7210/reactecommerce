import React, { Component } from "react";
import Slick from "react-slick";

export default class Slider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      autoplaySpeed: 10000,
      arrows: false
    };
    return (
      <div>
        <Slick {...settings} className="slides">
          <div className="slider" id="slider1">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              reprehenderit architecto fuga quisquam.
            </h3>
          </div>
          <div id="slider2" className="slider">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              itaque?
            </h3>
          </div>
          <div id="slider3" className="slider">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
          </div>
          <div id="slider4" className="slider">
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae!
            </h3>
          </div>
          <div id="slider5" className="slider">
            <h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
              itaque dolorum optio mollitia accusamus et quia sint sit atque in?
            </h3>
          </div>
        </Slick>
      </div>
    );
  }
}
