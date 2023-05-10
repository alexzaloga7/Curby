import "./Footer.scss";
import { Link } from "react-router-dom";
import AddIcon from "../../assets/Icons/add.svg";
import SearchIcon from "../../assets/Icons/searchicon.svg";
import InstagramIcon from "../../assets/Icons/instagram.svg";
import EmailIcon from "../../assets/Icons/email.svg";

function Footer() {
  return (
    <div className="footer">
      <Link to={"/uploads"}>
        <img
          className="footer-icon"
          src={EmailIcon}
          alt="instagram button"
        ></img>
      </Link>
      <Link to={"/uploads"}>
        <img className="footer-icon" src={AddIcon} alt="add button"></img>
      </Link>
      <Link to={"/gallery"}>
        <img className="footer-icon" src={SearchIcon} alt="add button"></img>
      </Link>
      <Link to={"/uploads"}>
        <img
          className="footer-icon"
          src={InstagramIcon}
          alt="email button"
        ></img>
      </Link>
    </div>
  );
}

export default Footer;
