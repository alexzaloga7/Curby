import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";

import "./Carousel.scss";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import Image1 from "../../assets/Images/camille-villanueva-5IJ9UaT6tLk-unsplash.jpg";
import Image2 from "../../assets/Images/claudio-schwarz-TSgpeJ3yu8g-unsplash.jpg";
import Image3 from "../../assets/Images/egor-vikhrev-TJ0KagkqA2Y-unsplash.jpg";
import LandfillImage from "../../assets/Images/collab-media-GmqezLxud8g-unsplash.jpg";
import NeighbourhoodImage from "../../assets/Images/paul-hanaoka-5Za2sS955yg-unsplash.jpg";
import chairs from "../../assets/Images/chairs.jpg";
import street from "../../assets/Images/tyler-gooding-L1dYYpcdP50-unsplash.jpg";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.carouselRef = createRef();
  }

  componentDidMount() {
    this.flkty = new Flickity(this.carouselRef.current, {
      freeScroll: true,
      wrapAround: true,

      // Flickity options here
    });
    this.flkty.resize();
  }

  componentWillUnmount() {
    this.flkty.destroy();
  }

  render() {
    return (
      <div className="carousel" ref={this.carouselRef}>
        <div className="carousel-cell">
          <img
            className="carousel-image"
            src={NeighbourhoodImage}
            alt="slide1"
          />
          <h2 className="homepage-copy">
            <span>Welcome</span> <span>to</span> <span>Curby -</span>
            <span>the</span> <span>app</span> <span>that</span>
            <span>helps</span> <span>you</span> <span>discover</span>
            <span>free</span> <span>treasures</span> <span>in</span>
            <span>your</span> <span>neighborhood!</span>
          </h2>
        </div>
        <div className="carousel-cell">
          <img className="carousel-image" src={LandfillImage} alt="slide2" />
          <h2 className="homepage-copy">
            <span>Did</span> <span>you</span> <span>know</span>
            <span>that</span> <span>many</span> <span>everyday</span>
            <span>items</span> <span>get</span> <span>thrown</span>
            <span>away</span> <span>every</span> <span>day,</span>
            <span>even</span> <span>though</span> <span>they're</span>
            <span>still</span> <span>in</span> <span>great</span>
            <span>condition?</span>
            <span>That's</span> <span>where</span> <span>Curby</span>
            <span>comes</span> <span>in.</span> <span>Our</span>
            <span>app</span> <span>lets</span> <span>users</span>
            <span>share</span> <span>details</span> <span>of</span>
            <span>free</span> <span>items</span> <span>they</span>
            <span>spot</span> <span>on</span> <span>the</span> <span>curb</span>
            <span>or</span> <span>stoop</span> <span>in</span>
            <span>their</span> <span>neighborhood,</span>
            <span>so</span>
            <span>that</span> <span>others</span> <span>can</span>
            <span>give</span> <span>them</span> <span>a</span> <span>new</span>
            <span>lease</span> <span>of</span> <span>life.</span>
          </h2>
        </div>
        <div className="carousel-cell">
          <img className="carousel-image" src={chairs} alt="slide3" />
          <h2 className="homepage-copy">
            <span>Curby</span> <span>is</span> <span>all</span>
            <span>about</span> <span>promoting</span>
            <span>sustainability</span> <span>and</span> <span>helping</span>
            <span>people</span> <span>connect</span> <span>with</span>
            <span>their</span> <span>community.</span>
            <span>Our</span>
            <span>platform</span> <span>lets</span> <span>you</span>
            <span>review</span> <span>nearby</span> <span>listings</span>
            <span>of</span> <span>free</span> <span>items,</span>
            <span>and</span> <span>even</span> <span>upload</span>
            <span>your</span> <span>own</span> <span>items</span>
            <span>that</span> <span>you</span> <span>want</span> <span>to</span>
            <span>give</span> <span>away</span> <span>instead</span>
            <span>of</span> <span>throwing</span> <span>away.</span>
            <span>With</span> <span>Curby,</span>
            <span>you'll</span>
            <span>never</span> <span>miss</span> <span>a</span>
            <span>chance</span> <span>to</span> <span>find</span> <span>a</span>
            <span>treasure</span> <span>in</span> <span>your</span>
            <span>neighborhood,</span> <span>and</span> <span>you'll</span>
            <span>be</span> <span>doing</span> <span>your</span>
            <span>part</span> <span>to</span> <span>reduce</span>
            <span>waste</span> <span>and</span> <span>support</span>
            <span>your</span> <span>community.</span>
          </h2>
        </div>
        <div className="carousel-cell">
          <img className="carousel-image" src={street} alt="slide3" />
          <h2 className="homepage-copy">
            <span>Join</span> <span>the</span> <span>Curby</span>
            <span>community</span> <span>today</span> <span>and</span>
            <span>start</span> <span>discovering</span> <span>all</span>
            <span>the</span> <span>amazing</span> <span>things</span>
            <span>that</span> <span>your</span> <span>neighborhood</span>
            <span>has</span> <span>to</span> <span>offer!</span>
            <Link to={"/getstarted"}>
              <h2 className="header-button">Get Started</h2>
            </Link>
          </h2>
        </div>
      </div>
    );
  }
}

export default Carousel;
