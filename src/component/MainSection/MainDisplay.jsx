import { useEffect, useState } from "react";
import BottomSection from "./BottomSection/BottomSection";
import "./MainDisplay.css";
import WalletSection from "./WalletSection/WalletSection";
// const graphData = [
//   {
//     categories: "food",
//     price: 0,
//   },
//   {
//     categories: "entertainment",
//     price: 0,
//   },
//   {
//     categories: "travel",
//     price: 0,
//   },
// ];
function MainDisplay() {
  const [data, SetData] = useState([]);
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
    SetData((prevState) => [...prevState, currData]);
  };
  const totalExpenses = () => {
    data.forEach((val) => {
      let index = graphData.findIndex(
        (idx) => idx.categories === val.categories.toLowerCase()
      );
      graphData[index].price += val.price;
      setGraphData(() => [...graphData]);
    });
  };

  useEffect(() => {
    totalExpenses();
  }, [data]);

  return (
    <div className="mainDiv">
      <WalletSection
        updateData={updateData}
        data={data}
        graphData={graphData}
      />
      <BottomSection data={data} graphData={graphData} />
    </div>
  );
}

export default MainDisplay;
