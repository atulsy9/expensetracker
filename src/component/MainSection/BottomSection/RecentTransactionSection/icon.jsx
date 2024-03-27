import "./icon.css";
import { RiBillLine } from "react-icons/ri";
import { FaBasketShopping } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { SiYourtraveldottv } from "react-icons/si";
import { GiTravelDress } from "react-icons/gi";
import { TfiGift } from "react-icons/tfi";

const getIcons = (category) => {
  if (category === "food") {
    return <IoFastFoodOutline size={"1.5rem"} color={"true"} />;
  }
  if (category === "travel") {
    return <SiYourtraveldottv size={"1.5rem"} color={"true"} />;
  }
  if (category === "entertainment") {
    return <TfiGift size={"1.5rem"} color={"true"} />;
  }
};
const Icon = ({ categories }) => {
  return <div className="iconStyle">{getIcons(categories)}</div>;
};
export default Icon;
