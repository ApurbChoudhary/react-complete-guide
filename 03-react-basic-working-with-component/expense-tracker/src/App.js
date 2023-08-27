import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/newExpense/NewExpense";

function App() {
  const expense = [
    {
      id: "e1",
      title: "School Fees",
      amount: 8600,
      date: new Date(),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 10000,
      date: new Date(),
    },
    {
      id: "e3",
      title: "Card Bills",
      amount: 55000,
      date: new Date(),
    },
    {
      id: "e4",
      title: "House Rent",
      amount: 25000,
      date: new Date(),
    },
  ];
  return (
    <div>
      <h2>Expense Report</h2>
      <NewExpense />
      <ExpenseItem
        expType={expense[0].title}
        expAmount={expense[0].amount}
        expDate={expense[0].date}
      />
      <ExpenseItem
        expType={expense[1].title}
        expAmount={expense[1].amount}
        expDate={expense[1].date}
      />
      <ExpenseItem
        expType={expense[2].title}
        expAmount={expense[2].amount}
        expDate={expense[2].date}
      />
      <ExpenseItem
        expType={expense[3].title}
        expAmount={expense[3].amount}
        expDate={expense[3].date}
      />
    </div>
  );
}

export default App;
