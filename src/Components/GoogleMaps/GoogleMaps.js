// import "./GoogleMaps.scss";

// import React, { useState, useEffect } from "react";
// import { Loader } from "@googlemaps/js-api-loader";

// const apiKey = "AIzaSyBaWkdc7IserLCIeVKExv6TutiRwz0pZww";

// function GoogleMaps() {
//   const [postalCode, setPostalCode] = useState("Toronto");

//   useEffect(() => {
//     const loader = new Loader({
//       apiKey: apiKey,
//       version: "weekly",
//       libraries: ["places"], // Specify libraries here
//     });

//     loader.load().then(() => {
//       const google = window.google;
//       const geocoder = new google.maps.Geocoder();

//       geocoder.geocode({ address: postalCode }, (results, status) => {
//         if (status === "OK") {
//           const options = {
//             center: results[0].geometry.location,
//             zoom: 12,
//           };
//           const map = new google.maps.Map(
//             document.getElementById("map"),
//             options
//           );

//           // Wait for the map to finish loading before using the API
//           google.maps.event.addListenerOnce(map, "tilesloaded", () => {
//             // Do whatever you need to do with the API here
//           });
//         } else {
//           console.log(
//             `Geocode was not successful for the following reason: ${status}`
//           );
//         }
//       });
//     });
//   }, [postalCode]);

//   return (
//     <div>
//       {/* <div>
//         <label htmlFor="postal-code-input">Enter postal code:</label>
//         <input
//           type="text"
//           id="postal-code-input"
//           value={postalCode}
//           onChange={handleInputChange}
//         />
//       </div> */}
//       <div
//         className="googlemap"
//         id="map"
//         style={{ width: "100%", height: "500px" }}
//       ></div>
//     </div>
//   );
// }

// export default GoogleMaps;
