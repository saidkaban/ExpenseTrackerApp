import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const amountGenerator = () => {
    return (Math.random() * 300).toFixed(2);
  };

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: amountGenerator(),
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: amountGenerator(),
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: amountGenerator(),
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: amountGenerator(),
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Zara Perfume",
      amount: amountGenerator(),
      date: new Date(2020, 3, 16),
    },
    {
      id: "e6",
      title: "Zara Perfume",
      amount: amountGenerator(),
      date: new Date(2020, 3, 16),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );

  // The above code is transformed into below code behind the scenes. With React 17, we 
  // do not explicitly need to import React to do the transformation, it happens under the hood.

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
}

export default App;
