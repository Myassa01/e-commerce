import React, { useEffect, useState } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="relative h-10 w-16 cursor-pointer" onClick={toggleTheme}>
      <img
        src={LightButton}
        alt="Light Mode"
        className={`w-14 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
         transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      />
      <img
        src={DarkButton}
        alt="Dark Mode"
        className={`w-14 transition-all duration-300 absolute right-0 z-10 ${theme === "light" ? "opacity-0" : "opacity-100"}`}
      />
    </div>
  );
};

export default DarkMode;
