import "./PageHeader.scss";
import { Link } from "react-router-dom";
import RecycleLogo from "../../assets/Logo/recycle2.svg";
import BurgerBar from "../../Components/BurgerBar/BurgerBar";

function PageHeader() {
  return (
    <header className="header">
      <div className="header-container">
        <BurgerBar />

        <Link to={"/"}>
          <h1 className="header-title">Curby</h1>
          <img
            className="header-logo"
            src={RecycleLogo}
            alt="Curby Header Logo"
          />
        </Link>
      </div>
      <div className="hero-copy__container">
        <p className="header-copy">
          Promote circular economy for our planet and community
        </p>

        <h2 className="header-subheader">Start your impact</h2>
        <Link to={"/getstarted"}>
          <h2 className="header-button">Get Started</h2>
        </Link>
      </div>
    </header>
  );
}
export default PageHeader;
