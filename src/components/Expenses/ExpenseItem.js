import React from "react";

import ExpenseDate from "./ExpenseDate";
import DeleteExpense from "./DeleteExpense";
import Card from "../UI/Card";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <DeleteExpense onDelete={() => props?.onDelete(props.id)} />
      </Card>
    </li>
  );
};

export default ExpenseItem;
