import "./RecentTransactionSection.css";
import Icon from "./icon";
import { MdOutlineEdit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const RecentTransactionSection = () => {
  const data = [
    {
      categories: "food",
      title: "samosa",
      date: "March 20, 2024",
      price: "150",
    },
    {
      categories: "entertainment",
      title: "movie",
      date: "March 21, 2024",
      price: "300",
    },
    {
      categories: "travel",
      title: "Auto",
      date: "March 22, 2024",
      price: "50",
    },
  ];
  return (
    <div className="transactionContainer">
      {data.map((val) => {
        return (
          <div key={val.title} className="transactionInnerDiv">
            <Icon categories={val.categories} />
            <div className="titleSection">
              <div>
                <div>{val.title}</div>
                <div>{val.date}</div>
              </div>
              <div style={{ alignSelf: "center" }}>₹{val.price}</div>
            </div>
            <div className="editSection">
              <div className="editBtn">
                <MdOutlineEdit size={"2rem"} />
              </div>
              <div className="deleteBtn">
                <TiDeleteOutline size={"2rem"} />
              </div>
            </div>
          </div>
        );
      })}
      <div className="paginationMainDiv">
        <FaRegArrowAltCircleLeft size={"2rem"} />
        <div className="pagination">1</div>
        <FaRegArrowAltCircleRight size={"2rem"} />
      </div>
    </div>
  );
};

export default RecentTransactionSection;
