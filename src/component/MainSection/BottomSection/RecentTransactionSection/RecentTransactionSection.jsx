import "./RecentTransactionSection.css";
import Icon from "./icon";
import { MdOutlineEdit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import ReactModel from "../../ReactModel/ReactModel";

const DATAPERPAGE = 3;

const RecentTransactionSection = ({ data, updateData }) => {
  const [pageCount, SetPageCount] = useState(1);
  const [perPageData, setPerpageData] = useState([]);
  const [openEditModel, setOpenEditModel] = useState(false);
  const [toEditdata, settoEditData] = useState({});
  useEffect(() => {
    let newArr = data.slice(
      (pageCount - 1) * DATAPERPAGE,
      pageCount * DATAPERPAGE
    );
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

  const handelEdit = (key) => {
    let index = data.findIndex((obj) => obj._id === key);
    settoEditData(data[index]);
    setOpenEditModel(true);
  };

  const handelDelete = (key) => {
    let index = data.findIndex((obj) => obj._id === key);
    let newObj = { ...data[index] };
    newObj.price = 0;
    updateData({ ...newObj });
  };
  if (data.length) {
    return (
      <div className="transactionContainer">
        <div>
          {perPageData.map((val) => {
            return (
              <div key={val._id} className="transactionInnerDiv">
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
                    <MdOutlineEdit
                      size={"2rem"}
                      onClick={() => handelEdit(val._id)}
                    />
                  </div>
                  <ReactModel
                    isOpen={openEditModel}
                    SetModel={setOpenEditModel}
                    data={data}
                    updateData={updateData}
                    edit={true}
                    tobeEdit={toEditdata}
                  />
                  <div className="deleteBtn">
                    <TiDeleteOutline
                      size={"2rem"}
                      onClick={() => handelDelete(val._id)}
                    />
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
