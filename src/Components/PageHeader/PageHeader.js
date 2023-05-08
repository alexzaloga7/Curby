import "./PageHeader.scss";
import HeaderLogo from "../../assets/Logo/Screenshot 2023-05-03 at 10.24.46 PM.png";
// import HeaderAvatar from "../../assets/Images/Mohan-muruge.jpg";
import UploadAsset from "../../assets/Icons/upload.svg";
import { Link } from "react-router-dom";
import CurbyLogo from "../../assets/Logo/Untitled design.svg";

function Header() {
  return (
    <header className="header">
      <Link to={"/"}>
        <img
          className="header__logo"
          src={CurbyLogo}
          alt="BrainFlix Header Logo"
        />
      </Link>

      {/* <div className="header__box">
        <input className="header__searchbar" placeholder="Search" />
      </div>
      <Link to={"/uploads"} className="header__upload" alt="Upload Button">
        <img
          className="header__upload--icon"
          src={UploadAsset}
          alt="header upload icon"
        ></img>
        <p className="header__upload--text">UPLOAD</p>
      </Link> */}
    </header>
  );
}

export default Header;
