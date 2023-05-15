import React, { Component, createRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Items-Carousel.scss";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import LandfillImage from "../../assets/Images/collab-media-GmqezLxud8g-unsplash.jpg";
import NeighbourhoodImage from "../../assets/Images/paul-hanaoka-5Za2sS955yg-unsplash.jpg";
import chairs from "../../assets/Images/chairs.jpg";
import street from "../../assets/Images/tyler-gooding-L1dYYpcdP50-unsplash.jpg";

class ItemsCarousel extends Component {
  constructor(props) {
    super(props);
    this.carouselRef = createRef();
    this.state = {
      likedItems: {},
      claimedItems: {},
      asideBackground: "",
      filteredNextItemC: this.props.nextItem.filter((item) => item.id),
    };
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

  handleLike = (itemId) => {
    const newLikedItems = {
      ...this.state.likedItems,
      [itemId]: !this.state.likedItems[itemId],
    };
    this.setState({ likedItems: newLikedItems });
    localStorage.setItem(itemId, newLikedItems[itemId]);
  };

  handleClaimed = (itemId, event) => {
    event.preventDefault();
    const newClaimedItems = {
      ...this.state.claimedItems,
      [itemId]: !this.state.claimedItems[itemId],
    };
    this.setState({ claimedItems: newClaimedItems });
    localStorage.setItem(`claimed_${itemId}`, newClaimedItems[itemId]);
    this.setState({
      asideBackground: newClaimedItems[itemId] ? "claimed" : "",
    });
  };

  render() {
    const { filteredNextItemC } = this.state;

    return (
      <div className="carousel" ref={this.carouselRef}>
        {filteredNextItemC.map((item) => (
          <div className="carousel-cell">
            <img className="carousel-image" src={item.image} alt="slide1" />
            <h2 className="homepage-copy">{item.title}HELLO!</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default ItemsCarousel;
