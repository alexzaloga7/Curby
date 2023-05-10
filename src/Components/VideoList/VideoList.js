import "./VideoList.scss";
import { Link } from "react-router-dom";
import LikesAsset from "../../assets/Icons/likes.svg";
import React, { useState } from "react";
import Heart from "react-animated-heart";

function VideoList({ nextVid }) {
  return (
    <div>
      <h3 className="aside__header">Gallery</h3>

      <aside className="aside">
        {nextVid.map((video) => (
          <Link key={video.id} to={`/${video.id}`} className="aside__link">
            <div key={video.id} className="aside__box">
              <div key={video.id} className="aside__video">
                <img
                  className="aside__video"
                  src={video.image}
                  alt="video preview list"
                ></img>
              </div>
              <div className="aside__text">
                <div className="aside__description">
                  <h2 className="aside__title">{video.title}</h2>
                  <div className="aside__likes">
                    <img
                      className="main__icons"
                      src={LikesAsset}
                      alt="likes emojii"
                    ></img>
                    <p className="aside__creator">{video.likes}</p>

                    <button className="aside__button">Gone</button>
                  </div>
                </div>
                <p className="aside__location">{video.location}</p>
              </div>
            </div>
          </Link>
        ))}
      </aside>
    </div>
  );
}

export default VideoList;

// import "./VideoList.scss";
// import { Link } from "react-router-dom";
// import LikesAsset from "../../assets/Icons/likes.svg";
// import React, { useState } from "react";
// import Heart from "react-animated-heart";
// import { useEffect, useRef } from "react";
// import { Loader } from "@googlemaps/js-api-loader";

// /*global google*/

// function VideoList({ nextVid }) {
//   const [isMapLoaded, setIsMapLoaded] = useState(false);
//   const initMap = (locations) => {
//     const loader = new Loader({
//       apiKey: "AIzaSyBaWkdc7IserLCIeVKExv6TutiRwz0pZww",
//       version: "weekly",
//       libraries: ["places"],
//     });

//     loader.load().then(() => {
//       const map = new window.google.maps.Map(mapRef.current, {
//         center: { lat: 0, lng: 0 },
//         zoom: 2,
//       });

//       // Add a marker for each location
//       locations.forEach((location) => {
//         const marker = new window.google.maps.Marker({
//           position: { lat: location.lat, lng: location.lng },
//           map: map,
//           title: location.title,
//         });
//       });

//       setIsMapLoaded(true);
//     });
//   };
//   const mapRef = useRef(null);

//   useEffect(() => {
//     const locations = nextVid.map((video) => ({
//       lat: video.lat,
//       lng: video.lng,
//       title: video.title,
//     }));

//     const loader = new Loader({
//       apiKey: "<YOUR_API_KEY>",
//       version: "weekly",
//       libraries: ["places"],
//     });

//     loader.load().then(() => {
//       const map = new google.maps.Map(mapRef.current, {
//         center: { lat: 0, lng: 0 },
//         zoom: 2,
//       });

//       // Add a marker for each location
//       locations.forEach((location) => {
//         const marker = new google.maps.Marker({
//           position: { lat: location.lat, lng: location.lng },
//           map: map,
//           title: location.title,
//         });
//       });

//       setIsMapLoaded(true);
//     });
//   }, [nextVid]);
//   return (
//     <div>
//       <h3 className="aside__header">Gallery</h3>
//       {isMapLoaded && <div className="aside__map" ref={mapRef}></div>}

//       <aside className="aside">
//         {nextVid.map((video) => (
//           <Link key={video.id} to={`/${video.id}`} className="aside__link">
//             <div key={video.id} className="aside__box">
//               <div key={video.id} className="aside__video">
//                 <img
//                   className="aside__video"
//                   src={video.image}
//                   alt="video preview list"
//                 ></img>
//               </div>
//               <div className="aside__text">
//                 <div className="aside__description">
//                   <h2 className="aside__title">{video.title}</h2>
//                   <div className="aside__likes">
//                     <img
//                       className="main__icons"
//                       src={LikesAsset}
//                       alt="likes emojii"
//                     ></img>
//                     <p className="aside__creator">{video.likes}</p>

//                     <button className="aside__button">Gone</button>
//                   </div>
//                 </div>
//                 <p className="aside__location">{video.location}</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </aside>
//     </div>
//   );
// }

// export default VideoList;
