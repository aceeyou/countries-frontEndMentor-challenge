import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

export default function ThemeToggle({ onThemeSwitch }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <button
      className="theme-switch-container"
      onClick={() => {
        setIsDarkMode((c) => !c);
        onThemeSwitch();
      }}
    >
      <FontAwesomeIcon className="icon" icon={isDarkMode ? faSun : faMoon} />
      <p>{isDarkMode ? "Light Mode" : "Dark Mode"}</p>
    </button>
  );
}
