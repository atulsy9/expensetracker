import "./AddIncome.css";
import { useState } from "react";
import Modal from "react-modal";

const AddIncome = ({ children, value }) => {
  const [openModal, SetModal] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
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
            inset: null,
            backgroundColor: "#EFEFEFD9",
          },
        }}
      >
        <h2>Add Balance</h2>
        <form onSubmit={handelSubmit}>
          <div className="addBalaceOuterDiv">
            <input placeholder="Income Amount" className="inputBox" />
            <button className="submitbtn">Add Balance</button>
            <button className="cancelBtn" onClick={() => SetModal(false)}>
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddIncome;
