import "./HomePage.scss";
import "../HomePage/flickity.scss";

import Footer from "../../../Components/Footer/Footer";
import Carousel from "../../../Components/Carousel/Carousel";

function HomePage() {
  return (
    <div className="HomePage">
      <Carousel />
      <Footer />
    </div>
  );
}

export default HomePage;
