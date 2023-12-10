import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Icon from "../icons/car-logo.svg";
import Wheel from "../icons/wheel.svg";
import "./header.css";
import Burger from "../burger/Burger";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const toggleMenu = () => {
    setIsRotated(!isRotated);
    setTimeout(() => {
      setIsOpen(!isOpen);
      document.body.style.overflow = isOpen ? "auto" : "hidden";
    }, 500);
  };
  useEffect(() => {
    let timeoutId;
    if (isOpen) {
      timeoutId = setTimeout(() => {
        document.body.style.overflow = isOpen ? "auto" : "hidden";
      }, 500);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isOpen]);
  return (
    <header className="header">
      <nav className="nav">
        <Link className="header--logo-link" to="/">
          <img src={Icon} alt="Car Logo" width={36} height={36} />
          Cars-Ua
        </Link>
        <div>
          <ul className="header--list">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/catalogues" state={{ from: location }}>
                Catalogues
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorites" state={{ from: location }}>
                Favorites
              </NavLink>
            </li>
          </ul>
          <button
            style={{ display: "none" }}
            className="header--burger-btn"
            onClick={toggleMenu}
          >
            <img
              className={`header--burger-img ${isRotated ? "rotate" : ""}`}
              src={Wheel}
              alt="Burger icon"
              width={36}
              height={36}
            />
          </button>
          {isOpen && (
            <Burger
              isOpen={isOpen}
              isRotated={isRotated}
              setIsOpen={setIsOpen}
              setIsRotated={setIsRotated}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
