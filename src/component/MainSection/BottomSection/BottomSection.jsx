import { useEffect, useState } from "react";
import Heading from "../../Heading/Heading";
import "./BottomSection.css";
import HorizontalBarChart from "./HorizontalBarChart/HorizontalBarChart";
import RecentTransactionSection from "./RecentTransactionSection/RecentTransactionSection";

function BottomSection({ data, graphData, updateData }) {
  const [transactionData, setTransactionData] = useState([]);
  const rececntTransactionData = (data) => {
    data.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  };

  useEffect(() => {
    rececntTransactionData(data);
    setTransactionData(data);
  }, [data]);

  return (
    <div className="outerDiv">
      <div style={{ width: "70vW" }}>
        <Heading fontStyle="italic">Recent Transactions</Heading>
        <RecentTransactionSection
          data={transactionData}
          updateData={updateData}
        />
      </div>
      <div>
        <Heading fontStyle="italic">Top Expenses</Heading>
        <HorizontalBarChart data={graphData} />
      </div>
    </div>
  );
}

export default BottomSection;
