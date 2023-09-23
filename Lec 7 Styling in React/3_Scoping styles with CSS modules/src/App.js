import style from "./styles.module.css";
import List from "./List";

export default function App() {
  return (
    <div>
      <h3 className={style.title}>Ecommerce Store</h3>
      <List />
    </div>
  );
}
