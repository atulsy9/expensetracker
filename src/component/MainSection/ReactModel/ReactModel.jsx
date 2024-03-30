import Modal from "react-modal";
import { useEffect, useState } from "react";

const ReactModel = ({ isOpen, updateData, SetModel, tobeEdit, edit }) => {
  const [currdata, setCurrData] = useState({
    _id: "",
    title: "",
    price: "",
    categories: "",
    date: "",
  });
  useEffect(() => {
    if (edit) {
      setCurrData(tobeEdit);
    }
  }, [isOpen]);

  const validateData = ({ date }) => {
    let currDate = new Date(date).setHours(0, 0, 0, 0);
    if (new Date() - currDate > 0) {
      return true;
    }
    return false;
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (validateData(currdata)) {
      updateData(currdata);
      setCurrData({
        _id: "",
        title: "",
        price: "",
        categories: "",
        date: "",
      });
      SetModel(false);
    } else {
      alert("Date can't be greater than the current Date");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "price") {
      if (Number(value) || value === "") {
        setCurrData((prevState) => ({
          ...prevState,
          [name]: Number(value),
        }));
      } else {
        alert("Please Enter a Number");
        setCurrData((prevState) => ({
          ...prevState,
          [name]: "",
        }));
      }
    } else {
      setCurrData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
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
            value={currdata.categories}
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
            value={currdata.date}
            required
          />
        </div>
        <button className="submitbtn">Add Expenses</button>
        <button className="cancelBtn" onClick={() => SetModel(false)}>
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default ReactModel;
