import { Children } from "react";
import "./colorIndicator.css";

const ColorIndicator = ({ color, children }) => {
  return (
    <div>
      <span className="indicatorDiv" style={{ backgroundColor: color }} />
      {children}
    </div>
  );
};

export default ColorIndicator;
