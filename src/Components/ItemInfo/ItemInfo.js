import React, { useEffect, useState } from "react";
import "./ItemInfo.scss";
import ViewsAsset from "../../assets/Icons/views.svg";
import LikesAsset from "../../assets/Icons/likes.svg";
import DescriptionIcon from "../../assets/Icons/description.svg";
import LocationredIcon from "../../assets/Icons/locationred.svg";
import Time2Icon from "../../assets/Icons/time2.svg";

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
      <div className="tablet-container">
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
              src={Time2Icon}
              alt="description icon"
            ></img>
            <img
              className="item-info__icon"
              src={LocationredIcon}
              alt="description icon"
            ></img>
          </div>

          <div className="item-info__iconcontainer">
            <h2 className="item-info__description">
              {props.itemContent.description}
            </h2>

            <h2 className="item-info__item">
              {new Date(props.itemContent.timestamp).toLocaleDateString(
                "en-US",
                {
                  month: "2-digit",
                  day: "2-digit",
                  year: "numeric",
                }
              )}
            </h2>

            <p className="item-info__item--author">
              {props.itemContent.location}
            </p>
          </div>
        </div>
      </div>

      <div className="item-info__container--map">
        {/* <p className="item-info__item--author">
            By {props.itemContent.channel}
          </p> */}

        {mapUrl && (
          <iframe
            title="Map Preview"
            className="item-info__map"
            src={mapUrl}
            allowFullScreen
          />
        )}
      </div>
      {/* <div className="item-info__container--right">
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
        </div> */}
    </main>
  );
}

export default ItemInfo;
