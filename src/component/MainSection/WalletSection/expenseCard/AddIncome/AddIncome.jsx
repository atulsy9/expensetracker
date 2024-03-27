import "./AddIncome.css";
import { useState } from "react";
import Modal from "react-modal";

const AddIncome = ({ children, value }) => {
  const [openModal, SetModal] = useState(false);
  return (
    <div className="expenseCard">
      <div className="text">
        {children} : <span style={{ color: "#9DFF5B" }}>₹{value}</span>
      </div>

      <button
        className="button"
        style={{
          backgroundImage: "linear-gradient(90deg, #b5dc52 0%, #89e148 100%)",
        }}
        onClick={() => SetModal(true)}
      >
        + Add Income
      </button>
      <Modal
        isOpen={openModal}
        // className="ReactModal__Content"
        style={{
          content: {
            width: "40rem",
            height: "20rem",
            backgroundColor: "#EFEFEFD9",
          },
        }}
      >
        <h2>Add Expenses</h2>
        <form>
          <div className="inputOuterdiv">
            <input placeholder="Title" className="inputBox" />
            <input placeholder="Price" className="inputBox" />
            <input placeholder="Select Category" className="inputBox" />
            <input placeholder="dd/mm/yyyy" className="inputBox" />
          </div>
          <button className="submitbtn">Add Expenses</button>
          <button className="cancelBtn" onClick={() => SetModal(false)}>
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddIncome;
