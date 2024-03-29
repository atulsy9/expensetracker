import "./RecentTransactionSection.css";
import Icon from "./icon";
import { MdOutlineEdit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const DATAPERPAGE = 3;

const RecentTransactionSection = ({ data }) => {
  const [pageCount, SetPageCount] = useState(1);
  const [perPageData, setPerpageData] = useState([]);

  useEffect(() => {
    let newArr = data.slice(
      (pageCount - 1) * DATAPERPAGE,
      pageCount * DATAPERPAGE
    );
    console.log(newArr);
    setPerpageData(newArr);
  }, [pageCount, data]);

  const handelClickLeft = () => {
    if (pageCount - 1 > 0) {
      SetPageCount((prevVal) => prevVal - 1);
    }
  };
  const handelClickright = () => {
    const maxPage = Math.ceil(data.length / DATAPERPAGE);
    if (pageCount < maxPage) {
      SetPageCount((prevVal) => prevVal + 1);
    }
  };
  if (data.length) {
    return (
      <div className="transactionContainer">
        <div>
          {perPageData.map((val) => {
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
        </div>
        <div className="paginationMainDiv">
          <FaRegArrowAltCircleLeft
            className="leftClickBtn"
            size={"2rem"}
            onClick={handelClickLeft}
          />
          <div className="pagination">{pageCount}</div>
          <FaRegArrowAltCircleRight
            className="rightClickBtn"
            size={"2rem"}
            onClick={handelClickright}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="transactionContainer noDataDiv"> No Expenses to show</div>
    );
  }
};

export default RecentTransactionSection;
