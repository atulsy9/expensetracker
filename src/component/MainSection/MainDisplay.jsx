import { useEffect, useState } from "react";
import BottomSection from "./BottomSection/BottomSection";
import "./MainDisplay.css";
import WalletSection from "./WalletSection/WalletSection";
function MainDisplay() {
  const INITIALWALLETBALANCE = 5000;
  const [data, SetData] = useState([]);
  const [walletBalace, setWalletBalance] = useState(INITIALWALLETBALANCE);
  const [totalExpense, setTotalExpense] = useState(0);
  const [graphData, setGraphData] = useState([
    {
      categories: "food",
      price: 0,
    },
    {
      categories: "entertainment",
      price: 0,
    },
    {
      categories: "travel",
      price: 0,
    },
  ]);
  const updateData = (currData) => {
    SetData((prevState) => [currData, ...prevState]);
    let index = graphData.findIndex(
      (idx) => idx.categories === currData.categories.toLowerCase()
    );
    graphData[index].price += currData.price;
    setGraphData(() => [...graphData]);
    setTotalExpense((prevBal) => prevBal + currData.price);
    setWalletBalance((prevBal) => prevBal - currData.price);
  };

  return (
    <div className="mainDiv">
      <WalletSection
        updateData={updateData}
        data={data}
        graphData={graphData}
        walletBalace={walletBalace}
        setWalletBalance={setWalletBalance}
        totalExpense={totalExpense}
      />
      <BottomSection data={data} graphData={graphData} />
    </div>
  );
}

export default MainDisplay;
