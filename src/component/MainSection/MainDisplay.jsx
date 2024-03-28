import { useState } from "react";
import BottomSection from "./BottomSection/BottomSection";
import "./MainDisplay.css";
import WalletSection from "./WalletSection/WalletSection";

function MainDisplay() {
  const [data, SetData] = useState([]);
  const updateData = (currData) => {
    SetData((prevState) => [...prevState, currData]);
  };
  console.log(data.map((val) => val));

  return (
    <div className="mainDiv">
      <WalletSection updateData={updateData} />
      <BottomSection data={data} />
    </div>
  );
}

export default MainDisplay;
