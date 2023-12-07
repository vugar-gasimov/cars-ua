import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Icon from "../icons/car-logo.svg";
import "./header.css";

const Header = () => {
  const location = useLocation();
  return (
    <header className="header">
      <nav className="nav">
        <Link className="header--logo-link" to="/">
          <img src={Icon} alt="Car Logo" width={36} height={36} />
          Cars-Ua
        </Link>
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
      </nav>
    </header>
  );
};

export default Header;
