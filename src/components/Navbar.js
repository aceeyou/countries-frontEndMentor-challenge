import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar({ onThemeSwitch, children }) {
  return (
    <nav>
      <h1>Where in the world?</h1>
      {children}
    </nav>
  );
}
