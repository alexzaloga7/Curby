// import React from 'react';
// import { Loader } from '@googlemaps/js-api-loader';
// const apiKey = 'AIzaSyCD5l_D7-3nsOJ423295pd5QeCwv_mbh5o'

// class GoogleMaps extends React.Component {
//   async componentDidMount() {
//     const loader = new Loader({
//       apiKey: apiKey,
//       version: 'weekly',
//     });

//     const googleMaps = await loader.load();
//     const postalCode = 'M6P4J4'; // Specify the postal code you want to display
//     const geocoder = new googleMaps.maps.Geocoder();
//     geocoder.geocode({ address: postalCode }, (results, status) => {
//       if (status === 'OK') {
//         const options = {
//           center: results[0].geometry.location, // Use the coordinates of the first result as the center of the map
//           zoom: 12, // Set the zoom level to 12 to show the area around the postal code
//         };
//         const map = new googleMaps.maps.Map(document.getElementById('map'), options);

//         // Add a marker to the map
//         const marker = new googleMaps.maps.Marker({
//           position: results[0].geometry.location,
//           map,
//           title: postalCode,
//         });
//       } else {
//         console.log(`Geocode was not successful for the following reason: ${status}`);
//       }
//     });
//   }

//   render() {
//     return (
//       <div id="map" style={{ width: '100%', height: '500px' }}></div>
//     );
//   }
// }

// export default GoogleMaps;

// working version

// import React from "react";
// import { Loader } from "@googlemaps/js-api-loader";
// const apiKey = "AIzaSyBaWkdc7IserLCIeVKExv6TutiRwz0pZww";

// class GoogleMaps extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       postalCode: props.postalCode || "M6P4J4", // Set a default postal code if one is not passed as a prop
//     };
//   }

//   async componentDidMount() {
//     const loader = new Loader({
//       apiKey: apiKey,
//       version: "weekly",
//     });

//     const googleMaps = await loader.load();
//     const geocoder = new googleMaps.maps.Geocoder();
//     geocoder.geocode({ address: this.state.postalCode }, (results, status) => {
//       if (status === "OK") {
//         const options = {
//           center: results[0].geometry.location, // Use the coordinates of the first result as the center of the map
//           zoom: 12, // Set the zoom level to 12 to show the area around the postal code
//         };
//         const map = new googleMaps.maps.Map(
//           document.getElementById("map"),
//           options
//         );

//         // Add a marker to the map
//         const marker = new googleMaps.maps.Marker({
//           position: results[0].geometry.location,
//           map,
//           title: this.state.postalCode,
//         });
//       } else {
//         console.log(
//           `Geocode was not successful for the following reason: ${status}`
//         );
//       }
//     });
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.postalCode !== this.props.postalCode) {
//       this.setState({ postalCode: this.props.postalCode });
//     }
//   }

//   render() {
//     return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
//   }
// }

// export default GoogleMaps;
import React, { useState, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const apiKey = "AIzaSyBaWkdc7IserLCIeVKExv6TutiRwz0pZww";

function GoogleMaps() {
  const [postalCode, setPostalCode] = useState("Toronto");

  const handleInputChange = (event) => {
    setPostalCode(event.target.value);
  };

  useEffect(() => {
    const loader = new Loader({
      apiKey: apiKey,
      version: "weekly",
      libraries: ["places"], // Specify libraries here
    });

    loader.load().then(() => {
      const google = window.google;
      const geocoder = new google.maps.Geocoder();

      geocoder.geocode({ address: postalCode }, (results, status) => {
        if (status === "OK") {
          const options = {
            center: results[0].geometry.location,
            zoom: 12,
          };
          const map = new google.maps.Map(
            document.getElementById("map"),
            options
          );

          // Wait for the map to finish loading before using the API
          google.maps.event.addListenerOnce(map, "tilesloaded", () => {
            // Do whatever you need to do with the API here
          });
        } else {
          console.log(
            `Geocode was not successful for the following reason: ${status}`
          );
        }
      });
    });
  }, [postalCode]);

  return (
    <div>
      <div>
        <label htmlFor="postal-code-input">Enter postal code:</label>
        <input
          type="text"
          id="postal-code-input"
          value={postalCode}
          onChange={handleInputChange}
        />
      </div>
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
}

export default GoogleMaps;
