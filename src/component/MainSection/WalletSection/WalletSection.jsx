import "./WalletSection.css";
import ExpenseCard from "./expenseCard/ExpenseCard";
import Graph from "./pieChart/Graph.tsx";

function WalletSection() {
  return (
    <div className="walletMainSection">
      <ExpenseCard value={5000} balance={true}>
        Wallet Balance
      </ExpenseCard>
      <ExpenseCard value={500}>Expenses</ExpenseCard>
      <Graph />
    </div>
  );
}

export default WalletSection;
