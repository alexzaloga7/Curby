import "./Footer.scss";
import { Link } from "react-router-dom";
import AddIcon from "../../assets/Icons/add.svg";
import SearchIcon from "../../assets/Icons/Untitled design (8).svg";

function Footer() {
  return (
    <div className="footer">
      <Link to={"/uploads"}>
        <img className="footer-add" src={AddIcon} alt="add button"></img>
      </Link>

      <Link to={"/listings"}>
        <img className="footer-add" src={SearchIcon} alt="add button"></img>
      </Link>
    </div>
  );
}

export default Footer;
