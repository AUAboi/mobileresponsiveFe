/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const LineChart = ({ data }) => {
  return (
    <ResponsiveContainer  width={"100%"} height={350}>
      
      <AreaChart
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid x={5} y={5} strokeDasharray="10 10" />
        <XAxis  dataKey="name"  padding={10} attributeName={"date"} />
        {/* <YAxis /> */}
        <Tooltip />
        <Area
          type="linear"
          dataKey="pv"
          stroke="#065F46"
          fill="#065F46"
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
