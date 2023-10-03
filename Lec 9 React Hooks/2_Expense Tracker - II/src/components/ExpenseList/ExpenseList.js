import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";
const ExpenseList = (props) => {
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {/* Display transactions here */}
        {props.expenses.map((currExpense, index) => {
          return (
            <Transaction
              expense={currExpense}
              index={index}
              setExpenses={props.setExpenses}
              key={currExpense.id}
              handleDelete={props.handleDelete}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ExpenseList;
