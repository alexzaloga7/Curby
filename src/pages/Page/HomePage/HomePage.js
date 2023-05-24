import "./HomePage.scss";
import "../HomePage/flickity.scss";

import Footer from "../../../Components/Footer/Footer";
import Carousel from "../../../Components/Carousel/Carousel";
import PageHeader from "../../../Components/PageHeader/PageHeader";
import BurgerBar from "../../../Components/BurgerBar/BurgerBar";

function HomePage() {
  return (
    <div className="HomePage">
      <Carousel />
      <Footer />
    </div>
  );
}

export default HomePage;
