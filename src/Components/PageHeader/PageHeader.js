import "./PageHeader.scss";
import { Link } from "react-router-dom";
import CurbyLogo2 from "../../assets/Logo/curbylogo.svg";
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
            className="logo-image"
            src={RecycleLogo}
            alt="Curby Header Logo"
          />
        </Link>
      </div>
      <div className="hero-headers__container">
        <Link to={"/letsgetstarted"}>
          <h2 className="header-start">Start your impact</h2>
        </Link>
      </div>
    </header>
  );
}
export default PageHeader;
