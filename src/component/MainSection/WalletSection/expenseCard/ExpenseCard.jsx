import AddExpenses from "./AddExpenses/AddExpenses";
import AddIncome from "./AddIncome/AddIncome";
import "./ExpenseCard.css";

function ExpenseCard({ updateData, children, value, balance, changebalance }) {
  if (balance) {
    return (
      <AddIncome value={value} changebalance={changebalance}>
        {children}
      </AddIncome>
    );
  } else {
    return (
      <AddExpenses updateData={updateData} value={value}>
        {children}
      </AddExpenses>
    );
  }
}

export default ExpenseCard;
