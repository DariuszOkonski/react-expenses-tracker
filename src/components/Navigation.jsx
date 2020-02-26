import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div id="navigation">
      <ul className="nav__items">
        <li className="nav__item">
          <NavLink className="nav__link" exact to="/">New</NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" exact to="/history">History</NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" exact to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;