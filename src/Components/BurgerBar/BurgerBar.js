import "./BurgerBar.scss";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function BurgerBar() {
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
    <div className="menu-container">
      <div
        className={`menu-icon ${isOpen ? "open" : ""}`}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
        <nav className={`menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/gallery"}>Gallery</Link>
            </li>
            <li>
              <Link to={"/uploads"}>Upload</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default BurgerBar;
