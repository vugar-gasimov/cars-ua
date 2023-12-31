import { NavLink, useLocation } from "react-router-dom";
import React from "react";
import Wheel from "../icons/wheel.svg";
import "../header/header.css";
import "./burger.css";
const Burger = ({ isOpen, isRotated, setIsOpen, setIsRotated }) => {
  const location = useLocation();
  const toggleMenu = () => {
    setIsRotated(!isRotated);
    setTimeout(() => {
      setIsOpen(!isOpen);
      document.body.style.overflow = isOpen ? "auto" : "hidden";
    }, 500);
  };
  return (
    <div className="burger--container">
      <button
        className={`burger--close-btn ${isRotated ? "rotate" : ""}`}
        onClick={toggleMenu}
      >
        <img src={Wheel} width={36} height={36} alt="Close icon" />
      </button>
      <ul className="header--list burger--list">
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
    </div>
  );
};

export default Burger;
