import "./ExpenseCard.css";

function ExpenseCard({ children, value, balance }) {
  if (balance) {
    return (
      <div className="expenseCard">
        <div className="text">
          {children} : <span style={{ color: "#9DFF5B" }}>₹{value}</span>
        </div>

        <div
          className="button"
          style={{
            backgroundImage: "linear-gradient(90deg, #b5dc52 0%, #89e148 100%)",
          }}
        >
          + Add Income
        </div>
      </div>
    );
  } else {
    return (
      <div className="expenseCard">
        <div className="text">
          {children} : <span style={{ color: "#F4BB4A" }}>₹{value}</span>
        </div>
        <div
          className="button"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #FF9595 0%, #FF4747 80%, #FF3838 100%)",
          }}
        >
          + Add Expenses
        </div>
      </div>
    );
  }
}

export default ExpenseCard;
