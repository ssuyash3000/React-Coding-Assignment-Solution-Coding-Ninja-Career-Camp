import { useGetLanguageValue } from "./languageContext";
import { useGetThemeValue } from "./themeContext";

export const Navbar = () => {
  const { theme, setTheme } = useGetThemeValue();
  const { language } = useGetLanguageValue();

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        <button onClick={changeTheme}>
          {theme === "light" ? "Dark" : "Light"} Theme
        </button>
        <span>{language}</span>
      </div>
    </div>
  );
};
