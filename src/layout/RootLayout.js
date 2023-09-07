import { Outlet } from "react-router-dom";

import ThemeToggle from "../components/ThemeToggle";
import Navbar from "../components/Navbar";
import Main from "../components/Main";

export default function RootLayout({ onThemeSwitch }) {
  return (
    <div className="root-layout">
      <Navbar>
        <ThemeToggle onThemeSwitch={onThemeSwitch} />
      </Navbar>
      {/* <Link to="/">Main</Link> */}
      {/* <Main /> */}
      <Outlet />
    </div>
  );
}
