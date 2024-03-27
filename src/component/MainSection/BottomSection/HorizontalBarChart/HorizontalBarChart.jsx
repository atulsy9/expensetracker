import React from "react";
import "./HorizontalBarChart.css";

import { BarChart, Bar, XAxis, YAxis } from "recharts";
// const data = [
//   { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
//   { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
//   { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
// ];
const data = [
  {
    categories: "food",
    title: "samosa",
    date: "March 20, 2024",
    price: 150,
  },
  {
    categories: "entertainment",
    title: "movie",
    date: "March 21, 2024",
    price: 300,
  },
  {
    categories: "travel",
    title: "Auto",
    date: "March 22, 2024",
    price: 50,
  },
];
const sortedData = data.sort((a, b) => {
  return b.price - a.price;
});

const HorizontalBarChart = () => {
  return (
    <BarChart
      width={417}
      height={290}
      data={sortedData}
      maxBarSize={20}
      layout={"vertical"}
      className="barChart"
    >
      {/* <XAxis  /> */}
      <XAxis type={"number"} tick={false} axisLine={false} />
      <YAxis
        type={"category"}
        width={120}
        dataKey={"categories"}
        axisLine={false}
      />
      <Bar dataKey={"price"} fill={"#8884d8"} radius={20} />
    </BarChart>
  );
};

export default HorizontalBarChart;
