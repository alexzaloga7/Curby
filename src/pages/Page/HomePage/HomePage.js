// import "./HomePage.scss";

// import PageHeader from "../../../Components/PageHeader/PageHeader";
// import VideoPlayer from "../../../Components/VideoPlayer/VideoPlayer";
// import Main from "../../../Components/Main/Main";
// import Comments from "../../../Components/Comments/Comments";
// import VideoList from "../../../Components/VideoList/VideoList";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// function useVideo(id) {
//   const [videoContent, setVideoContent] = useState(null);

//   useEffect(() => {
//     const fetchVideo = async () => {
//       const { data } = await axios.get(`http://localhost:3001/videos/${id}`);
//       setVideoContent(data);
//     };
//     fetchVideo();
//   }, [id]);

//   return videoContent;
// }

// function useNextVideos(id) {
//   const [nextVideos, setNextVideos] = useState([]);

//   useEffect(() => {
//     const fetchNextVideos = async () => {
//       const { data } = await axios.get(`http://localhost:3001/videos/`);
//       const videoinfo = data.filter((vid) => vid.id !== id);
//       setNextVideos(videoinfo);
//       console.log(videoinfo);
//     };
//     fetchNextVideos();
//   }, [id]);

//   return nextVideos;
// }

// function HomePage() {
//   const params = useParams();
//   const id = params.id || "84e96018-4022-434e-80bf-000ce4cd12b8";
//   const videoContent = useVideo(id);
//   const nextVideos = useNextVideos(id);

//   if (!videoContent || nextVideos.length === 0) {
//     return <div>loading...</div>;
//   }

//   return (
//     <div className="App">
//       <PageHeader />
//       <VideoPlayer videoContent={videoContent} />
//       <div className="Body">
//         <section>
//           <Main videoContent={videoContent} />
//           <Comments videoContent={videoContent} />
//         </section>
//         <aside>
//           <VideoList nextVid={nextVideos} />
//         </aside>
//       </div>
//     </div>
//   );
// }

// export default HomePage;

import "./HomePage.scss";
import "../HomePage/flickity.scss";
import HeroImage from "../../../assets/Images/matt-hanns-schroeter-YJuyTFWPjZU-unsplash (1).jpg";
import PhoneImage from "../../../assets/Icons/Green and White Griddy Big Type General Individuals SDG Instagram Story.svg";
import LocationImage from "../../../assets/Icons/location.svg";
import UploadImage from "../../../assets/Icons/uploadicon.svg";
import FindImage from "../../../assets/Icons/Untitled design (6).svg";
import Footer from "../../../Components/Footer/Footer";

import { Link } from "react-router-dom";

import PageHeader from "../../../Components/PageHeader/PageHeader";

function HomePage() {
  return (
    <div className="App">
      <PageHeader />

      <img className="hero-image" src={HeroImage} alt="Toronto Neighbourhood" />
      <Link to={"/letsgetstarted"}>
        <h1 className="hero-header">Start your impact</h1>
      </Link>

      <div className="hero-works">
        <img className="hero-icon" src={PhoneImage} alt="Phone" />
        <div className="hero-text__container">
          <p className="hero-text">
            Take a quick snap of items you find on the curb.
          </p>
        </div>
      </div>
      <div className="hero-works">
        <img className="hero-icon" src={LocationImage} alt="Location" />
        <div className="hero-text__container">
          <p className="hero-text">
            Enable your location or enter approximate location.
          </p>
        </div>
      </div>
      <div className="hero-works">
        <img className="hero-icon" src={UploadImage} alt="Upload" />
        <div className="hero-text__container">
          <p className="hero-text">Upload to share with your local community</p>
        </div>
      </div>
      <div className="hero-works">
        <img className="hero-icon" src={FindImage} alt="Find" />
        <div className="hero-text__container">
          <p className="hero-text">
            Have a browse in our listings gallery and see what others are
            sharing!
          </p>
        </div>
      </div>
      {/* <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
      <link
        rel="stylesheet"
        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
      ></link>

      <div
        class="main-carousel"
        data-flickity='{ "autoplay":true,"pageDots":false }'
      >
        <div class="carousel-cell">...</div>
        <div class="carousel-cell">...</div>
        <div class="carousel-cell">...</div>
        ...
      </div> */}
      <Footer />
    </div>
  );
}

export default HomePage;
