import "./WalletSection.css";
import ExpenseCard from "./expenseCard/ExpenseCard";
import Graph from "./pieChart/Graph.tsx";
import ColorIndicator from "./colorIndecator/colorIndicator.jsx";

function WalletSection({
  updateData,
  data,
  graphData,
  walletBalace,
  setWalletBalance,
  totalExpense,
}) {
  return (
    <div className="walletMainSection">
      <ExpenseCard
        value={walletBalace}
        balance={true}
        changebalance={setWalletBalance}
      >
        Wallet Balance
      </ExpenseCard>
      <ExpenseCard updateData={updateData} value={totalExpense}>
        Expenses
      </ExpenseCard>
      <div style={{ width: "24rem" }}>
        <Graph data={graphData} noTransancation={data.length ? false : true} />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {data.length ? (
            <>
              <ColorIndicator color={"#0088FE"}> entertainment </ColorIndicator>
              <ColorIndicator color={"#00C49F"}> food </ColorIndicator>
              <ColorIndicator color={"#FFBB28"}> travel </ColorIndicator>
            </>
          ) : (
            <ColorIndicator color={"#ac68e3"}> No expenses </ColorIndicator>
          )}
        </div>
      </div>
    </div>
  );
}

export default WalletSection;
