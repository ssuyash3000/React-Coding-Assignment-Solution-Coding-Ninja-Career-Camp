import { useContext } from "react";
import { languageContext } from "./languageContext";
import { themeContext } from "./themeContext";

export const Navbar = () => {
  // get theme and lanauge contexts here
  const languageContextConsume = useContext(languageContext);
  const themeContextConsume = useContext(themeContext);
  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        <button
          onClick={() =>
            themeContextConsume.theme === "dark"
              ? themeContextConsume.setTheme("light")
              : themeContextConsume.setTheme("dark")
          }>
          {themeContextConsume.theme === "dark" ? "Light" : "Dark"} Theme
        </button>
        <span>{languageContextConsume.language}</span>
      </div>
    </div>
  );
};
