import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import "./Carousel.scss";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import CurbyBackgroundImage from "../../assets/Images/matt-hanns-schroeter-YJuyTFWPjZU-unsplash (1).jpg";
import street from "../../assets/Images/tyler-gooding-L1dYYpcdP50-unsplash.jpg";
import Logo from "../../assets/Logo/Logo.png";
import BurgerBar from "../../Components/BurgerBar/BurgerBar";
import Garbage from "../../assets/Images/jilbert-ebrahimi-b0p818k8Ok8-unsplash.jpg";
import Join from "../../assets/Images/egor-myznik-tSAs_VU_6Ds-unsplash.jpg";

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
            src={CurbyBackgroundImage}
            alt="slide1"
          />

          <h2 className="homepage-copy">
            <BurgerBar />
            <div className="logo-container">
              <Link to={"/"}>
                <img src={Logo} alt="Curby Header Logo" className="logos" />
              </Link>
            </div>
            <div className="header-copy__container">
              <p className="header-copy">
                Discover, share, and promote sustainability with Curby - your
                neighbourhood's treasure map.
              </p>

              <h2 className="header-subheader">Start your impact</h2>
              <Link to={"/getstarted"}>
                <h2 className="header-button">Get Started</h2>
              </Link>
            </div>
          </h2>
        </div>

        <div className="carousel-cell">
          <img className="carousel-image" src={street} alt="slide2" />

          <h2 className="homepage-copy__one">
            <span>
              Welcome to Curby - the app that helps you discover free treasures
              in your neighbourhood! Did you know that many items get thrown
              away even though they’re still in great condition? That's where
              Curby comes in. Our app lets the community share items spotted on
              the curb, so that others can give them a new lease of life!
            </span>
          </h2>
        </div>
        <div className="carousel-cell">
          <img className="carousel-image" src={Garbage} alt="slide3" />
          <h2 className="homepage-copy__two">
            <span>
              Millions of durable items end up in landfill each year. To address
              this growing issue we are giving these items one last chance of a
              new home. With increasing costs of living, Curby offers an
              affordable solution to furnish homes and promote sustainable
              actions within the local community.
            </span>
          </h2>
        </div>

        <div className="carousel-cell">
          <img className="carousel-image" src={Join} alt="slide5" />
          <h2 className="homepage-copy__two">
            <span>
              Join Curby today and start discovering all the amazing things that
              your neighbourhood has to offer!
            </span>

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
