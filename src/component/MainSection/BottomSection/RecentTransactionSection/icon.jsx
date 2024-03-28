import "./icon.css";
import { IoFastFoodOutline } from "react-icons/io5";
import { SiYourtraveldottv } from "react-icons/si";
import { TfiGift } from "react-icons/tfi";

const getIcons = (categories) => {
  if (categories.toLowerCase() === "food") {
    return <IoFastFoodOutline size={"1.5rem"} color={"true"} />;
  }
  if (categories.toLowerCase() === "travel") {
    return <SiYourtraveldottv size={"1.5rem"} color={"true"} />;
  }
  if (categories.toLowerCase() === "entertainment") {
    return <TfiGift size={"1.5rem"} color={"true"} />;
  }
};
const Icon = ({ categories }) => {
  return <div className="iconStyle">{getIcons(categories)}</div>;
};
export default Icon;
