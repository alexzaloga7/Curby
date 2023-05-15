import "./HomePage.scss";
import "../HomePage/flickity.scss";

import Footer from "../../../Components/Footer/Footer";
import Carousel from "../../../Components/Carousel/Carousel";
import PageHeader from "../../../Components/PageHeader/PageHeader";

function HomePage() {
  return (
    <div className="HomePage">
      <PageHeader />
      <Carousel />
      <Footer />
    </div>
  );
}

export default HomePage;
