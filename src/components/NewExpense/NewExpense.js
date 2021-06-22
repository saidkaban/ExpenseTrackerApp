import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formState, setFormState] = useState("closed");

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Date.now(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setFormState("closed")
  };

  const formStateOpener = () => {
    setFormState("open");
  };

  const formStateCloser = () => {
    setFormState("closed");
  };

  return (
    <div className="new-expense">
      {formState === "closed" ? (
        <button onClick={formStateOpener}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelClick={formStateCloser}
        />
      )}
    </div>
  );
};

export default NewExpense;
