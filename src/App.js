import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// layout
import RootLayout from "./layout/RootLayout";

// pages
import Main from "./components/Main";
import AboutCountry from "./components/AboutCountry";

function App() {
  // gets the darkmode key on the localstorage for theme switching
  let darkMode = localStorage.getItem("darkmode");

  const handleSetDarkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkmode", "enabled");
  };

  const handleSetLightMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkmode", null);
  };

  if (darkMode === "enabled") handleSetDarkMode();
  const handleSwitchTheme = () => {
    darkMode = localStorage.getItem("darkmode");
    if (darkMode !== "enabled") {
      handleSetDarkMode();
    } else {
      handleSetLightMode();
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout onThemeSwitch={handleSwitchTheme} />}
      >
        <Route index element={<Main />} />
        <Route path="country/:alpha3code" element={<AboutCountry />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
// <Navbar>
//   <ThemeToggle onThemeSwitch={handleSwitchTheme} />
// </Navbar>
// <Main />

export default App;
