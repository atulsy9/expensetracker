import "./AddExpenses.css";
import { useState } from "react";
import Modal from "react-modal";

const AddExpenses = ({ children, value }) => {
  const [openModal, SetModal] = useState(false);
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
        <form>
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

export default AddExpenses;
