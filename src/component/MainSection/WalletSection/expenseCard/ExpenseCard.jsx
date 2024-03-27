import AddExpenses from "./AddExpenses/AddExpenses";
import AddIncome from "./AddIncome/AddIncome";
import "./ExpenseCard.css";

function ExpenseCard({ children, value, balance }) {
  if (balance) {
    return <AddIncome value={value}>{children}</AddIncome>;
  } else {
    return <AddExpenses value={value}>{children}</AddExpenses>;
  }
}

export default ExpenseCard;
