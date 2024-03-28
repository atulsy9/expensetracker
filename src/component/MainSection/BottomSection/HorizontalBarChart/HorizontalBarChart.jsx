import React, { useState } from "react";
import "./HorizontalBarChart.css";

import { BarChart, Bar, XAxis, YAxis } from "recharts";

const HorizontalBarChart = ({ data }) => {
  // const [regulatedata, setRegulateData] = useState([constantdata]);
  const schema = (data) => {
    data.forEach((val) => {});
  };
  const sortedData = data.sort((a, b) => {
    return b.price - a.price;
  });
  if (data.length) {
    return (
      <BarChart
        width={417}
        height={290}
        data={sortedData}
        maxBarSize={20}
        layout={"vertical"}
        className="barChart"
      >
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
  } else {
    return (
      <BarChart
        width={417}
        height={290}
        data={data}
        maxBarSize={20}
        layout={"vertical"}
        className="barChart"
      >
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
  }
};

export default HorizontalBarChart;
