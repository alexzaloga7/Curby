import "./GetStarted.scss";
import NavBar from "../../../Components/NavBar/NavBar";
import PhoneImage from "../../../assets/Icons/Green and White Griddy Big Type General Individuals SDG Instagram Story.svg";
import LocationImage from "../../../assets/Icons/location.svg";
import UploadImage from "../../../assets/Icons/uploadicon.svg";
import FindImage from "../../../assets/Icons/Untitled design (6).svg";
import Footer from "../../../Components/Footer/Footer";

function LetsGetStarted() {
  return (
    <div className="LetsGetStarted">
      <NavBar />
      <section className="hero-container">
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
            <p className="hero-text">
              Upload to share with your local community
            </p>
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
      </section>
      <Footer />
    </div>
  );
}

export default LetsGetStarted;
