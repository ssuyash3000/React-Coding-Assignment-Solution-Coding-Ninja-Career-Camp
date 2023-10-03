import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Create function to add an expense
  const handleAdd = (expenseTextInput, expenseAmountInput) => {
    let currExpense = {
      id: new Date().getTime(),
      text: expenseTextInput,
      amount: expenseAmountInput,
    };
    setExpenses((prevState) => {
      ///prevState.push(currExpense);
      ///console.log(prevState);
      return [currExpense, ...prevState];
    });
  };

  // Create function to delete an expense
  const handleDelete = (id) => {
    setExpenses((prevState) => {
      return prevState.filter((expense) => expense.id !== id);
    });
  };
  // useEffect(() => {
  //   console.log(expenses);
  // }, [expenses]);

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm handleAdd={handleAdd} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList
            expenses={expenses}
            setExpenses={setExpenses}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </>
  );
}

export default App;
