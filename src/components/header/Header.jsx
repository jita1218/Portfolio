import React, { useState } from "react";
import "./header.css";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import SplashSection from "../splashsection/SplashSection";

const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <header className="header">
      <SplashSection/>
    </header>
  );
};

export default Header;
