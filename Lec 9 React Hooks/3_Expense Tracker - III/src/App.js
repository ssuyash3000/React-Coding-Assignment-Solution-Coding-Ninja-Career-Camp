import { useReducer } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";
import { act } from "react-dom/test-utils";
function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.expense, ...state];
    case "DELETE":
      return state.filter((currExepense) => currExepense.id != action.id);
  }
}
function App() {
  // Remove the useState hook and replace it with useReducer hook
  // Implement the functionality to add and remove the transaction in reducer function
  //const [expenses, setExpenses] = useState([]);
  let [expenses, dispatcher] = useReducer(expenseReducer, []);
  const handleAdd = (expense) => {
    dispatcher({ type: "ADD", expense: expense });
  };
  const handleDelete = (id) => {
    dispatcher({ type: "DELETE", id });
  };
  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm handleAdd={handleAdd} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} dispatcher={dispatcher} />
          <ExpenseList expenses={expenses} handleDelete={handleDelete} />
        </div>
      </div>
    </>
  );
}

export default App;
