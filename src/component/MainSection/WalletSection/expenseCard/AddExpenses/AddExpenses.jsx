import "./AddExpenses.css";
import { useState } from "react";
import ReactModel from "../../../ReactModel/ReactModel";

const AddExpenses = ({ updateData, children, value }) => {
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
      <ReactModel
        isOpen={openModal}
        updateData={updateData}
        SetModel={SetModal}
      />
    </div>
  );
};

export default AddExpenses;
