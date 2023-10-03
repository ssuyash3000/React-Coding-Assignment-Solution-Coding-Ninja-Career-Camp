import { useEffect, useRef } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ handleAdd }) => {
  const expenseTextInput = useRef(); // Same as React.createRef(); but only made for func. comp.
  const expenseAmountInput = useRef(); // Same as React.createRef(); but only made for func. comp.
  useEffect(() => {
    //To get the focus on the Text Input right from the first render
    expenseTextInput.current.focus();
  }, []);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Logic to add expense here
    handleAdd(expenseTextInput.current.value, expenseAmountInput.current.value);
    //console.log(currExpense);
    expenseTextInput.current.value = "";
    expenseAmountInput.current.value = "";
    expenseTextInput.current.focus(); // To Bring Back the focus on Text Input of the form after we Add Transaction
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        required
        ref={expenseTextInput}
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        required
        ref={expenseAmountInput}
      />
      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  );
};

export default ExpenseForm;
