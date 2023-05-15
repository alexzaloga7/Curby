import "./PageHeader.scss";
import { Link } from "react-router-dom";
import BurgerBar from "../../Components/BurgerBar/BurgerBar";
import Logo from "../../assets/Logo/Logo.png";

function PageHeader() {
  return (
    <header className="header">
      <div className="header-container">
        <BurgerBar />
        <div className="header-logo__container">
          <Link to={"/"}>
            <img
              src={Logo}
              alt="Curby Header Logo"
              className="header-logo__image"
            />
          </Link>
        </div>
      </div>
      <div className="header-copy__container">
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
