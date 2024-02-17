import React, { useState } from "react";
import "./header.css";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav_logo">
          <h3>Jitu</h3>
        </a>

        <div className={isDarkMode ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav_item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav_item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>

            <li className="nav_item">
              <a href="#qualification" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Qualification
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
          </ul>
          
        </div>
        <DarkModeSwitch
        className="darkicon"
            style={{ marginBottom: '2rem' }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={30}
          />
      </nav>
    </header>
  );
};

export default Header;
