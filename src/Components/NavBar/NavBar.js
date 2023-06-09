import "./NavBar.scss";
import { Link } from "react-router-dom";
import BurgerBar from "../../Components/BurgerBar/BurgerBar";
import Logo from "../../assets/Logo/Logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <BurgerBar />
        <div className="navbar-box">
          <Link to={"/"}>
            <img src={Logo} alt="Curby Header Logo" className="logo" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
