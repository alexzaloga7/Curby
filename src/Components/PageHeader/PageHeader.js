import "./PageHeader.scss";
import HeaderLogo from "../../assets/Logo/Screenshot 2023-05-03 at 10.24.46 PM.png";
// import HeaderAvatar from "../../assets/Images/Mohan-muruge.jpg";
import UploadAsset from "../../assets/Icons/upload.svg";
import { Link } from "react-router-dom";
import CurbyLogo from "../../assets/Logo/Untitled design (2).svg";
import React, { useState, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const menuElement = document.querySelector(".menu");
    menuElement.addEventListener("click", handleCloseMenu);
    return () => {
      menuElement.removeEventListener("click", handleCloseMenu);
    };
  }, []);

  return (
    <header className="header">
      <div className="burger-menu">
        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/listings"}>Gallery</Link>
            </li>
            <li>
              <Link to={"/uploads"}>Upload</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="logo-container">
        <Link to={"/"}>
          <img className="logo-image" src={CurbyLogo} alt="Curby Header Logo" />
          <p className="logo-text">Curby</p>
        </Link>
      </div>
    </header>
  );
}

export default Header;
