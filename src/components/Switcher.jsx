import { DarkModeSwitch } from "react-toggle-dark-mode";
import UseDarkMode from "../hooks/UseDarkMode";
import { useState } from "react";

const Switcher = () => {
  const [colorTheme, setTheme] = UseDarkMode();
  const [darkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <>
      <DarkModeSwitch checked={darkMode} onChange={toggleDarkMode} />
    </>
  );
};

export default Switcher;
