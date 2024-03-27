import BottomSection from "./BottomSection/BottomSection";
import "./MainDisplay.css";
import WalletSection from "./WalletSection/WalletSection";

function MainDisplay() {
  return (
    <div className="mainDiv">
      <WalletSection />
      <BottomSection />
    </div>
  );
}

export default MainDisplay;
