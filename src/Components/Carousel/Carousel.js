import React, { Component } from "react";
import Image1 from "../../assets/Images/camille-villanueva-5IJ9UaT6tLk-unsplash.jpg";
import Image2 from "../../assets/Images/claudio-schwarz-TSgpeJ3yu8g-unsplash.jpg";
import Image3 from "../../assets/Images/egor-vikhrev-TJ0KagkqA2Y-unsplash.jpg";
import Image4 from "../../assets/Images/joshua-coleman-eC1wzAytkCQ-unsplash.jpg";
import Slider from "../../Components/Slider/Slider";

const images = [Image1, Image2, Image3, Image4];

export default function Carousel() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }} />
      <Slider
        options={{
          autoPlay: 4000,
          pauseAutoPlayOnHover: true,
          wrapAround: true,
          fullscreen: true,
          adaptiveHeight: true,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{ width: "80%", height: "400px", margin: "0 0.5em" }}
          >
            <img src={image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
