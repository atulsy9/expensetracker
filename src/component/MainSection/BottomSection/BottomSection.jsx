import Heading from "../../Heading/Heading";
import "./BottomSection.css";
import HorizontalBarChart from "./HorizontalBarChart/HorizontalBarChart";
import RecentTransactionSection from "./RecentTransactionSection/RecentTransactionSection";

function BottomSection() {
  return (
    <div className="outerDiv">
      <div style={{ width: "70vW" }}>
        <Heading fontStyle="italic">Recent Transactions</Heading>
        <RecentTransactionSection />
      </div>
      <div>
        <Heading fontStyle="italic">Top Expenses</Heading>
        <HorizontalBarChart />
      </div>
    </div>
  );
}

export default BottomSection;
