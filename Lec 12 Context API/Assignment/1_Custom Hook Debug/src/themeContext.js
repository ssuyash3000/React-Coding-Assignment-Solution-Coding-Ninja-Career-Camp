import { createContext, useContext, useState } from "react";

export const themeContext = createContext();

// debug the below custom hook
export const useGetThemeValue = () => {
  const value = useContext(themeContext);
  return value;
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};
