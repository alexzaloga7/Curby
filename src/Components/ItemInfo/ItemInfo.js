import React, { useEffect, useState } from "react";
import "./ItemInfo.scss";
import ViewsAsset from "../../assets/Icons/views.svg";
import LikesAsset from "../../assets/Icons/likes.svg";

function ItemInfo(props) {
  const [mapUrl, setMapUrl] = useState("");

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
            `https://www.google.com/maps/embed/v1/place?q=${lat},${lng}&key=AIzaSyBaWkdc7IserLCIeVKExv6TutiRwz0pZww`
          );
        }
      }
    );
  }, [props.itemContent.location]);

  return (
    <main className="item-info">
      <h1 className="item-info__header">{props.itemContent.title}</h1>
      <div className="item-info__container">
        <div className="item-info__container--left">
          <p className="item-info__item--author">
            By {props.itemContent.channel}
          </p>
          <p className="item-info__item">
            {new Date(props.itemContent.timestamp).toLocaleDateString("en-US", {
              month: "2-digit",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
          {mapUrl && (
            <iframe
              title="Map Preview"
              className="item-info__map"
              src={mapUrl}
              allowFullScreen
            />
          )}
          <p className="item-info__item--author">
            {props.itemContent.location}
          </p>
        </div>
        <div className="item-info__container--right">
          <p className="item-info__item">
            <img
              className="item-info__icons"
              src={ViewsAsset}
              alt="views emojii"
            ></img>
            {props.itemContent.views}
          </p>
          <p className="item-info__item">
            <img
              className="item-info__icons"
              src={LikesAsset}
              alt="likes emojii"
            ></img>
            {props.itemContent.likes}
          </p>
        </div>
      </div>
      <p className="item-info__copy">{props.itemContent.description}</p>
    </main>
  );
}

export default ItemInfo;
