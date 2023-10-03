import React, { useEffect, useState } from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = (props) => {
  // Add logic here to calculate the grand total, profit and expense amount here
  let [grandTotal, setGrandTotal] = useState(0);
  let [expenseTotal, setExpenseTotal] = useState(0);
  let [incomeTotal, setIncomeTotal] = useState(0);
  useEffect(() => {
    let grandTotal = 0;
    let expenseTotal = 0;
    let incomeTotal = 0;
    for (let i = 0; i < props.expenses.length; i++) {
      grandTotal += Number(props.expenses[i].amount);
      if (Number(props.expenses[i].amount) > 0)
        incomeTotal += Number(props.expenses[i].amount);
      if (Number(props.expenses[i].amount) < 0)
        expenseTotal += Number(props.expenses[i].amount);
    }
    setGrandTotal(grandTotal);
    setExpenseTotal(expenseTotal);
    setIncomeTotal(incomeTotal);
  }, [props.expenses]);
  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${grandTotal}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${incomeTotal}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${expenseTotal}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
