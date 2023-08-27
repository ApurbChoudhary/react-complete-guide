import React from "react";
import "./expenseForm.css";

const ExpenseForm = () => {
  // const [enteredExpenseType, setenteredExpenseType] = React.useState("");
  // const [enteredAmount, setEnteredAmount] = React.useState("");
  // const [enteredDate, setEnteredDate] = React.useState("");

  const [userInput, setUserInput] = React.useState({
    enteredExpenseType: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const expenseTypeChangeHandler = (event) => {
    console.log(event.target.value);
    // setenteredExpenseType(event.target.value);
    setUserInput({
      ...userInput,
      enteredExpenseType: event.target.value,
    });
  };

  const amountHandler = (event) => {
    console.log(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateHandler = (event) => {
    console.log(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Type</label>
          <input
            type="text"
            id="expenseType"
            onChange={expenseTypeChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="text" id="expenseAmount" onChange={amountHandler} />
        </div>
        <div className="new-expense__control">
          <label>Expense Date</label>
          <input type="date" id="expenseDate" onChange={dateHandler} />
        </div>
        <div className="new-expense__actions">
          <button>Submit Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
