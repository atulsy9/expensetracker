import "./Graph.css";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = {
  entertainment: "#0088FE",
  food: "#00C49F",
  travel: "#FFBB28",
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  const percentage = `${(percent * 100).toFixed(0)}%`;
  if (percentage !== "0%") {
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  }
};
export default function Graph({ data, noTransancation }) {
  return (
    <PieChart width={300} height={300} className="reactPie">
      {!noTransancation ? (
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey={"price"}
        >
          {data.map((entry, index) => {
            if (entry.price) {
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[entry.categories.toLowerCase()]}
                />
              );
            }
          })}
        </Pie>
      ) : (
        <Pie
          data={[{ val: 1 }]}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey={"val"}
        >
          <Cell fill="#ac68e3" />
        </Pie>
      )}
    </PieChart>
  );
}
