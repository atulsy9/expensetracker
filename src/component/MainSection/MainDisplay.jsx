import { useEffect, useState } from "react";
import BottomSection from "./BottomSection/BottomSection";
import "./MainDisplay.css";
import WalletSection from "./WalletSection/WalletSection";
import { useSnackbar } from "notistack";

function MainDisplay() {
  const INITIALWALLETBALANCE = 5000;
  const { enqueueSnackbar } = useSnackbar();
  const [data, SetData] = useState([]);
  const [walletBalace, setWalletBalance] = useState(INITIALWALLETBALANCE);
  const [totalExpense, setTotalExpense] = useState(0);
  const [initialPageLoad, setInitialPageLoad] = useState(true);
  const [graphData, setGraphData] = useState([
    {
      categories: "food",
      price: 0,
    },
    {
      categories: "entertainment",
      price: 0,
    },
    {
      categories: "travel",
      price: 0,
    },
  ]);

  useEffect(() => {
    let storedData = localStorage.getItem("walletData");
    if (storedData) {
      const { data, walletBalace, totalExpense, graphData } =
        JSON.parse(storedData);
      SetData(data);
      setGraphData(graphData);
      setWalletBalance(walletBalace);
      setTotalExpense(totalExpense);
    }
  }, []);

  const objForLocalStorage = () => {
    let obj = {
      data: data,
      walletBalace: walletBalace,
      totalExpense: totalExpense,
      graphData: graphData,
    };
    return obj;
  };

  useEffect(() => {
    if (!initialPageLoad) {
      localStorage.setItem("walletData", JSON.stringify(objForLocalStorage()));
    }
    setInitialPageLoad(false);
  }, [data, walletBalace, totalExpense]);

  const ValidateWalletBalance = (bal, val) => {
    if (bal - val >= 0) {
      return true;
    } else {
      enqueueSnackbar(
        " 😥 Opps!!! Wallet Balance is not sufficient to add the expenses, Add Balance to continue...",
        { variant: "error" }
      );
    }
    return false;
  };

  const EditWalletBalance = (index, val) => {
    graphData[index].price += val;
    setGraphData(() => [...graphData]);
    setTotalExpense((prevBal) => prevBal + val);
    setWalletBalance((prevBal) => prevBal - val);
  };

  const updateData = (currData) => {
    let idx = data.findIndex((obj) => obj._id === currData._id);
    let index = graphData.findIndex(
      (idx) => idx.categories === currData.categories.toLowerCase()
    );
    if (idx === -1) {
      currData._id = Math.random();
      if (ValidateWalletBalance(walletBalace, currData.price)) {
        EditWalletBalance(index, currData.price);
        SetData((prevState) => [currData, ...prevState]);
      }
    } else {
      let prevBal = data[idx].price;
      let currBal = currData.price;
      let diff = currBal - prevBal;
      if (ValidateWalletBalance(walletBalace, diff)) {
        EditWalletBalance(index, diff);
        if (currBal === 0) {
          let newArr = data.filter((obj) => obj._id !== currData._id);
          SetData([...newArr]);
        } else {
          data[idx] = currData;
          SetData([...data]);
        }
      }
    }
  };

  return (
    <div className="mainDiv">
      <WalletSection
        updateData={updateData}
        data={data}
        graphData={graphData}
        walletBalace={walletBalace}
        setWalletBalance={setWalletBalance}
        totalExpense={totalExpense}
      />
      <BottomSection
        data={data}
        graphData={graphData}
        updateData={updateData}
      />
    </div>
  );
}

export default MainDisplay;
