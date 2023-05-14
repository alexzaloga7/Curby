import "./HomePage.scss";
import "../HomePage/flickity.scss";

import Footer from "../../../Components/Footer/Footer";
import BurgerBar from "../../../Components/BurgerBar/BurgerBar";
import Carousel from "../../../Components/Carousel/Carousel";
import LandfillImage from "../../../assets/Images/collab-media-GmqezLxud8g-unsplash.jpg";
import NeighbourhoodImage from "../../../assets/Images/paul-hanaoka-5Za2sS955yg-unsplash.jpg";

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
      {/* <img
        className="hero-image"
        src={GratisImage}
        alt="Toronto Neighbourhood"
      />
      // <img
      //   className="hero-image"
      //   src={ChairImage}
      //   alt="Toronto Neighbourhood"
      // />
      <img className="hero-image" src={LoveImage} alt="Toronto Neighbourhood" /> */}
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
      <Carousel />

      {/* <h2 className="homepage-copy">
        <span>Over</span>
        <span>10 </span>
        <span>million</span>
        <span>tons</span>
        <span>of</span>
        <span>"F-waste"</span>
        <span>or</span>
        <span>furniture</span>
        <span>waste</span>
        <span>ends</span>
        <span>up</span>
        <span>in</span>
        <span>landfills</span>
        <span>every</span>
        <span>year</span>
        <span> across</span>
        <span>Canada</span>
        <span>& USA</span>
      </h2> */}
      {/* <img
        className="hero-image"
        src={LandfillImage}
        alt="Toronto Neighbourhood"
      />
      <img
        className="hero-image"
        src={NeighbourhoodImage}
        alt="Toronto Neighbourhood"
      /> */}
      <Footer />
    </div>
  );
}

export default HomePage;
