import "./styles.css";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { useGetThemeValue } from "./themeContext";

export default function App() {
  const { theme } = useGetThemeValue();

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Home />
    </div>
  );
}
