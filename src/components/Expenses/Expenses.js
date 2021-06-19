import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  let expenses = props.items.map(item => {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  })

  return (
    <Card className="expenses">
      {expenses}
    </Card>
  )
}

export default Expenses;