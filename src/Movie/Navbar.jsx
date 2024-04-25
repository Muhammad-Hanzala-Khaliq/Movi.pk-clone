import React, { useState } from "react";
import logo from "../Movie/Images/logo.png";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [icons, setIcons] = useState(false);
  const [change, setChange] = useState(false);

  const handleToggleIcons = (event) => {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    setIcons(!icons);
  };
  const handleToggleInput = (event) => {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    setChange(!change);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="hamburger-menu">
              <a href="" onClick={handleToggleIcons}>
                <GiHamburgerMenu className="hamburge-icon" />
              </a>
            </div>
            <NavLink exact to="/">
              <img src={logo} alt="" className="logo" />
            </NavLink>
            <div className={icons ? "menu-link mobile-menu-link" : "menu-link"}>
              <ul>
                <li className="nav_item">
                  <NavLink exact to="/indian" className="nav__link">
                    Indian Movies
                  </NavLink>
                </li>
                <li className="nav_item">
                  <NavLink exact to="/hollywood" className="nav__link">
                    Hollywood Movies
                  </NavLink>
                </li>
                <li className="nav_item">
                  <NavLink exact to="/south" className="nav__link">
                    South Hindi Movies
                  </NavLink>
                </li>
                <li className="nav_item">
                  <NavLink exact to="/punjabi" className="nav__link">
                    Punjabi Movies
                  </NavLink>
                </li>
                {/* <li className="nav_item">
                  <NavLink exact to="/genre" className="nav__link">
                    Genre
                  </NavLink>
                </li> */}
              </ul>
            </div>
            <div className={change ? "input mobile-menu-input" : "input"}>
              <input type="text" className="input" placeholder="Search.." />
              <FaSearch className="icon" />
            </div>
            <div className="last-input">
              <FiSearch className="input-icon" onClick={handleToggleInput} />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
