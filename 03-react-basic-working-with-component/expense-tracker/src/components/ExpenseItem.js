import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expType);

  const clickHandler = () => setTitle("Updated Value!");

  return (
    <div className="expense-item">
      <ExpenseDate expDate={props.expDate} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₹{props.expAmount}</div>
      </div>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
}

export default ExpenseItem;
