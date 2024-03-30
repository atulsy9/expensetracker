import "./AddExpenses.css";
import { useState } from "react";
import ReactModel from "../../../ReactModel/ReactModel";

const AddExpenses = ({ updateData, children, value }) => {
  const [openModal, SetModal] = useState(false);
  // const [currdata, setCurrData] = useState({
  //   title: "",
  //   price: "",
  //   categories: "",
  //   date: "",
  // });

  // const validateData = ({ date }) => {
  //   let currDate = new Date(date);
  //   if (new Date() - currDate > 0) {
  //     return true;
  //   }
  //   return false;
  // };

  // const handelSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateData(currdata)) {
  //     updateData(currdata);
  //     setCurrData({
  //       title: "",
  //       price: "",
  //       categories: "",
  //       date: "",
  //     });
  //     SetModal(false);
  //   } else {
  //     alert("Date can't be greater than the current Date");
  //   }
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === "price") {
  //     if (Number(value)) {
  //       setCurrData((prevState) => ({
  //         ...prevState,
  //         [name]: Number(value),
  //       }));
  //     } else {
  //       alert("Please Enter a Number");
  //       setCurrData((prevState) => ({
  //         ...prevState,
  //         [name]: "",
  //       }));
  //     }
  //   } else {
  //     setCurrData((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));
  //   }
  // };

  return (
    <div className="expenseCard">
      <div className="text">
        {children} : <span style={{ color: "#F4BB4A" }}>₹{value}</span>
      </div>
      <button
        className="button"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #FF9595 0%, #FF4747 80%, #FF3838 100%)",
        }}
        onClick={() => SetModal(true)}
      >
        + Add Expenses
      </button>
      <ReactModel
        isOpen={openModal}
        updateData={updateData}
        SetModel={SetModal}
      />
      {/* <Modal
        ariaHideApp={false}
        isOpen={openModal}
        style={{
          content: {
            width: "40rem",
            height: "20rem",
            backgroundColor: "#EFEFEFD9",
          },
        }}
      >
        <h2>Add Expenses</h2>
        <form onSubmit={handelSubmit}>
          <div className="inputOuterdiv">
            <input
              placeholder="Title"
              name="title"
              className="inputBox"
              onChange={handleChange}
              value={currdata.title}
              required
            />
            <input
              placeholder="Price"
              name="price"
              className="inputBox"
              onChange={handleChange}
              value={currdata.price}
              required
            />
            <select
              className="inputBox"
              name="categories"
              onChange={handleChange}
              defaultValue={""}
              required
            >
              <option selected>Choose your option</option>
              <option>Entertainment</option>
              <option>Food</option>
              <option>Travel</option>
            </select>
            <input
              placeholder="dd/mm/yyyy"
              type="date"
              name="date"
              className="inputBox"
              onChange={handleChange}
              defaultValue={currdata.date}
              required
            />
          </div>
          <button className="submitbtn">Add Expenses</button>
          <button className="cancelBtn" onClick={() => SetModal(false)}>
            Cancel
          </button>
        </form>
      </Modal> */}
    </div>
  );
};

export default AddExpenses;
