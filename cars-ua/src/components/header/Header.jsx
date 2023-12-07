import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Icon from "../icons/car-logo.svg";

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <nav>
        <Link to="/">{Icon}cars-ua</Link>
        <ul>
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
