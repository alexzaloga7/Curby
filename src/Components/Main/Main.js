// import "./Main.scss";
// import ViewsAsset from "../../assets/Icons/views.svg";
// import LikesAsset from "../../assets/Icons/likes.svg";

// function Main(props) {
//   return (
//     <main className="main">
//       <h1 className="main__header">{props.videoContent.title}</h1>
//       <div className="main__container">
//         <div className="main__container--left">
//           <p className="main__item--author">By {props.videoContent.channel}</p>
//           <p className="main__item">
//             {new Date(props.videoContent.timestamp).toLocaleDateString(
//               "en-US",
//               {
//                 month: "2-digit",
//                 day: "2-digit",
//                 year: "numeric",
//               }
//             )}
//           </p>
//           <p className="main__item--author">{props.videoContent.location}</p>
//         </div>
//         <div className="main__container--right">
//           <p className="main__item">
//             <img
//               className="main__icons"
//               src={ViewsAsset}
//               alt="views emojii"
//             ></img>
//             {props.videoContent.views}
//           </p>
//           <p className="main__item">
//             <img
//               className="main__icons"
//               src={LikesAsset}
//               alt="likes emojii"
//             ></img>
//             {props.videoContent.likes}
//           </p>
//         </div>
//       </div>
//       <p className="main__copy">{props.videoContent.description}</p>
//     </main>
//   );
// }

// export default Main;

import React, { useEffect, useState } from "react";
import "./Main.scss";
import ViewsAsset from "../../assets/Icons/views.svg";
import LikesAsset from "../../assets/Icons/likes.svg";

function Main(props) {
  const [mapUrl, setMapUrl] = useState("");

  useEffect(() => {
    // Get the location coordinates from Google Maps API
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode(
      { address: props.videoContent.location },
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
  }, [props.videoContent.location]);

  return (
    <main className="main">
      <h1 className="main__header">{props.videoContent.title}</h1>
      <div className="main__container">
        <div className="main__container--left">
          <p className="main__item--author">By {props.videoContent.channel}</p>
          <p className="main__item">
            {new Date(props.videoContent.timestamp).toLocaleDateString(
              "en-US",
              {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              }
            )}
          </p>
          {mapUrl && (
            <iframe
              title="Map Preview"
              className="main__map"
              src={mapUrl}
              allowFullScreen
            />
          )}
          <p className="main__item--author">{props.videoContent.location}</p>
        </div>
        <div className="main__container--right">
          <p className="main__item">
            <img
              className="main__icons"
              src={ViewsAsset}
              alt="views emojii"
            ></img>
            {props.videoContent.views}
          </p>
          <p className="main__item">
            <img
              className="main__icons"
              src={LikesAsset}
              alt="likes emojii"
            ></img>
            {props.videoContent.likes}
          </p>
        </div>
      </div>
      <p className="main__copy">{props.videoContent.description}</p>
    </main>
  );
}

export default Main;
