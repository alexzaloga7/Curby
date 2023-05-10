import "./HomePage.scss";
import "../HomePage/flickity.scss";
import HeroImage from "../../../assets/Images/matt-hanns-schroeter-YJuyTFWPjZU-unsplash (1).jpg";
import PhoneImage from "../../../assets/Icons/Green and White Griddy Big Type General Individuals SDG Instagram Story.svg";
import LocationImage from "../../../assets/Icons/location.svg";
import UploadImage from "../../../assets/Icons/uploadicon.svg";
import FindImage from "../../../assets/Icons/Untitled design (6).svg";
import Footer from "../../../Components/Footer/Footer";
import DesertImage from "../../../assets/Images/camille-villanueva-5IJ9UaT6tLk-unsplash.jpg";
import GratisImage from "../../../assets/Images/claudio-schwarz-TSgpeJ3yu8g-unsplash.jpg";
import ChairImage from "../../../assets/Images/weiye-tan-KJnY-3EuT3c-unsplash.jpg";
import LoveImage from "../../../assets/Images/joshua-coleman-eC1wzAytkCQ-unsplash.jpg";
import BurgerBar from "../../../Components/BurgerBar/BurgerBar";
import { Link } from "react-router-dom";

import PageHeader from "../../../Components/PageHeader/PageHeader";

function HomePage() {
  return (
    <div className="App">
      <PageHeader />

      {/* <img className="hero-image" src={HeroImage} alt="Toronto Neighbourhood" /> */}
      {/* <Link to={"/letsgetstarted"}>
        <h1 className="hero-header">Start your impact</h1>
      </Link> */}
      <BurgerBar />
      <img
        className="hero-image"
        src={GratisImage}
        alt="Toronto Neighbourhood"
      />
      <img
        className="hero-image"
        src={ChairImage}
        alt="Toronto Neighbourhood"
      />
      <img className="hero-image" src={LoveImage} alt="Toronto Neighbourhood" />
      {/* <div className="hero-works">
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
      </div> */}
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
