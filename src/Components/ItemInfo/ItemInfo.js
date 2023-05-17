import React, { useEffect, useState } from "react";
import "./ItemInfo.scss";
import DescriptionIcon from "../../assets/Icons/description.svg";
import LocationPinIcon from "../../assets/Icons/locationred.svg";
import ClockIcon from "../../assets/Icons/clock.svg";
const { REACT_APP_GOOGLEMAPAPI } = process.env;
console.log(REACT_APP_GOOGLEMAPAPI);

function ItemInfo(props) {
  const [mapUrl, setMapUrl] = useState("");
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    // Get the location coordinates from Google Maps API
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode(
      { address: props.itemContent.location },
      (results, status) => {
        if (status === "OK") {
          const lat = results[0].geometry.location.lat();
          const lng = results[0].geometry.location.lng();

          // Set the map URL with the location coordinates
          setMapUrl(
            `https://www.google.com/maps/embed/v1/place?q=${lat},${lng}&key=${REACT_APP_GOOGLEMAPAPI}`
          );
        }
      }
    );

    // Calculate time since upload, if under an hour count minutes
    const now = new Date().getTime();
    const timestamp = new Date(props.itemContent.timestamp).getTime();
    const difference = now - timestamp;

    if (difference < 60 * 60 * 1000) {
      const minutesAgo = Math.floor(difference / (60 * 1000));
      setTimeAgo(`${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`);
    } else {
      const hoursAgo = Math.floor(difference / (60 * 60 * 1000));
      setTimeAgo(`${hoursAgo} hour${hoursAgo !== 1 ? "s" : ""} ago`);
    }
  }, [props.itemContent.location, props.itemContent.timestamp]);

  return (
    <main className="item-info">
      <div className="item-info__tablet">
        <h2 className="item-info__header">{props.itemContent.title}</h2>
        <div className="single-item">
          <img
            className="single-item__image"
            src={props.itemContent.image}
            alt="item details"
          ></img>
        </div>

        <div className="item-info__container">
          <div className="item-info__iconcontainer">
            <img
              className="item-info__icon"
              src={DescriptionIcon}
              alt="description icon"
            ></img>
            <img
              className="item-info__icon"
              src={ClockIcon}
              alt="description icon"
            ></img>
            <img
              className="item-info__icon"
              src={LocationPinIcon}
              alt="description icon"
            ></img>
          </div>

          <div className="item-info__iconcontainer">
            <h2 className="item-info__description">
              {props.itemContent.description}
            </h2>
            <h2 className="item-info__item">{timeAgo}</h2>
            <p className="item-info__location">{props.itemContent.location}</p>
          </div>
        </div>
      </div>

      <div className="item-info__containermap">
        {mapUrl && (
          <iframe
            title="Map Preview"
            className="item-info__map"
            src={mapUrl}
            allowFullScreen
          />
        )}
      </div>
    </main>
  );
}

export default ItemInfo;
