import React from "react";

import "./DeleteExpense.css";

const DeleteExpense = (props) => {
  return (
    <button className="remove-button" type="button" onClick={props?.onDelete}>
      Remove
    </button>
  );
};

export default DeleteExpense;
