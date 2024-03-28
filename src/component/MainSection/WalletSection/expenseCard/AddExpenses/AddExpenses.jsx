import "./AddExpenses.css";
import { useState } from "react";
import Modal from "react-modal";

const AddExpenses = ({ updateData, children, value }) => {
  const [openModal, SetModal] = useState(false);
  const [currdata, setCurrData] = useState({
    title: "",
    price: "",
    categories: "",
    date: "",
  });
  const handelSubmit = (e) => {
    e.preventDefault();
    updateData(currdata);
    setCurrData({
      title: "",
      price: "",
      categories: "",
      date: "",
    });
    SetModal(false);
  };

  const handleChange = (e) => {
    // setData({ [e.target.name]: e.target.value });
    const { name, value } = e.target;
    if (name === "price") {
      setCurrData((prevState) => ({
        ...prevState,
        [name]: Number(value),
      }));
    } else {
      setCurrData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

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
              defaultValue={currdata.title}
            />
            <input
              placeholder="Price"
              name="price"
              className="inputBox"
              onChange={handleChange}
              defaultValue={currdata.price}
            />
            <select
              className="inputBox"
              name="categories"
              onChange={handleChange}
              defaultValue={currdata.categories}
            >
              <option value="" disabled selected>
                Choose your option
              </option>
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
            />
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

export default AddExpenses;
