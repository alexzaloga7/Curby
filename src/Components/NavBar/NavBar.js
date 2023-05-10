import "./NavBar.scss";
import { Link } from "react-router-dom";
import RecycleLogo from "../../assets/Logo/recycle2.svg";
import BurgerBar from "../../Components/BurgerBar/BurgerBar";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <BurgerBar />
        <div className="navbar-box">
          <Link to={"/"}>
            <h1 className="navbar-title">Curby</h1>
            <img
              className="navbar-image"
              src={RecycleLogo}
              alt="Curby Header Logo"
            />
          </Link>
        </div>
      </div>
      {/* <div className="navbar-headers__container">
        <Link to={"/letsgetstarted"}>
          <h2 className="navbar-start">Start your impact</h2>
        </Link>
      </div> */}
    </nav>
  );
}
export default Navbar;
