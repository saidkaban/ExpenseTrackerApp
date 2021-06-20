import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2021');

  const filterChangeHandler = (filteredYear) => {
    setSelectedYear(filteredYear);
  };

  let expenses = props.items.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onFilterChange={filterChangeHandler} />
      {expenses}
    </Card>
  );
};

export default Expenses;
